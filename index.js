//select all sides
let allSlides = document.querySelectorAll(".slide");

//make each slide horizontally
let i;
for( i=0; i < allSlides.length; i++) {
allSlides[i].style.transform = 'translateX(' + (1000 * i) + 'px)';
}

//select the next btn
let nextB = document.querySelector(".nextBtn");

//current slide counter
let currentI = 0;

//maximum number of slides
let max = allSlides.length - 1

//next btn function
nextB.addEventListener("click",function() {
//if currentI is the same maximum numver of slides, then go back to num 0
  if( currentI === max ) {
    currentI = 0;
  }else {
    currentI++;
  }

//each slides move to translateX( px)
  for(i= 0; i < allSlides.length; i++ ){
    allSlides[i].style.transform = 'translateX(' + 1000 * ( i - currentI ) + 'px)';
  }
})

//prev btn function
let prevB = document.querySelector(".prevBtn");

prevB.addEventListener("click", function () {
//if currnetI is equel to 0 (means, first slides), then go to the max slides
  if( currentI === 0){
    currentI = max;
  }else {
    currentI--;
  }

//each slides move to translateX
   for(i=0; i < allSlides.length; i++) {
     allSlides[i].style.transform = 'translateX(' + 1000 * ( i - currentI ) + 'px)';
   }
})
