/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

const navSection = document.querySelectorAll("section"),
  navList = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Begin Main Functions
 *
 */

// build the nav

function buildNav() {
	const newNav = document.createElement('nav');
	navList.appendChild(newNav);
	for(let i=0; i<navSection.length; i++){
		let j = i+1;
		const htmlTextToAdd = '<li class="menu__link"> <a href="#section' + j + '"> Section ' + j + ' </a></li>';
		newNav.insertAdjacentHTML('beforeend', htmlTextToAdd);
	}
}

// Scroll to anchor ID using scrollTO event

function scrollToSection() {
	document.querySelector('section').addEventListener("click", function(clickedSection){
		clickedSection.preventDefault();
		var sectionID = this.getAttribute("href");
		var targetSection = document.querySelector(sectionID);
		if(targetSection){
			target.scrollIntoView();
		}
	});
}

// Add class 'active' to section when near top of viewport

function activeSection(){
	for (const section of navSection){
		const pos = section.getBoundingClientRect();
		if(pos.top <= 150  && pos.bottom >= 150){
			section.classList.add("your-active-class");
		}
		else{
			section.classList.remove("your-active-class");
		}
	}
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
buildNav();

// Scroll to section on link click
scrollToSection();

// Set sections as active

window.addEventListener('scroll', () => {
    activeSection();
});

/**
 * End Events
 *
 */
