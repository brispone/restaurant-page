const loadMenu = () => {
    const container = document.createElement('div');
    container.id = "container";

    container.innerText = "TEST TEST TEST";

    const content = document.getElementById("content");
    content.removeChild(content.lastChild);
    content.appendChild(container);
};

export { loadMenu };