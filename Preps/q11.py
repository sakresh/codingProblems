def find(n):
    courses = []
    for i in range(n):
        courses.append(input())
    search = input("Enter the course to be searched: ")
    if search in courses:
        print(search, " is available")
        return None
    else:
        print(search, " is not available")
        return None


n = int(input("Enter the number of courses: "))
find(n)
