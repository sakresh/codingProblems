def subarray_sum(array):
    sum = 0
    maximum = array[0]
    for i in range(0, len(array)):
        sum += array[i]
        if (sum > maximum):
            maximum = sum
        if (sum < 0):
            sum = 0
    return maximum


arr = [1, 2, 3, -2, 5]
# arr = [9, -9, 10, -10, 11, -11]
print(subarray_sum(arr))
