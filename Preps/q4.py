cse = int(input("Enter the marks of CSE: "))
ece = int(input("Enter the marks of ECE: "))
mech = int(input("Enter the marks of MECH: "))
if (cse < 0 or ece < 0 or mech < 0):
    print("Invalid input")
    exit(0)
if (cse == ece == mech):
    print("None of the department has got the highest placement")
    exit(0)
m = max(cse, ece, mech)
if (m == cse):
    print("CSE")
if (m == ece):
    print("ECE")
if (m == mech):
    print("MECH")
