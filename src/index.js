icon = document.querySelector("#icon");

icon.addEventListener("click", () => {
  navBar = document.querySelector(".nav-right");
  navBar.classList.toggle("active");
  icon.classList.toggle("cross-icon");
});

// NAVBAR
const nav = document.querySelector(".navbar");
let lastScrollTop = 0;

window.onscroll = function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    nav.classList.add("hide");
    nav.style.backgroundColor = "black";
  } else {
    nav.classList.remove("hide");
  }
  lastScrollTop = scrollTop;
};

// Input

var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var inptHidden = document.querySelector("#inptHide");

console.log(option2, inptHidden);

option1.addEventListener("click", () => {
  if (option1.checked) {
    inptHidden.classList.add("inptHide");
  } else {
    inptHidden.classList.remove("inptHide");
  }
});

option2.addEventListener("click", () => {
  if (option2.checked) {
    inptHidden.classList.remove("inptHide");
  } else {
    inptHidden.classList.add("inptHide");
  }
});

// COPY RIGHT PART

const year = new Date().getFullYear();
const copyRight = document.querySelector(".copyright");
const copyRightMessage = (document.querySelector(
  ".copyright"
).innerHTML = `Copyright &copy; ${year} | Taxi Maarssen`);
