def lucky_number(n):
    res = list(map(int, str(n)))
    if len(res) != 4:
        return "Invalid input"
    else:
        if sum(res) % 3 == 0 or sum(res) % 5 == 0 or sum(res) % 7 == 0:
            return "Lucky Number"
        else:
            return "Not Lucky Number"


number = int(input("Enter the number: "))
print(lucky_number(number))
