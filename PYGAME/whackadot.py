import pygame
import math
import time
from random import randint


#Class creation with only 2 parameters - x + y, and 1 method - drawing)
class Dot(object):
    def __init__(self, x_coor, y_coor):
        self.x_coor = x_coor
        self.y_coor = y_coor
        self.appear = False

    def draw_self(self, screen):
        pygame.draw.circle(screen, (255, 0, 0), (self.x_coor, self.y_coor), 25, 0)

    def is_clicked(self, x_coor, y_coor):
        sqx = (x_coor - self.x_coor) ** 2
        sqy = (y_coor - self.y_coor) ** 2
        if math.sqrt(sqx + sqy) < 25 and self.appear == True:
            self.appear = False
            return True
        else:
            return False


     

def main():
    pygame.init()
    screen = pygame.display.set_mode((800,600)) #sets game size
    clock = pygame.time.Clock() #initializing internal clock
    score = 0 #keep track of user score
    effect = pygame.mixer.Sound('whack.wav')
    font = pygame.font.Font(None, 60)
    stop_game = False # making sure game is running
    timer = 0 #a timer to utilize clock
    array_of_dots = [Dot(200, 200), Dot(400, 200), Dot(600, 200), Dot(200, 400), Dot(400, 400), Dot(600,400)] #setting an array for randomization of 6 background "holes"
    current_dot = array_of_dots[1] #<--- gives random 1 and only 1
    green = (34,139,34) # background set up
    while not stop_game: # while game is running
        for event in pygame.event.get(): #lets user exit game - literally
            if event.type == pygame.MOUSEBUTTONDOWN:
                x = pygame.mouse.get_pos()[0]
                y = pygame.mouse.get_pos()[1]
                if current_dot.is_clicked(x, y):
                    effect.play()
                    score += 1
                    timer += 60
                    print score
                print (x, y)
            if event.type == pygame.QUIT:
                # stop_game = True
                pygame.quit()

        if timer >= 60: #when at 3 second - make a whack a dot dot appear on screen randomly through the array, then reset the timer
            current_dot.appear = False
            current_dot = array_of_dots[randint(0,len(array_of_dots) -1)]
            current_dot.appear = True
            timer = 0
        screen.fill(green)
        pygame.draw.circle(screen, (102, 51, 0), (200, 200), 50, 0)
        pygame.draw.circle(screen, (102, 51, 0), (400, 200), 50, 0)
        pygame.draw.circle(screen, (102, 51, 0), (600, 200), 50, 0)
        pygame.draw.circle(screen, (102, 51, 0), (200, 400), 50, 0)
        pygame.draw.circle(screen, (102, 51, 0), (400, 400), 50, 0)
        pygame.draw.circle(screen, (102, 51, 0), (600, 400), 50, 0)
        scoreboard = font.render("Score: " + str(score), True, (0, 0, 0))
        screen.blit(scoreboard, (325, 50))
        for dot in array_of_dots: 
            if dot.appear == True:
                dot.draw_self(screen)
        pygame.display.set_caption('Whack-A-Dot: How many can you whack in 1 minute?')
        pygame.display.update()

        timer += 1
        clock.tick(60)



main()
