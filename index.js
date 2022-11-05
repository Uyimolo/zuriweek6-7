const images = document.querySelectorAll(".img");
let index = 0;

const showImg = (i) => {
  const showing = images[i];
  showing.classList.add("active");
  // remove previously shown images
  const activeImages = document.querySelectorAll(".img.active");
  activeImages.forEach((img) => {
    if (img !== showing) {
      img.classList.remove("active");
    }
  });
};
// show first image when page loads
window.addEventListener("DOMContentLoaded", showImg(0));

const plusIndex = () => {
  index++;
  if (index === images.length) {
    index = 0;
  }
};
const minusIndex = () => {
  if (index === 0) {
    index = images.length;
  }
  index--;
};
// increase and decrease index based on which carousel btn is clicked
const ctrl = document.querySelectorAll(".carousel-ctrl");
ctrl.forEach((ctrl) => {
  ctrl.addEventListener("click", () => {
    if (ctrl.classList.contains("next")) {
      plusIndex();
    } else {
      minusIndex();
    }
    showImg(index);
  });
});
