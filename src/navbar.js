import { loadMainPage } from "./homepage";
import { loadMenu } from "./menupage";
import { loadContact } from "./contactpage";

const loadNav = () => {
    const navbar = document.createElement('div');
    navbar.id = "navbar";

    const aboutButton = document.createElement('div');
    aboutButton.classList.add("nav-btn");
    aboutButton.classList.add("active");
    aboutButton.innerText = "ABOUT";

    const menuButton = document.createElement('div');
    menuButton.classList.add("nav-btn");
    menuButton.innerText = "MENU";

    const contactButton = document.createElement('div');
    contactButton.classList.add("nav-btn");
    contactButton.innerText = "CONTACT";

    navbar.appendChild(aboutButton);
    navbar.appendChild(menuButton);
    navbar.appendChild(contactButton);

    aboutButton.addEventListener("click", ()=> {
        loadMainPage();
        setActiveNavItem(aboutButton);
    });

    menuButton.addEventListener("click", ()=> {
        loadMenu();
        setActiveNavItem(menuButton);
    });

    contactButton.addEventListener("click", ()=> {
        loadContact();
        setActiveNavItem(contactButton);
    });

    document.body.insertBefore(navbar, document.getElementById("content"));
};

const setActiveNavItem = (activeButton) => {
    const navButtons = document.querySelectorAll(".nav-btn");
    navButtons.forEach((button) => {
        if (button === activeButton) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });
};

export { loadNav };