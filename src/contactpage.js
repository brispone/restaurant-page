const loadContact = () => {
    const container = document.createElement('div');
    container.id = "contact-container";

    const contact = document.createElement('div');
    contact.id = "contact-box";
    contact.classList.add("info-box");
    contact.innerHTML = "Get in touch!";

    container.appendChild(contact);

    const content = document.getElementById("content");
    if(content.lastChild) {
        content.removeChild(content.lastChild);
    }
    content.appendChild(container);
};

export { loadContact };