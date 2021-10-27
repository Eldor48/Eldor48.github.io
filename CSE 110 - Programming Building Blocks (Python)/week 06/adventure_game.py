

match_flashlight = input(
    "You are walking through a dark forest and find two items: a MATCH and a FLASHLIGHT. Which one do you want to pick up?")
if match_flashlight.lower().strip() == "match":
   run_hide = input("You pick up the match and strike it, and for an instant, the forest around you is illuminated. You see a large grizzly bear, and then the match burns out. Do you want to RUN, or HIDE behind a tree?")
   if run_hide.lower().strip() == "run":
      crossbow_sword = input("It seems you ran away from the bear,\nyou've been running away from the bear for 5 minutes, and now you feel comfortable,\nyou see the moon in the open sky, and the nigh is clear \nafter some time you find out there is a giant spider on your way, \nyou look at the floor and there are two weapons, a CROSSBOW and a SWORD, which one you choose to fight?")
      if crossbow_sword.lower().strip() == "sword":
         print("You picked the sword, and even though you do not know how to use it properly\n you do your best and fight the spider, and you defeated it, but at the\n same time you die fighting against it.\n At the end, the people from your town praise you as a hero.")
      elif crossbow_sword.lower().strip() == "crossbow":
          print("You pick the crossbow, and now you are shooting and running from the spider. Since you have used this weapon before, you defeat the spider\n without much hassle, and then you go into its cave\n and get the biggest prize.")
   elif run_hide.lower().strip() == "hide":
      left_right = input("You decided to hide behind the bush behind you, \nwhen you look closer, you see that there are two pathways, \none goes on the RIGHT, and the other one goes on the LEFT, \nwhich one do you choose?")
      if left_right.lower().strip() == "right":
         print("Since you chose the right, you keep walking and after being diligent on you journey, you found your way home.")
      elif left_right.lower().strip() == "left":
          print("You chose this path, because this one looked the easiest, but it was a trap,\nthis one is full of mytical creatures that you were fighting for hours,\nbut after some time they win against you, and inevitable you die.")
      else: 
       print("This is the end of the history, make different choices, and see what you can get!")
   else: 
    print("That is not a valid answer!")
if match_flashlight.lower().strip() == "flashlight":
   follow_look = input("You pick up the flashlight and turn it on. You see the pathway lit up in front of you, but you thought you also heard something off to the side. Do you want to FOLLOW the path or LOOK in the trees for the thing that made the noise?")
   if follow_look.lower().strip() == "follow":
      print("You follow the path on the forest, and then you meet the forest elves, and they acept you as a friend.")
   elif follow_look.lower().strip() == "look":
       print("You decided to look into the path, but the people of the forest felt that you were not brave, so the expelled you from the path")
   else: 
    print("This is the end of the history, make different choices, and see what you can get!")
     

