r = open("MaterialIconsRound-Regular.codepoints", "r").read()
lines = r.split("\n")

a = open("a.txt", "r").read()
alines = a.split("\n")
a = {}
for aline in alines:
    asplited = aline.split(", ")
    a[asplited[0]] = asplited[1]


def chagne(g):
    try:
        return a[g]
    except:
        return g


res = ""

for line in lines:
    name = line.split(" ")[0]
    ori = name
    name = chagne(name)
    name_s = name.split("_")
    rname = ""
    for n in name_s:
        rname += n.capitalize()
        rname += "_"

    rname = rname[:-1]

    # print(rname)
    res += f"        this.{rname} = '{ori}'"
    res += "\n"

f = open("res.txt", "w")
f.write(res)
