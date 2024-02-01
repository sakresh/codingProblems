def first_solution(l, d):
    return round((l/d)*100.0,2)


def conversion(l, d):
    return [round(l*0.2642, 2), round(d*0.6214, 2)]


litres = int(input("Enter the number of litres: "))
distance = int(input("Enter the distance: "))
if (litres < 0 or distance < 0):
    print("Invalid input")
    exit(0)
[gallons, miles] = conversion(litres, distance)
print("Miles per Gallon is ", round(miles/gallons, 2))
print("Liters per 100KM is ", first_solution(litres, distance))

