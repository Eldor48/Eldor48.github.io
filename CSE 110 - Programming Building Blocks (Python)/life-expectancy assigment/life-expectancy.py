ages = []
maxindex = -1
maxindex2 = ''
maxindex3 = ''
minindex = 99999
minindex2 = ''
minindex3 = ''
maxIndex = -1
maxIndex2 = ''
minIndex = 99999
minIndex2 = ''
x = 0
yearOfInterest = input('Enter the year of interest: ')
countryindex = ''
ageindex = -1
yearindex = 0
mincountryindex = ''
minageindex = 99999
minyearindex = 0
countryinput = input('Enter a country: ')

while x == 0:
 try:
    yearOfInterest = int(yearOfInterest)
    x += 1
 except:
  print(f'\nInvalid input\n')
  yearOfInterest = input('Enter the year of interest: ')

with open('life-expectancy.csv') as data:
  next(data)
  for dat in data:
      dat = dat.strip()
      dat = dat.split(",")
      country = dat[0]
      age = float(dat[3])
      year = int(dat[2])
      if countryinput == country:
          if age > ageindex:
            yearindex = year  
            ageindex = age
            countryindex = country
          if age < minageindex:
            minyearindex = year
            minageindex = age
            mincountryindex = country
      if age > maxindex:
        maxindex = age
        maxindex2 = country
        maxindex3 = year
      if age < minindex:
        minindex = age
        minindex2 = country
        minindex3 = year
      if year == yearOfInterest == year:
        ages.append(age)
        years = year
        average = sum(ages)/len(ages)
        if age > maxIndex:
          maxIndex = age
          maxIndex2 = country
        if age < minIndex:
          minIndex = age
          minIndex2 = country
print(f'\nThe overall max life expectancy is: {maxindex} from {maxindex2} in 18{maxindex3}')
print(f'The overall min life expectancy is {minindex} from {minindex2} in {minindex3}')
print(f'\nFor the year {years}: \nThe average life expectancy across all countries was: {average:.2f}\nThe overall max life expectancy is {maxIndex} from {maxIndex2}\nThe overall min life expectancy is {minIndex} from {minIndex2}')
if minageindex != 99999: print(f'\nFor {countryindex}:\nThe overall max life expectancy is: {ageindex} in {yearindex}\nThe overall min life expectancy was: {minageindex} in{minyearindex}')
else:
 print('Country not listed')

         