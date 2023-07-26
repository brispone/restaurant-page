const loadContact = () => {
    const container = document.createElement('div');
    container.id = "contact-container";

    const contact = document.createElement('div');
    contact.id = "contact-box";
    contact.classList.add("info-box");

    const contactContent = `
        <div class="contact-info">
        <h2>Contact Us</h2>
        <p>If you have any questions or feedback, feel free to contact us:</p>
        <ul>
            <li><strong>Phone:</strong> (123) 456-7890</li>
            <li><strong>Email:</strong> info@restaurant.com</li>
        </ul>
        <p>We look forward to hearing from you!</p>
        </div>
        <div class="contact-form">
        <h2>Send us a Message</h2>
        <form>
            <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
        </div>
        `;
    contact.innerHTML = contactContent;

    container.appendChild(contact);

    const content = document.getElementById("content");
    if(content.lastChild) {
        content.removeChild(content.lastChild);
    }
    content.appendChild(container);
};

export { loadContact };