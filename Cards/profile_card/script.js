"use strict"
document.body.style.fontSize 
const card = document.querySelector(".card");
const img = document.querySelector(".img");

card.addEventListener("mouseenter", () => {
	card.classList.toggle("zoom")
	img.classList.toggle("zoom")
})
card.addEventListener("mouseleave", () => {
	card.classList.toggle("zoom")
	img.classList.toggle("zoom")
})


