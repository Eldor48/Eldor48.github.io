childMealPrice = input("What is the price of a child's meal?")
adultMealPrice = input("What is the price of a adult's meal?")
howManyChildren = input("How many children are there?")
howManyAdults = input("How many adults are there?")
drinkPrice = input("What is the prince of a drink here?")
saleTax = input("What is the sale tax rate?")
tip = float(input("How much do you want to tip?"))

drinkTotal = (int(howManyChildren) + int(howManyAdults)) * float(drinkPrice)
childrenSubtotal = float(childMealPrice) * int(howManyChildren)
childrenSubtotal = round(childrenSubtotal, 2)
adultSubtotal = float(adultMealPrice) * int(howManyAdults)
adultSubtotal = round(adultSubtotal, 2)
subTotal = childrenSubtotal + adultSubtotal + tip + drinkTotal 
subTotal = round(subTotal, 2)
saleTaxRate = (float(saleTax)  * subTotal)  / 100
saleTaxRate = round(saleTaxRate, 2)
total = saleTaxRate + subTotal 
total = round(total, 2)

print()
print(f"Children's meal: ${childrenSubtotal}")
print(f"Adults' meal: ${adultSubtotal}")
print(f"Drinks: ${drinkTotal:.2f}")
print(f"Tip ${tip}")
print(f"Subtotal: ${subTotal}")
print(f"Sales Tax: ${saleTaxRate}") 
print(f"Total: ${total} \n")

paymentAmount = float(input("What is the payment amount?"))
change = paymentAmount - total
print(f"Change: ${change:.2f}")