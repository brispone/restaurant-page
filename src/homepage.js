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
    hero.innerText = "This is a restaurant. We have food. Come eat it.";

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

    document.getElementById("content").appendChild(container);
};

export { loadMainPage };