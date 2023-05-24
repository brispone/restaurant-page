const loadMenu = () => {
    const container = document.createElement('div');
    container.id = "menu-container";

    const menu = document.createElement('div');
    menu.id = "menu-box";
    menu.classList.add("info-box");
    menu.innerHTML = "This is the menu.<br>Shrimp<br><br>Pizza<br><br>Soup";

    container.appendChild(menu);

    const content = document.getElementById("content");
    if(content.lastChild) {
        content.removeChild(content.lastChild);
    }
    content.appendChild(container);
};

export { loadMenu };