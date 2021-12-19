a = {
    'a' : 1
}

a['a'] = a

print(a)

b = a
while True:
    print(b)
    b = a['a']