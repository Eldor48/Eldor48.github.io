childMealPrice = input("What is the price of a child's meal?")
adultMealPrice = input("What is the price of a adult's meal?")
howManyChildren = input("How many children are there?")
howManyAdults = input("How many adults are there?")
drinkPrice = input("What is the prince of a drink here?")

tip = float(input("How much do you want to tip?"))
drinkTotal = (float(howManyChildren) + float(howManyAdults)) * float(drinkPrice)

childrenSubtotal = float(childMealPrice) * float(howManyChildren)

adultSubtotal = float(adultMealPrice) * float(howManyAdults)

subTotal = childrenSubtotal + adultSubtotal + tip + drinkTotal 
print()
print(f"Children's meal: ${childrenSubtotal}")
print(f"Adults' meal: ${adultSubtotal}")
print(f"Tip ${tip}")
print(f"Subtotal: ${subTotal}")