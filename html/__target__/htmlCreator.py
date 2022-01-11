Doctype = '<!DOCTYPE html>'

class HTMLElement:
    def __init__(self) -> None:
        pass

    def setTag(self, tag):
        self.tag = tag
        self.classElement = [f'<{tag}>', [], f'</{tag}>']

    def setAttribute(self, attributeName, attributeValue):
        self.openTag = self.classElement[0]
        self.spopt = self.openTag.split('>')
        self.spopt = list(filter(None, self.spopt))
        self.spopt.append(f'{attributeName}={attributeValue}')
        self.jdopt = ' '.join(self.spopt) + '>'
        self.classElement[0] = self.jdopt

    def appendChild(self, child):
        self.classElement[1] += child

    def setInnerHTML(self, innerHTML):
        self.classElement[1] = innerHTML

    def element(self):
        rt = ''

        for v in self.classElement:
            if (type(v) == list): rt += ''.join(v)
            elif (type(v) == str): rt += v

        return rt

html = HTMLElement()
html.setTag('html')
html.setAttribute('lang', 'en')

head = HTMLElement()
head.setTag('head')

meta1 = HTMLElement()
meta1.setTag('meta')
meta1.setAttribute('charset', 'UTF-8')

meta2 = HTMLElement()
meta2.setTag('meta')
meta2.setAttribute('name', 'viewport')
meta2.setAttribute('content', 'width=device-width, initial-scale=1.0')

meta3 = HTMLElement()
meta3.setTag('meta')
meta3.setAttribute('http-equiv', 'X-UA-Compatible')
meta3.setAttribute('content', 'ie=edge')

script = HTMLElement()
script.setTag('script')
script.setAttribute('type', 'module')
script.setAttribute('src', './assets/js/page/main.js')

link = HTMLElement()
link.setTag('link')
link.setAttribute('rel', 'stylesheet')
link.setAttribute('href', './assets/css/style.css')

title = HTMLElement()
title.setTag('title')
title.setInnerHTML('Neupica 2')

body = HTMLElement()
body.setTag('body')

app = HTMLElement()
app.setTag('div')
app.setAttribute('id', 'App')

head.appendChild(meta1.element())
head.appendChild(meta2.element())
head.appendChild(meta3.element())
head.appendChild(script.element())
head.appendChild(link.element())
head.appendChild(title.element())

body.appendChild(app.element())

html.appendChild(head.element())
html.appendChild(body.element())

completedHTML = f'{Doctype}{html.element()}'

# soup = BeautifulSoup(completedHTML, 'html.parser')

# prettyHTML = soup.prettify()
# print(prettyHTML)

f = open('temp.html', 'w')
f.write(completedHTML)
f.close()