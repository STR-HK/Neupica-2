import os

import shutil
print(os.listdir('.'))

for root, dirs, files in os.walk("."):
    splitedPath = os.path.split(root.replace('\\', '/'))
    for file in files:
        root = root.replace('\\', '/')
        path = f'{root}/{file}'
        print(path)

        print(f'move : {path} -> {file}')
        shutil.move(f'{path}', f'{file}')