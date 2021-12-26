# def printDate():
#     import datetime
#     print(datetime.datetime.now())

# printDate()

# def fullnanme(first, last):
#     print(first, last)

# def getInitial(first, last):
#     print (first[0] + last[0])  # this is the same as the line above 

# getInitial("John", "Smith")

# ask for someone to enter their name
# print the initials of their name: J.S.
    

def get_initial(name, force_uppercase=True): 
    if force_uppercase:
        initial =name[0:1].upper()
    else:
        initial = name[0:1]
    return initial

first_name = input("Enter your first name: ")
first_name_initial = get_initial(name=first_name, force_uppercase=True)
print("Your first name initial is: " + first_name_initial)

# def your_function_name():
    # code here
    # for the
    # body of the function goes here 
    # return something
