import math


def calculate(salary, appraisal):
    if salary <= 0 or appraisal < 1 or appraisal > 5:
        return "Invalid input"
    elif appraisal >= 1 and appraisal <= 3:
        return salary + salary * 10/100
    elif appraisal >= 3.1 and appraisal <= 4:
        return salary + salary * 25/100
    elif appraisal >= 4.1 and appraisal <= 5:
        return salary + salary * 30/100


sal = int(input("Enter the salary: "))
ap = float(input("Enter the ap: "))
print(math.floor(calculate(sal, ap)))
