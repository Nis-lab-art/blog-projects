let counter = 0;
let trigger = 0;
const btn = document.getElementById("button");

const debounce = () => {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      console.log("Event is triggered", ++trigger, "times");
    }, 300);
  };
};
const handleDebounce = debounce();
btn.addEventListener('click', () => {
    console.log("You clicked me", ++counter, "times");
    handleDebounce();
});






// let counter = 0;
// const getData = () => {
//   console.log("Key is pressed", counter++);
// };

// const debounce = () => {
//   let timer;
//   return function () {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       console.log("Key is pressed", counter++);
//     }, 300);
//   };
// };

// const handleDebounce = debounce();
