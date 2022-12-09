export let resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
        const cr = entry.contentRect;     // this
        // console.log('Element:', entry.target);
        // console.log(`Element size: ${cr.width}px x ${cr.height}px`);
        // console.log(`Element padding: ${cr.top}px ; ${cr.left}px`);
    }
})

export let intersectionObserver = new IntersectionObserver(entries => {
    for (let entry of entries) {
        // console.log(`Element boundingClientRect: ${entry.boundingClientRect}`);
        // console.log(`Element intersectionRatio: ${entry.intersectionRatio}`);
        // console.log(`Element intersectionRect: ${entry.intersectionRect}`);
        // console.log(`Element isIntersecting: ${entry.isIntersecting}`);
        // console.log(`Element rootBounds: ${entry.rootBounds}`);
        // console.log(`Element target: ${entry.target}`);
        // console.log(`Element time: ${entry.time}`);

    }
})

// resizeObserver.observe(document.body)