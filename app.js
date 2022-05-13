const hamburger = document.querySelector(".hamburger");
const menuItems = document.querySelector(".menuItems");
const menuLink = document.querySelectorAll(".menuItems .items a");
// console.log(menuLink);
hamburger.addEventListener("click", () => {
  menuItems.classList.toggle("active");
});

menuLink.forEach((link) => {
  link.addEventListener("click", () => {
    menuItems.classList.remove("active");
  });
});
