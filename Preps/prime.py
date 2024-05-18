prime = []
count = 0
for i in range(2, 100):
    for j in range(1, 100):
        if i % j == 0:
            count += 1
    if count == 2:
        prime.append(i)
print(*prime)

