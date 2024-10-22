const slider = document.querySelector(".slider");
const sliderImages = document.querySelector(".slider-images");
const dots = document.querySelectorAll(".dot");
const cartLength = document.getElementById("cart-length");

let index = 0;

function showImages() {
  const offset = index * -771.27;
  sliderImages.style.transform = `translateX(${offset}px)`;

  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function nextSlide() {
  index++;
  if (index > 2) {
    index = 2;
  }
  showImages();
}

function prevSlide() {
  index--;
  if (index < 0) {
    index = 0;
  }
  showImages();
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    showImages();
  });
});

showImages();