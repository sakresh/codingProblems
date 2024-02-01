def calc(tickets, refreshment, couponCode, circle):
    if (circle == "k"):
        price = 75
    elif (circle == "q"):
        price = 150
    else:
        exit(0)
    total = price*tickets
    if (tickets > 20):
        dis = (0.1 * total)
        total = total - dis
    if (couponCode == "y"):
        dis = (0.02 * total)
        total = total - dis
    if (refreshment == "y"):
        total += (tickets * 50)
    return round(total, 2)


tickets = 35
refreshment = "y"
couponCode = "y"
circle = "k"

if (tickets < 5 or tickets > 40):
    print("Minimum of 5 and Maximum of 40 Tickets")
    exit(0)

print(calc(tickets, refreshment, couponCode, circle))
