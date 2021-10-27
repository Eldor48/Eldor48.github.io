# tip = float(input("Enter the tip amount: ")) 

# while tip < 0:
#     print("Invalid tip amount, tip can not be a negative number")
#     tip = float(input("Enter the tip amount: "))

# print("The tip amount is: $",format(tip, ".2f"))

# number = 0

# # Keep looping as long as the number is less than 10
# while number < 10:
#     number = int(input("What is the number? "))

# print("Finished with the loop")    

# Start with the number 1
number = 10

# Keep looping as long as the number is less than or equal to 5
while number <= 100:
    # Display the number
    print(f"The number is: {number}")
    
    # Update the number to be one more than it was
    number = number + 25

print("Finished with the loop")

# GOOD EXAMPLE: This code sets the variable to a number that allows the loop to run
# It uses a standard initialization value of 0.

number = -1 # This number is less than 10, and is a standard value

while number < 10: # This body of this loop will run just fine
    number = int(input("What is the number? "))

print("Finished with the loop")   