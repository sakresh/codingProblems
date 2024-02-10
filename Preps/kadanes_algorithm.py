def kadanes_algorithm(array, key):
    i = 1
    j = 0
    sum = array[0]
    while (i < len(array)):
        if (sum == key):
            return [j+1, i+1]
        if (sum > key):
            sum -= array[j]
            j += 1
            continue
        if (sum < key):
            i += 1
            sum += array[i]
            continue
    return -1


array = []
n = 4
for i in range(n):
    array.append(int(input()))
key = 16
print(kadanes_algorithm(array, key))
