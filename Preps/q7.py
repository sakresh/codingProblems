def gen_prime(start, end):
    prime = []
    count = 0
    for i in range(start, end+1):
        for j in range(1, i+1):
            if i % j == 0:
                count += 1
        if count == 2:
            prime.append(i)
        count = 0
    if (len(prime) > 0):
        return prime
    else:
        return "Provide valid input"


number1 = int(input("Enter the starting interval: "))
number2 = int(input("Enter the ending interval: "))
print(*gen_prime(number1, number2))
