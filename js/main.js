const leftBtn = document.querySelector(".head .left");
const rightBtn = document.querySelector(".head .right");
const image = document.querySelector(".head img");

leftBtn.addEventListener("click", () => {
  image.style.opacity = 0;

  setTimeout(function() {
    rnd = Math.floor(Math.random() * 5) + 1;
    image.src = `/img/dog${rnd}.jpg`;

    image.style.opacity = 1;
  }, 300);
  
});

rightBtn.addEventListener("click", () => {
  image.style.opacity = 0;

  setTimeout(() => {
    rnd = Math.floor(Math.random() * 5) + 1;
    image.src = `/img/dog${rnd}.jpg`;

    image.style.opacity = 1;
  }, 300);

});
