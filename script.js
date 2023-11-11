const goSpace = () => {
  let a = document.getElementsByClassName("new_chat")[0];
  a.style.display = "none";
  let b = document.getElementsByClassName("new_chat")[1];
  b.style.display = "block";
};
const goChat = () => {
  let a = document.getElementsByClassName("new_chat")[1];
  a.style.display = "none";
  let b = document.getElementsByClassName("new_chat")[0];
  b.style.display = "block";
};

const ham = () => {
  let a = document.getElementsByClassName("hamburger")[0];
  let clicked = document.getElementsByClassName("hamclicked")[0];
  if (clicked) {
    a.style.transform = "translateX(-100%)";
    a.classList.remove("hamclicked");
  } else {
    a.style.transform = "translateX(0%)";
    a.classList.add("hamclicked");
  }
};
