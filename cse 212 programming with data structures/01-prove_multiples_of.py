"""
CSE212 
(c) BYU-Idaho
01-Prove - Problem 1

It is a violation of BYU-Idaho Honor Code to post or share this code with others or 
to post it online.  Storage into a personal and private repository (e.g. private
GitHub repository, unshared Google Drive folder) is acceptable.
"""
import numpy as np

def multiples_of(number, length):
    
    multiples_list = np.arange(number, (length * number)+1, number)

    return multiples_list



print(multiples_of(7, 5))    # [7, 14, 21, 28, 35]
print(multiples_of(1.5, 10)) # [1.5, 3.0, 4.5, 6.0, 7.5, 9.0, 10.5, 12.0, 13.5, 15.0]
print(multiples_of(-2, 10))  # [-2, -4, -6, -8, -10, -12, -14, -16, -18, -20]
