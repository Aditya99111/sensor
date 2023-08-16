let menu = document.querySelector('#menu-btn');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


document.addEventListener("DOMContentLoaded", function() {
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach(function(accordion) {
        const heading = accordion.querySelector(".accordion-heading");
        const content = accordion.querySelector(".accordion-content");

        heading.addEventListener("click", function() {
            accordion.classList.toggle("active"); // Toggle the "active" class on accordion

            if (accordion.classList.contains("active")) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = null;
            }
        });
    });
});