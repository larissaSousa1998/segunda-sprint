let $ = document.querySelector.bind(document);

let navMenu = $("#nav-menu");
let navLinks = document.querySelectorAll(".menu-link");

document.addEventListener("scroll", activeNavBar);
navLinks.forEach(linkElement => linkElement.addEventListener("click", linkAnimations));

function activeNavBar(){
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        navMenu.classList.add("nav-scrolled");
    }
    else {
        navMenu.classList.remove("nav-scrolled");
    }
}

//função para unir todas animações de link do menu
function linkAnimations(event) {
    activeLink(event);
    smoothScroll(event);
}

//estilizar o link da sessão ativa 
function activeLink(event) {
    const targetHref = event.currentTarget.getAttribute('href');

    navLinks.forEach(aElement => {
        if(aElement.getAttribute('href') == targetHref) {
            aElement.classList.add("active");
        }
        else {
            aElement.classList.remove("active");
        }
    })
}

//animação de scroll
function smoothScroll(event) {
    event.preventDefault();
    
    const targetId = event.currentTarget.getAttribute('href');

    window.scrollTo({
        top: $(targetId).offsetTop - 40,
        behavior: 'smooth'
    });
}