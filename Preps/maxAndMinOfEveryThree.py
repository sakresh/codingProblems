def minFinding(array):
    i = 0
    res = []
    while i < len(array):
        res.append(min(array[i:i+3]))
        i += 3
    return res


def maxFinding(array):
    i = 0
    res = []
    while i < len(array):
        res.append(max(array[i:i+3]))
        i += 3
    return res


array = [int(item) for item in input().split()]
length = len(array)
i = 1
while i <= length:
    if len(array) == 1:
        break
    if i % 2 == 0:
        array = minFinding(array)
    else:
        array = maxFinding(array)
    i += 1
print(*array)
