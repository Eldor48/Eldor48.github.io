first_name = input('What is your name? ')
last_name = input('What is your last name? ')
output = 'Hello ' + first_name + '' + last_name
output = 'Hello {} {}'.format(first_name, last_name)
output = 'Hello {0} {1}'.format(first_name, last_name)
output = f'Your name is {last_name}, {first_name} {last_name}'

print (output)