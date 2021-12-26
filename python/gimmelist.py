import os

a = []
b = []

"""

`${this.root}filename`

"""

for i in os.listdir('./material-design-icons/'):
    if (i[-3:] == 'svg'):
        a.append(i.removesuffix('.svg'))
        b.append('`' + '${this.root}' + i + '`')

lines = []

for i in range(len(a)):
    lines.append(f'{a[i]} = {b[i]}')

f = open('result.txt', 'w', encoding='utf-8')
f.write('\n'.join(lines))
f.close()