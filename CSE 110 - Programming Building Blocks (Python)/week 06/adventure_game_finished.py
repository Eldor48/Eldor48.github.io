

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
        else:
            print("Type something else.")
    elif run_hide.lower().strip() == "hide":
        left_right = input("You decided to hide behind the bush behind you, \nwhen you look closer, you see that there are two pathways, \none goes on the RIGHT, and the other one goes on the LEFT, \nwhich one do you choose?")
        if left_right.lower().strip() == "right":
            print("Since you chose the right, you keep walking and after being diligent on you journey, you found your way home.")
        elif left_right.lower().strip() == "left":
            print("You chose this path, because this one looked the easiest, but it was a trap,\nthis one is full of mytical creatures that you were fighting for hours,\nbut after some time they win against you, and inevitable you die.")
        else:
            print(
                "This is the end of the history, make different choices, and see what you can get!")
    else:
        print("That is not a valid answer!")
elif match_flashlight.lower().strip() == "flashlight":
    follow_look = input("You pick up the flashlight and turn it on. You see the pathway lit up in front of you, but you thought you also heard something off to the side. Do you want to FOLLOW the path or LOOK in the trees for the thing that made the noise?")
    if follow_look.lower().strip() == "follow":
        blue_violet = input("You have been walking for some time now,\n and there is a point when your way didivides into two paths, each of them has a different light on it,\n one is BLUE the other one is PURPLE, which way would you go?")
        if blue_violet.lower().strip() == "blue":
            magic_technology = input("When you go into the blue aura, you see there is a big entrance, and there is a\n man with a big beard, which calls himself the wise man guarding the entrance,\n he says from now on you will have to make a choice \n there are two worlds you can choose, a world full of MAGIC, or a world where TECHNOLOGY was developed to its fullest, you have to make the decision quick! Which world will you choose?")
            if magic_technology.lower().strip() == "magic":
                hunter_paladin = input(
                    "You have lived in this world for some time, and you feel that you need to fullfill a role in this society\n you are given the choice between two things, a HUNTER and a PALADIN, which path will you choose?")
                if hunter_paladin.lower().strip() == "paladin":
                    print("You've chosen a path that is rough, there is a lot of competition between the paladins of the kingdom, but you  trough all of that, you have created a culture of unity within your fellow paladins,\n and now you are one of the strongest classes in the kingdom.")
                elif hunter_paladin.lower().strip() == "hunter":
                    print("As a hunter you have gained a lot of fame, liked when you saved the city of Tarbean of that ice dragon, or when you killed that wicked king from a far kindgom, you have became of the greates hunters of all time.")
                else:
                    print("Type something else.")
            elif magic_technology.lower().strip() == "technology":
                print("You have chosen the path of techonology, you discover that you are someone who never stops learning\n and become someome who solves a lot of problems with science.")
            else:
                print("Type something else.")
        elif blue_violet.lower().strip() == "purple":
            power_wisdom = input("You get trough a purple portal, and then you receive a question on your head, that will determine your faith from now on\n it tells you if you would like to choose between POWER, and WISDOM\n this will affect directly your life from know on.")
            if power_wisdom.lower().strip() == "power":
                print("You became someone who is a great leader indeed, you influece people, and guide trough victory, but you know you can do more, so that motivates you to look for wisdom, so you can take better choices.")
            elif power_wisdom.lower().strip == "wisdom":
                print("You are someone full of wisdom, but you feel alone, you feel that you need something else, you would like to lead and influece people, so you start a journey in the search of power.")
            else:
                print("Type something else.")
    elif follow_look.lower().strip() == "look":
        chase_escape = input("When you look at the trees, you see some creatures what you believe are eleves, it seems they are calling you, you have two options, you can CHASE them, or you can ESCAPE to go somewhere else, what do you choose?")
        if chase_escape.lower().strip() == "chase":
            print("At the end, you chased the creature and this creature opened a portal to a new universe, your new life starts now.")
        elif chase_escape.lower().strip() == "escape":
            help_rob = input("When you escape from the trees, of your path you noticed there is someone lying on the road, and this person is bleeding, you have the option to HELP this person, but also you see there is a chance you can ROB him, what option do you choose?")
            if help_rob.lower().strip() == "help":
               print("After you help this person, it turns out, he was a famous merchant in the region, as an act of gratitude, he gives you part of his fortune, and therefore, you become a incredible rich person.")
            elif help_rob.lower().strip() == "rob":
               print("After you robbed this person, you just notice the local authorities saw you doing that, because of that, they put you in jail, and you do not really know when you are going to get out.")
            else:
             print("Type something else.")
        else:
         print("Type something else.")
else:
    print("Type something else.")
