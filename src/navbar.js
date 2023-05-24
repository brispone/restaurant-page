import { loadMainPage } from "./homepage";
import { loadMenu } from "./menupage";
import { loadContact } from "./contactpage";

const loadNav = () => {
    const navbar = document.createElement('div');
    navbar.id = "navbar";

    const aboutButton = document.createElement('div');
    aboutButton.classList.add("nav-btn");
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
    });

    menuButton.addEventListener("click", ()=> {
        loadMenu();
    });

    contactButton.addEventListener("click", ()=> {
        loadContact();
    });

    document.body.insertBefore(navbar, document.getElementById("content"));
};

export { loadNav };