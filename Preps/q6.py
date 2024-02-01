month = int(input())
if (month < 0 or month > 12):
    print("Invalid input")
    exit(0)
if (month == 12 or month == 1 or month == 2):
    print("Winter")
    exit(0)
if (month == 11 or month == 9 or month == 10):
    print("Autumn")
    exit(0)
if (month == 6 or month == 7 or month == 8):
    print("Summer")
    exit(0)
if (month == 3 or month == 4 or month == 5):
    print("Spring")
    exit(0)
