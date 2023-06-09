const menuBtn = document.querySelector(".js-menu-btn");
const mainNav = document.querySelector(".js-nav");
const header = document.querySelector("header");

const pricingToggle = document.querySelector(".pricing-toggler");
const monthBtn = document.querySelector(".monthly");
const yearBtn = document.querySelector(".yearly");
const prices = document.querySelectorAll(".price");
const pricePeriods = document.querySelectorAll(".price-period");
const priceCardBtns = document.querySelectorAll(".js-trail-btn");
const pricingCards = document.querySelectorAll(".pricing__card");

const dotsWrapper = document.querySelector(".dot-wrap");

//------responsive navbar-----------//

function openNavbar() {
  menuBtn.classList.toggle("open");
  mainNav.style.top = `${header.getBoundingClientRect().height}px`;
  mainNav.classList.toggle("open");
}
menuBtn.addEventListener("click", openNavbar);

//-------Pricing Card-----------//

const monthlyPlan = [10, 29, 49];
function togglePlans(e) {
  if (e.target.classList.contains("monthly")) {
    yearBtn.classList.remove("active");
    e.target.classList.add("active");
    prices.forEach((prices, i) => {
      prices.textContent = `$${monthlyPlan[i]}`;
      pricePeriods[i].textContent = "Per Month";
    });
  } else if (e.target.classList.contains("yearly")) {
    monthBtn.classList.remove("active");
    e.target.classList.add("active");
    prices.forEach((prices, i) => {
      prices.textContent = `$${monthlyPlan[i] * 12 - 2 * monthlyPlan[i]}`;
      pricePeriods[i].textContent = "Per Year";
    });
  } else {
    return;
  }
}
pricingToggle.addEventListener("click", function (e) {
  togglePlans(e);
});

priceCardBtns.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    pricingCards.forEach((card) => {
      card.classList.remove("active");
    });
    pricingCards[i].classList.add("active");
  });
});

//-------- testimonial cards slider---------//

const testimonialCards = document.querySelectorAll(".testimonials__card");
const dots = document.querySelectorAll(".slider-dot");

function slideTesimonials(curCard) {
  testimonialCards.forEach((card, i) => {
    // card.addEventListener("mouseover");
    card.classList.remove("active");
    card.style.transform = `translateX(-${100 * curCard}%)`;
    dots[i].classList.remove("active");
  });
  document.querySelector(`.js-card--${curCard}`).classList.add("active");
  document.querySelector(`.dot--${curCard}`).classList.add("active");
}

let currentCard = 0;
dotsWrapper.addEventListener("click", function (e) {
  if (!e.target.classList.contains("slider-dot")) return;
  resetSetInterval();
  currentCard = +e.target.dataset.dot;
  slideTesimonials(currentCard);
});

function autoSlideCards() {
  currentCard++;
  console.log(currentCard);
  if (currentCard >= testimonialCards.length) {
    currentCard = -1;
  } else {
    slideTesimonials(currentCard);
  }
}

let cardInterval = setInterval(autoSlideCards, 6000);

function resetSetInterval() {
  clearInterval(cardInterval);
  cardInterval = setInterval(autoSlideCards, 6000);
}
