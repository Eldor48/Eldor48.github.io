from PIL import Image

print("The library is loaded correctly")

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
