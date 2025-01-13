let container1El = document.querySelector(".container1");
let container2El = document.querySelector(".container2");
let formEl = document.querySelector("#form");
let ratingEl = document.querySelector("span");

let inputEl = document.querySelectorAll("input");
let rating = null;

inputEl.forEach((input,i) => {

  input.addEventListener("click", () => {
    checkOther();
input.classList.add("select");
    rating = input.value;
  });
 
});

function checkOther(i)
{
  inputEl.forEach((input) => {
input.classList.remove("select")
    });
}



formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  if (rating != null) {
    container1El.classList.add("hide");
    ratingEl.innerHTML = `You selected ${rating} out of 5`;
    container2El.classList.remove("hide");
    rating = null;
  }
});
