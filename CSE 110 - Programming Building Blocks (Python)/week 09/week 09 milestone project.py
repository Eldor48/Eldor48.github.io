items = []
itemName = ''
itemPrice = ''
while True:
    itemName = input('What item would you like to add? ')
    if itemName.lower().strip() == 'quit':
        break
    itemPrice = input(f'What is the price of {itemName}?')
    item = f'{itemName} ${itemPrice}'
    items.append(item)
    print(f'{itemName} has been added to your cart.')
for item in items:
    print(item)
print('Thank you for shopping with us!') 
