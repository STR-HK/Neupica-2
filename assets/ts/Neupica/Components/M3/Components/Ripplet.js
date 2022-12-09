export const defaultOptions = {
    className: '',
    color: 'currentcolor',
    opacity: 0.1,
    spreadingDuration: '.4s',
    spreadingDelay: '0s',
    spreadingTimingFunction: 'linear',
    clearing: true,
    clearingDuration: '1s',
    clearingDelay: '0s',
    clearingTimingFunction: 'ease-in-out',
    centered: false,
    appendTo: 'auto',
};
const target2container2ripplet = new Map();
let containerContainerTemplate;
const findElementAppendTo = (target, appendTo) => {
    if (appendTo && appendTo !== 'auto') {
        return appendTo === 'target' ? target : appendTo === 'parent' ? target.parentElement : document.querySelector(appendTo);
    }
    while (target &&
        (target instanceof SVGElement ||
            target instanceof HTMLInputElement ||
            target instanceof HTMLSelectElement ||
            target instanceof HTMLTextAreaElement ||
            target instanceof HTMLImageElement ||
            target instanceof HTMLHRElement)) {
        target = target.parentElement;
    }
    return target;
};
function ripplet({ currentTarget, clientX, clientY }, _options) {
    if (!(currentTarget instanceof Element)) {
        return;
    }
    const options = _options
        ? Object.keys(defaultOptions).reduce((merged, field) => ((merged[field] = _options.hasOwnProperty(field) ? _options[field] : defaultOptions[field]), merged), {})
        : defaultOptions;
    if (!containerContainerTemplate) {
        const _containerContainerTemplate = document.createElement('div');
        _containerContainerTemplate.innerHTML =
            '<div style="float:left;position:relative;isolation:isolate;pointer-events:none"><div style="position:absolute;overflow:hidden;transform-origin:0 0"><div style="border-radius:50%;transform:scale(0)"></div></div></div>';
        containerContainerTemplate = _containerContainerTemplate.firstChild;
    }
    const targetRect = currentTarget.getBoundingClientRect();
    if (options.centered && options.centered !== 'false') {
        clientX = targetRect.left + targetRect.width * 0.5;
        clientY = targetRect.top + targetRect.height * 0.5;
    }
    else if (typeof clientX !== 'number' || typeof clientY !== 'number') {
        return;
    }
    else {
        const zoomReciprocal = 1 / (+getComputedStyle(document.body).zoom || 1);
        clientX = clientX * zoomReciprocal;
        clientY = clientY * zoomReciprocal;
    }
    const targetStyle = getComputedStyle(currentTarget);
    const applyCssVariable = (value) => {
        const match = value && /^var\((--.+)\)$/.exec(value);
        return match ? targetStyle.getPropertyValue(match[1]) : value;
    };
    const elementAppendTo = findElementAppendTo(currentTarget, options.appendTo);
    const containerContainerElement = elementAppendTo.appendChild(containerContainerTemplate.cloneNode(true));
    // containerContainerElement.style.zIndex = ((+targetStyle.zIndex || 0) + 1) as string & number
    containerContainerElement.style.zIndex = String(10000);
    const containerElement = containerContainerElement.firstChild;
    {
        let containerRect = containerElement.getBoundingClientRect();
        const containerStyle = containerElement.style;
        containerStyle.top = `${targetRect.top - containerRect.top}px`;
        containerStyle.left = `${targetRect.left - containerRect.left}px`;
        containerStyle.width = `${targetRect.width}px`;
        containerStyle.height = `${targetRect.height}px`;
        containerStyle.opacity = applyCssVariable(options.opacity);
        containerStyle.borderTopLeftRadius = targetStyle.borderTopLeftRadius;
        containerStyle.borderTopRightRadius = targetStyle.borderTopRightRadius;
        containerStyle.borderBottomLeftRadius = targetStyle.borderBottomLeftRadius;
        containerStyle.borderBottomRightRadius = targetStyle.borderBottomRightRadius;
        containerStyle.clipPath = targetStyle.clipPath;
        containerRect = containerElement.getBoundingClientRect();
        const scaleX = targetRect.width / containerRect.width;
        const scaleY = targetRect.height / containerRect.height;
        containerStyle.transform = `scale(${scaleX},${scaleY}) translate(${targetRect.left - containerRect.left}px,${targetRect.top - containerRect.top}px)`;
    }
    {
        const distanceX = Math.max(clientX - targetRect.left, targetRect.right - clientX);
        const distanceY = Math.max(clientY - targetRect.top, targetRect.bottom - clientY);
        const radius = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        const rippletElement = containerElement.firstChild;
        const rippletStyle = rippletElement.style;
        const color = applyCssVariable(options.color);
        rippletStyle.backgroundColor = /^currentcolor$/i.test(color) ? targetStyle.color : color;
        rippletElement.className = options.className;
        rippletStyle.width = rippletStyle.height = `${radius + radius}px`;
        if (getComputedStyle(elementAppendTo).direction === 'rtl') {
            rippletStyle.marginRight = `${targetRect.right - clientX - radius}px`;
        }
        else {
            rippletStyle.marginLeft = `${clientX - targetRect.left - radius}px`;
        }
        rippletStyle.marginTop = `${clientY - targetRect.top - radius}px`;
        rippletStyle.transition = `transform ${applyCssVariable(options.spreadingDuration)} ${applyCssVariable(options.spreadingTimingFunction)} ${applyCssVariable(options.spreadingDelay)},opacity ${applyCssVariable(options.clearingDuration)} ${applyCssVariable(options.clearingTimingFunction)} ${applyCssVariable(options.clearingDelay)}`;
        rippletElement.addEventListener('transitionend', event => {
            if (event.propertyName === 'opacity' && containerContainerElement.parentElement) {
                containerContainerElement.parentElement.removeChild(containerContainerElement);
            }
        });
        if (options.clearing && options.clearing !== 'false') {
            rippletStyle.opacity = '0';
        }
        else {
            let container2ripplet = target2container2ripplet.get(currentTarget);
            if (!container2ripplet) {
                target2container2ripplet.set(currentTarget, (container2ripplet = new Map()));
            }
            container2ripplet.set(containerContainerElement, rippletElement);
        }
        // reflect styles by force layout and start transition
        rippletElement.offsetWidth; // tslint:disable-line:no-unused-expression
        rippletStyle.transform = '';
    }
    return containerContainerElement;
}
ripplet.clear = (targetElement, rippletContainerElement) => {
    if (targetElement) {
        const container2ripplet = target2container2ripplet.get(targetElement);
        if (container2ripplet) {
            if (rippletContainerElement) {
                const rippletElement = container2ripplet.get(rippletContainerElement);
                rippletElement && (rippletElement.style.opacity = '0');
                container2ripplet.delete(rippletContainerElement);
                container2ripplet.size === 0 && target2container2ripplet.delete(targetElement);
            }
            else {
                container2ripplet.forEach(r => (r.style.opacity = '0'));
                target2container2ripplet.delete(targetElement);
            }
        }
    }
    else {
        target2container2ripplet.forEach(container2ripplet => container2ripplet.forEach(r => (r.style.opacity = '0')));
        target2container2ripplet.clear();
    }
};
ripplet.defaultOptions = defaultOptions;
ripplet._ripplets = target2container2ripplet;
export default ripplet;
//# sourceMappingURL=Ripplet.js.map