# ImageSlide

1. How it works? 
This is one of my mini JS projects, this simple and modern slide show contains four imgs, and two(prev,next) buttons.
When you click the buttons, you can see the following image or previous image.

2. What I learned 
- CSS part : grid, transform - translateX
- JS part: for loops 
- The most difficult part to understand is how to make each slide move to the next side, basically, once you clicked the next button, a counter number will increase 
then multiple -1, 0, 1, 2 to each index of slides, so each slide will have a different translateX value
- However, when the counter number reaches number 4 which is the end of slides, then it's not working, it shows me a blank page because there’s no next slide image. In order to fix it, I need to add IF statement.
If the counter number is equal to the maximum number of slides, then go back to number 0, so it can start over, otherwise keep increase the current number 

3. What I want to add to this slide in the future 
- I want to add small dots at the bottom of the images, so when you click the four dots, it will bring you the image you want to see, rather than keep clicking the next button or previous button to find a specific image you want to see. 



