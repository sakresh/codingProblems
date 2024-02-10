def subStringCount(string, substr):
    string = "ABCDCDCA"
    substr = "CDC"
    length = len(substr)
    firstChar = substr[0]
    count = 0
    s = []
    for i in range(len(string)):
        if firstChar == string[i]:
            s.append(string[i:i+length])
        for i in s:
            if i == substr:
                count += 1
    return count


string = "ABCDCDCA"
substr = "CDC"
print(subStringCount(string, substr))
