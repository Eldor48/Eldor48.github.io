# Your code needs the ability to take different actions
# based on different conditions and

price = 12
if price >=  1.00:
    tax = .07
    print(tax)

country = "Canada" 
if country.lower() == "canada":
   print("Oh look a Canadian")
else:
   print("You are not from Canada")

# If multiple conditions cause the same action 
#  they can be combined into a single condition 

province = "Alberta"

if province == "Alberta" \
   or province == "Nunavut": 
   tax = 0.5



color = input("What is your favorite color? ")

# This if statement will only match "blue" not "Blue" or "BLUE"
if color == "blue":
    print("I like blue too.")

# This if statement will match the word blue, regardless of the capitalization
if color.lower() == "blue":
    print("I like blue too.")