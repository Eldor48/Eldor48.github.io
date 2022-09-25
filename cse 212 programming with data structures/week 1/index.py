my_list = [1,2,3,4,5,6]


value = my_list[4]

# my_list = [expression for item in collection if condition]

# Create a list of numbers 0 to 99
my_list = [x for x in range(100)]

# Create a list of square numbers from 0^2 to 99^2
my_list = [x*x for x in range(100)]

# Create a list of even numbers less than 100
my_list = [x for x in range(100) if x % 2 == 0]

# Do the same thing by using a different version of range
my_list = [x for x in range(0, 100, 2)]

# Create a list of words that have an 'E'	
my_words = ['CAKE', 'DOG', 'APPLE']
words_with_e = [word for word in my_words if 'E' in word]

# Find all leap years between 1900 and 2000
# Multiples of 4 are leap years
# Except, Multiples of 100 are not leap years
# Except, Multiples of 400 are leap years
leap_years = [year for year in range(1900, 2001) if (year % 400 == 0) or
					(year % 100 != 0 and year % 4 == 0)]