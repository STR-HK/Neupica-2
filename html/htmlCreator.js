let Doctype = '<!DOCTYPE html>'

String.prototype.py_split = function (sep, maxsplit) {
    if (sep == undefined || sep == null) {
        sep = /\s+/;
        var stripped = this.strip ();
    }
    else {
        var stripped = this;
    }
    if (maxsplit == undefined || maxsplit == -1) {
        return stripped.split (sep);
    }
    else {
        var result = stripped.split (sep);
        if (maxsplit < result.length) {
            return result.slice (0, maxsplit).concat ([result.slice (maxsplit).join (sep)]);
        }
        else {
            return result;
        }
    }
};

class HTMLElement{
	constructor() {

	}
	setTag(tag) {
		this.tag = tag;
		this.classElement = [`<${tag}>`, [], `</${tag}>`];
	}
	setAttribute(attributeName, attributeValue) {
		this.openTag = this.classElement [0];
		this.spopt = this.openTag.py_split ('>');
		this.spopt = this.spopt.filter((a) => a);
		this.spopt.push (`${attributeName}=${attributeValue}`);
		this.jdopt = this.spopt.join(' ') + '>';
		this.classElement [0] = this.jdopt;
	}
	appendChild(child) {
		this.classElement [1] += child;
	}
	setInnerHTML(innerHTML) {
		this.classElement [1] = innerHTML;
	}
	element() {
		var rt = '';
		for (var v of this.classElement) {
			console.log(v)
			console.log(typeof v)
			if (typeof v == 'string') {
				rt += v;

			}
			else if (typeof v == 'object') {
				rt += v.join('');
			}
		}
		return rt;
	}
}

let html = new HTMLElement ();
html.setTag ('html');
html.setAttribute ('lang', 'en');
let head = new HTMLElement ();
head.setTag ('head');
let meta1 = new HTMLElement ();
meta1.setTag ('meta');
meta1.setAttribute ('charset', 'UTF-8');
let meta2 = new HTMLElement ();
meta2.setTag ('meta');
meta2.setAttribute ('name', 'viewport');
meta2.setAttribute ('content', 'width=device-width, initial-scale=1.0');
let meta3 = new HTMLElement ();
meta3.setTag ('meta');
meta3.setAttribute ('http-equiv', 'X-UA-Compatible');
meta3.setAttribute ('content', 'ie=edge');
let script = new HTMLElement ();
script.setTag ('script');
script.setAttribute ('type', 'module');
script.setAttribute ('src', './assets/js/page/main.js');
let link = new HTMLElement ();
link.setTag ('link');
link.setAttribute ('rel', 'stylesheet');
link.setAttribute ('href', './assets/css/style.css');
let title = new HTMLElement ();
title.setTag ('title');
title.setInnerHTML ('Neupica 2');
let body = new HTMLElement ();
body.setTag ('body');
let app = new HTMLElement ();
app.setTag ('div');
app.setAttribute ('id', 'App');
head.appendChild (meta1.element ());
head.appendChild (meta2.element ());
head.appendChild (meta3.element ());
head.appendChild (script.element ());
head.appendChild (link.element ());
head.appendChild (title.element ());
body.appendChild (app.element ());
html.appendChild (head.element ());
html.appendChild (body.element ());
let completedHTML = `${Doctype}${html.element ()}`;
console.log (completedHTML);