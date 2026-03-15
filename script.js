document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior:"smooth"
});

});

});



const sections = document.querySelectorAll("section");


window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop;

if(pageYOffset >= sectionTop - 100){
current = section.getAttribute("id");
}

});

navLinks.forEach(a => {
a.classList.remove("active");

if(a.getAttribute("href") === "#" + current){
a.classList.add("active");
}

});

});


const toggle = document.getElementById("darkmode-toggle");

toggle.addEventListener("change", () => {
document.body.classList.toggle("dark");
});



const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
navLinks.classList.toggle("active");
});


