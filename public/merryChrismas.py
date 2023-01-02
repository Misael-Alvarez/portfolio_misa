from turtle import *
from random import randint

def create_rectangle(turtle,color,x,y,width,height):
    turtle.penup()
    turtle.goto(x,y)
    turtle.pendown()
    turtle.color(color)
    turtle.begin_fill()
    for i in range(2):
        turtle.forward(width)
        turtle.left(90)
        turtle.forward(height)
        turtle.left(90)
    turtle.end_fill()
t = Turtle()
y = -100
create_rectangle(t,"brown",-15,y-60,30,60)
width = 240
t.speed(10)
while width > 10:
    width -= 10
    height = 10
    x = 0 - width/2
    create_rectangle(t,"green",x,y,width,height)
    y += height
t.speed(1)
t.penup()
t.color("yellow")
t.goto(-20,y+10)
t.begin_fill()
t.pendown()
for i in range(5):
    t.forward(40)
    t.right(144)
t.end_fill()
tree_height = y + 40
