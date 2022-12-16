# imports 
import os
import sys 

# Linked list class
class LinkedList:
    def __init__(self):
        self.head = None
        self.size = 0

    # method to add nodes to the linked list
    def add(self, item):
        new_node = Node(item)
        new_node.set_next(self.head)
        self.head = new_node
        self.size += 1

    # method to print the linked list
    def print_list(self):
        current = self.head
        while current is not None:
            print(current.data)
            current = current.get_next()

# Node class
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

    def get_data(self):
        return self.data

    def get_next(self):
        return self.next

    def set_data(self, new_data):
        self.data = new_data

    def set_next(self, new_next):
        self.next = new_next

# Photo viewer class
class PhotoViewer:
    def __init__(self):
        self.list = LinkedList()
        self.current_photo = None
        self.photos = self.get_all_photos()

        # add photos to linked list 
        for photo in self.photos:
            self.list.add(photo)

    # method to get all photos in the current directory
    def get_all_photos(self):
        photos = []
        for f in os.listdir():
            if f.endswith('.png') or f.endswith('.jpg'):
                photos.append(f)
        return photos

    # method to display the current photo
    def display_photo(self):
        if self.current_photo:
            print('Displaying photo: {}'.format(self.current_photo))
        else:
            print('No photo to display')

    # method to move to the next photo 
    def next_photo(self):
        if self.current_photo:
            current_index = self.photos.index(self.current_photo)
            if current_index == len(self.photos) - 1:
                self.current_photo = None
            else:
                self.current_photo = self.photos[current_index + 1]
        else:
            self.current_photo = self.photos[0]
        self.display_photo()

    # method to move to the previous photo
    def prev_photo(self):
        if self.current_photo:
            current_index = self.photos.index(self.current_photo)
            if current_index == 0:
                self.current_photo = None
            else:
                self.current_photo = self.photos[current_index - 1]
        else:
            self.current_photo = self.photos[len(self.photos) - 1]
        self.display_photo()
        

# Main function 
def main():
    pv = PhotoViewer()
    while True:
        print('1. Display current photo')
        print('2. Next photo')
        print('3. Previous photo')
        print('4. Exit')
        choice = int(input('Enter your choice: '))
        if choice == 1:
            pv.display_photo()
        elif choice == 2:
            pv.next_photo()
        elif choice == 3:
            pv.prev_photo()
        elif choice == 4:
            sys.exit()
        else:
            print('Invalid choice')

if __name__ == '__main__':
    main()