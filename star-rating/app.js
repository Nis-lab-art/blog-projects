const stars = document.querySelectorAll(".star");
const rating = document.querySelector(".rating-num");
let ratingNum = 0;

stars.forEach((star, index1) => {
  star.addEventListener("click", function () {
    stars.forEach((star, index2) => {
      console.log(index1, index2);
      index1 >= index2
        ? star.classList.add("active")
        : star.classList.remove("active");
      ratingNum = index1 + 1;
      rating.textContent = ratingNum;
    });
  });
  star.addEventListener("mouseover", function () {
    rating.textContent = index1 + 1;
  });
  star.addEventListener("mouseout", function () {
    rating.textContent = ratingNum;
  });
});
