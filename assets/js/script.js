const menuBtn = document.querySelector(".js-menu-btn");
const mainNav = document.querySelector(".js-nav");
const header = document.querySelector("header");
const pricingToggle = document.querySelector(".pricing-toggler");
const prices = document.querySelectorAll(".price");

function openNavbar() {
  menuBtn.classList.toggle("open");
  mainNav.style.top = `${header.getBoundingClientRect().height}px`;
  mainNav.classList.toggle("open");
}
menuBtn.addEventListener("click", openNavbar);

pricingToggle.addEventListener("click", function (e) {
  const element = e.target;
  if (element.classList.contains("monthly")) {
    console.log("monthly");
    prices.forEach((price) =>
      console.log(+price.textContent.replace(/\D/g, ""))
    );
  } else if (element.classList.contains("yearly")) {
    console.log("yearly");
    prices.forEach((price) => {
      price.textContent = +price.textContent.replace(/\D/g, "") * 12;
    });
  } else {
    return;
  }
});
