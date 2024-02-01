def bill(p, pf, cd):
    return p*100 + pf*20 + cd*10


pizzas = int(input("Enter the number of pizzas: "))
puff = int(input("Enter the number of puff: "))
cooldrink = int(input("Enter the number of cooldrink: "))
print(bill(pizzas, puff, cooldrink))
