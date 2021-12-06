print("Welcome to the Shopping Cart Program!")
print("")

itemsName = []
itemsPrice = [] 
quantity = []
selection = 0

while selection != 5:
    print("")
    print("Please, select one of the following")
    print("1. Add an item to the cart")
    print("2. View cart")
    print("3. Remove an item from the cart")
    print("4. Compute total")
    print("5. Quit")

    selection = int(input("Please, enter an action: "))

    if selection == 1:
        saved = input("Please, enter the name of the item yo would like to add: ")
        quantity = int(input("Please, enter the quantity of the item you would like to add: ")) 
        price = round(float(input("Please, enter the price of the item you would like to add(each one): ")),)
        price = price * quantity
        itemsPrice.append(price)
        itemsName.append(saved)
        print(f"{saved} has been added to your cart")
    elif selection == 2:
        print("The contents of your cart are: ")
        for i in range(len(itemsName)):
            print(f"{(i + 1)}. {itemsName[i]} Quantity: {quantity} ${(itemsPrice[i])}")
    elif selection == 3:
        index = int(input("Which item would you likw to remove?"))
        quantity_of_items = (len(itemsName))
        if index > quantity_of_items:
            print("Invalid selection")
        else:
            itemsName.pop(index - 1)
            itemsPrice.pop(index - 1)
            print("Item removed")
    elif selection == 4:
        total_amount = 0
        for price in itemsPrice:
            total_amount += price
            print(f"The total amount is: ${total_amount}")
    else:
        print("Invalid selection")
print("Thank you for shopping with us!")
