let minusButton = document.querySelectorAll(".minus");
let plusButton = document.querySelectorAll(".plus");
let answerContainer = document.querySelectorAll(".answer");

plusButton.forEach((plus, i) => {
  plus.addEventListener("click", () => {
    checkOther();

    plus.classList.add("hide");
    minusButton[i].classList.remove("hide");
    answerContainer[i].classList.remove("hide");
  });
});

minusButton.forEach((minus, i) => {
  minus.addEventListener("click", () => {
    minus.classList.add("hide");
    plusButton[i].classList.remove("hide");
    answerContainer[i].classList.add("hide");
  });
});

function checkOther() {
  plusButton.forEach((item) => {
    item.classList.remove("hide");
  });

  minusButton.forEach((item) => {
    item.classList.add("hide");
  });

  answerContainer.forEach((item, i) => {
    item.classList.add("hide");
  });
}
