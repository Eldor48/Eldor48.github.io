childMealPrice = input("What is the price of a child's meal?")
adultMealPrice = input("What is the price of a adult's meal?")
howManyChildren = input("How many children are there?")
howManyAdults = input("How many adults are there?")
tip = float(input("How much do you want to tip?"))
childrenSubtotal = float(childMealPrice) * float(howManyChildren)

adultSubtotal = float(adultMealPrice) * float(howManyAdults)

subtotal = childrenSubtotal + adultSubtotal + tip

print(f"Subtotal: ${subtotal}")