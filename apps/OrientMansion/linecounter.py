import os

cnt = 0
chara = 0

shpfiles = []
for dirpath, subdirs, files in os.walk("."):
    if "Lib" not in dirpath:
        print(dirpath)
        for x in files:
            if x.endswith(
                ".js",
            ):
                shpfiles.append(os.path.join(dirpath, x))

for file in shpfiles:
    data = open(file, "r", encoding="utf-8")
    cnt += sum(1 for line in data)
    chara += len(open(file, "r", encoding="utf-8").read())

print(f"Total Line Number is : {cnt}")
print(f"Total Character Number is : {chara}")
