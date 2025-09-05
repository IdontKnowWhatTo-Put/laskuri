

while True:
    try:
        num1 = float(input())
    except ValueError:
        print("that's not right, try a number")
        continue
    else:
        break
def add(num1, num2):
    num = num1 + num2
#    print(num)
    return num
def subtrack(num1, num2):
    num = num1-num2
#    print(num)
    return num
def multiply(num1, num2):
    num = num1 * num2
    print(num)
    return num
def divide(num1, num2):
    num = num1 / num2
#    print(num)
    return num
def exponent(num1, num2):
    num = num1
    for i in range(int(num2)-1):
        num = num * num1
#    print(num)
    return num
def factorial(num1):
    num = num1
    while num1 > 1:
        num1 -= 1
        num = num * num1
#        print(num)
    return num
while True: 
    print("your first number is now " + str(num1))
    while True:
        try:
            num2 = float(input("What is the second number you wish to calculate "))
        except ValueError:
            print("sorry, thats not right")
            continue
        else:
            break
    calc = input("what kind of calculation do you want to make ")
    if calc.casefold() == "+" or calc == "plus" or calc == "add":
        num1 = add(num1, num2)
#        print(num1)
    if calc.casefold() == "-" or calc == "subtract" or calc == "take":
        num1 = subtrack(num1, num2)
#        print(num1)
    if calc.casefold() == "*" or calc == "x" or calc == "multiply":
        num1 = multiply(num1, num2)
#        print(num1)
    if calc.casefold() == "/" or calc == "divide" or calc == '"\"':
        num1 = divide(num1, num2)
#        print(num1)
    if calc.casefold() == "^" or calc == "exponent" or calc == "exp":
        num1 = exponent(num1, num2)
#        print(num1)
    if calc.casefold() == "!" or calc == "factorial" or calc == "fac":
        num1 = factorial(num1)
#        print(num1)
#      else:
#        print("sorry, thats an invalid operation") 



