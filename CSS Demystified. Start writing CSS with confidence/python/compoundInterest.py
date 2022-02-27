money = 100 
percentage = 1.05
years = 10

def compoundInterest(money, percentage, years):
    moneyGenerated = money * (1 + percentage) ** years
    return moneyGenerated



moneyAfterInterest =  compoundInterest(100, .07, 10)

print(round(moneyAfterInterest))


