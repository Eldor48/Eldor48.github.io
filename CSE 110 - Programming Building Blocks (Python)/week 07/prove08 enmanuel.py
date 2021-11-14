''''''''''
File: prove08 enamnuel.py
Author: Enmanuel De los Santos Cruz
Class: CSE 110 - Programming Building Blocks


Program that takes an image with a green background and puts it on a new background
'''''''''''
# Import libraries.
from PIL import Image



img = Image.open("beach.jpg")

print(img.size)

(width, height) = img.size

pixels = img.load();

r = 0

g = 0

b = 0

pixels[534, 300] = (r, g, b)

pixels[231, 543] = (r, g, b)

pixels[645, 322] = (r, g, b)

pixels[100, 202] = (r, g, b)

pixels[123, 300] = (r, g, b) 

pixels[521, 432] = (r, g, b)

pixels[312, 234] = (r, g, b)

pixels[423, 432] = (r, g, b)

pixels[234, 212] = (r, g, b)

pixels[432, 231] = (r, g, b)

pixels[543, 234] = (r, g, b)

pixels[423, 432] = (r, g, b)

pixels[131, 131] = (r, g, b)

pixels[543, 234] = (r, g, b)



print(r, g, b)

img.show()

img.save("the_venom.jpg")































# Prompt user for images
image_select = input("Which image do you want? (boat, cactus, cat, harvester, hiker, penguin, spaceshuttle): ").lower().strip()
background_select = input("Select a background (beach, desert, earth, field, forest, snowscape, sunset): ").lower().strip()

# Open the images.
img = Image.open(f"{image_select}.jpg")
background = Image.open(f"{background_select}.jpg")


# Set pixels variables.
(width_img, height_img) = img.size
(width_background, height_background) = background.size

# Load pixel colors
pixels_img = img.load()
pixels_background = background.load()

# green 76, 244, 24

# Create new Image
image_new = Image.new("RGB", img.size)
pixels_new = image_new.load()


# Iterate through background
for row in range(height_background):
    for col in range(width_background):
        (r, g, b) = pixels_background[col, row]
        pixels_new[col, row] = (r, g, b)


# Iterate through Green Image
for row in range(height_img):
    for col in range(width_img):
        (r, g, b) = pixels_img[col, row]
        if (r < 120 and g > 150 and b < 120):
            pixels_background[col, row] = (r, g, b)
        else:
            pixels_new[col, row] = (r, g, b)

image_new.save(f"{image_select}_on_a_{background_select}.jpg")
image_new.show()

