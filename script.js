const heartOne = document.querySelector(".heart-one");
const heartTwo = document.querySelector(".heart-two");
const heartThree = document.querySelector(".heart-three");
const heartFour = document.querySelector(".heart-four");
const heartFive = document.querySelector(".heart-five");
const heartSix = document.querySelector(".heart-six");
const fullHeartOne = document.querySelector(".full-heart-one");
const fullHeartTwo = document.querySelector(".full-heart-two");
const fullHeartThree = document.querySelector(".full-heart-three");
const fullHeartFour = document.querySelector(".full-heart-four");
const fullHeartFive = document.querySelector(".full-heart-five");
const fullHeartSix = document.querySelector(".full-heart-six");

heartOne.addEventListener("click", () => {
  heartOne.style.display = "none";
  fullHeartOne.style.display = "inline";
  fullHeartOne.style.color = "red"
});
heartTwo.addEventListener("click", () => {
  heartTwo.style.display = "none";
  fullHeartTwo.style.display = "inline";
  fullHeartTwo.style.color = "red"
});
heartThree.addEventListener("click", () => {
  heartThree.style.display = "none";
  fullHeartThree.style.display = "inline";
  fullHeartThree.style.color = "red"
});
heartFour.addEventListener("click", () => {
  heartFour.style.display = "none";
  fullHeartFour.style.display = "inline";
  fullHeartFour.style.color = "red"
});
heartFive.addEventListener("click", () => {
  heartFive.style.display = "none";
  fullHeartFive.style.display = "inline";
  fullHeartFive.style.color = "red"
});
heartSix.addEventListener("click", () => {
  heartSix.style.display = "none";
  fullHeartSix.style.display = "inline";
  fullHeartSix.style.color = "red"
});

fullHeartOne.addEventListener("click", () => {
    fullHeartOne.style.display = "none";
    heartOne.style.display = "inline";
});
fullHeartTwo.addEventListener("click", () => {
    fullHeartTwo.style.display = "none";
    heartTwo.style.display = "inline";
});
fullHeartThree.addEventListener("click", () => {
    fullHeartThree.style.display = "none";
    heartThree.style.display = "inline";
});
fullHeartFour.addEventListener("click", () => {
    fullHeartFour.style.display = "none";
    heartFour.style.display = "inline";
});
fullHeartFive.addEventListener("click", () => {
    fullHeartFive.style.display = "none";
    heartFive.style.display = "inline";
});
fullHeartSix.addEventListener("click", () => {
    fullHeartSix.style.display = "none";
    heartSix.style.display = "inline";
});
