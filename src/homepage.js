const loadMainPage = () => {
    const container = document.createElement('div');
    container.id = "container";

    const topContainer = document.createElement('div');
    topContainer.id = "top-container";

    const bottomContainer = document.createElement('div');
    bottomContainer.id = "bottom-container";

    const hero = document.createElement('div');
    hero.id = "hero";
    hero.classList.add("info-box");

    const heroHeader = document.createElement('h1');
    heroHeader.innerText = "This is a restaurant. We have food. Come eat it.";
    hero.appendChild(heroHeader);

    const aboutBlurb = document.createElement('p');
    aboutBlurb.innerText = "We are passionate about providing you with a delightful dining experience that tantalizes your taste buds. Our team of talented chefs crafts mouthwatering dishes using only the freshest and finest ingredients sourced from local suppliers.";
    hero.appendChild(aboutBlurb);

    const hours = document.createElement('div');
    hours.id = "hours";
    hours.classList.add("info-box");
    hours.innerHTML = "<ul><li>Monday: Closed</li><li>Tuesday: 11am - 9pm</li><li>Wednesday: 11am - 9pm</li><li>Thursday: 11am - 9pm</li><li>Friday: 11am - 10pm</li><li>Saturday: 11am - 10pm</li><li>Sunday: 3pm - 9pm</li></ul>";

    const location = document.createElement('div');
    location.id = "location";
    location.classList.add("info-box");
    location.innerHTML = "Located at<br><br>3241 B Street<br>Minneapolis, MN 55415<br><br>Come visit us!";

    container.appendChild(topContainer);
    container.appendChild(bottomContainer);
    topContainer.appendChild(hero);
    bottomContainer.appendChild(hours);
    bottomContainer.appendChild(location);

    const content = document.getElementById("content");
    if(content.lastChild) {
        content.removeChild(content.lastChild);
    }
    content.appendChild(container);
};

export { loadMainPage };