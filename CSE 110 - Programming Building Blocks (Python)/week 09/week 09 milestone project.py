items = []
itemName = ''
itemPrice = ''
while itemName  != 'quit' or itemPrice != 'quit':
    itemName = input('What item would you like to add?')
    itemPrice = input(f'What is the price of {itemName}?')
    items.append(itemName + ' $' + itemPrice)
for item in items[:-1]:
    print(item)