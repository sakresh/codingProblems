def palindrome(n):
    if str(n) == str(n)[::-1]:
        return "Palindrome"
    else:
        return "Not a Palindrome"


number = int(input("Enter the number: "))
print(palindrome(number))
