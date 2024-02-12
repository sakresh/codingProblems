# n = int(input())
array = [int(item) for item in input().split()]
i = 0
for i in range(len(array) - 1):
    if array[i] ^ array[i+1] != 0:
        res = array[i]
        break
print(res)
