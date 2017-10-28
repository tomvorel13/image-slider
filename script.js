let sliderImages = document.querySelectorAll(".slide");
let arrowRight = document.querySelector("#arrow-left");
let arrowLeft = document.querySelector("#arrow-right");
let current = 0;

function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

//Previous image
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

//Next image
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

//Left arrow click
arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

//Right arrow click
arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();
