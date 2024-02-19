// NAV SECTION

let hamburgerMenu = document.querySelector(".menu-btn");
let sidebar = document.querySelector(".sidebar-container");

let closeBtn = document.querySelector(".close-btn");

hamburgerMenu.onclick = displaySidebar;

closeBtn.onclick = closeSidebar;

function displaySidebar() {
  sidebar.style.display = "flex";
}

function closeSidebar() {
  sidebar.style.display = "none";
}

// MAIN SECTION

const btnOneLower = document.getElementById("btn-one-lower");
// console.log(btnOneLower);
const btnOneQuantity = document.getElementById("btn-one-quantity");
// console.log(btnOneQuantity);
const btnOneIncrease = document.getElementById("btn-one-increase");
// console.log(btnOneIncrease);

let btnOneCount = 0;

// btnOneLower.onclick = function () {
//   if (btnOneCount <= 0) {
//     btnOneQuantity.textContent = btnOneCount;
//   } else {
//     btnOneCount--;
//     btnOneQuantity.textContent = btnOneCount;
//   }
// };

btnOneIncrease.onclick = function () {
  btnOneCount++;
  btnOneQuantity.textContent = btnOneCount;
  console.log(btnOneCount);
};

// btnOneLower.addEventListener("click", function () {
//   lowerQuantity(btnOneQuantity, btnOneCount);
// });

btnOneLower.onclick = lowerQuantity(btnOneQuantity, btnOneCount);

function lowerQuantity(btn, count) {
  if (count <= 0) {
    btn.textContent = count;
  } else {
    count--;
    btn.textContent = count;
  }
  console.log(btnOneCount);
}

// BY THE WAY GABE, THIS IS YOU FROM THE FUTURE. IF YOU FORGET CAUSE YOU FELL ALSEEP I WILL REMIND YOU HOW TO ADD THE COUNT ON THE QUANTITY BUTTON TO EVERY CARD. USE AN OBJECT FOR EACH CARD AND THEN LIKE IN THE JS COURSE FOR FREE CODE CAMP PASS IN THE OBJECT TO A FUNCTION OR SUMM SHIT YK.
