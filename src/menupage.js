const loadMenu = () => {
    const container = document.createElement('div');
    container.id = "menu-container";

    const menu = document.createElement('div');
    menu.id = "menu-box";
    menu.classList.add("info-box");

    const menuContent = `
    <div id="menu">
      <h2>Appetizers:</h2>
      <ul>
        <li>Garlic Bread - $5.99<br>
            Freshly baked bread with a delicious garlic and herb butter.
        </li>
    
        <li>Bruschetta - $6.99<br>
            Diced tomatoes, fresh basil, garlic, and balsamic glaze on toasted baguette slices.
        </li>
    
        <li>Spinach and Artichoke Dip - $7.99<br>
            Creamy blend of spinach, artichokes, and melted cheese served with tortilla chips.
        </li>
      </ul>
    
      <h2>Main Courses:</h2>
      <ul>
        <li>Grilled Salmon - $16.99<br>
            Grilled salmon fillet served with lemon herb butter and a side of mixed vegetables.
        </li>
    
        <li>Chicken Alfredo - $14.99<br>
            Grilled chicken breast tossed in creamy Alfredo sauce with fettuccine pasta.
        </li>
    
        <li>Margherita Pizza - $12.99<br>
            Fresh tomato, mozzarella, basil, and a drizzle of olive oil on a thin crust.
        </li>
    
        <li>Classic Cheeseburger - $11.99<br>
            Juicy beef patty, melted cheese, lettuce, tomato, and pickles on a brioche bun.
        </li>
      </ul>
    
      <h2>Desserts:</h2>
      <ul>
        <li>Chocolate Lava Cake - $6.99<br>
            Warm chocolate cake with a gooey molten center, served with vanilla ice cream.
        </li>
    
        <li>New York Cheesecake - $5.99<br>
            Creamy and rich cheesecake topped with your choice of raspberry or caramel sauce.
        </li>
      </ul>
    
      <h2>Beverages:</h2>
      <ul>
        <li>Iced Coffee - $3.49<br>
            Cold-brewed coffee with a splash of milk and sweetener.
        </li>
    
        <li>Lemonade - $2.99<br>
            Refreshing lemonade made with fresh lemons and a hint of sweetness.
        </li>
    
        <li>Strawberry Smoothie - $4.49<br>
            Blended strawberries, yogurt, and ice for a cool and fruity treat.
        </li>
      </ul>
    </div>
    `;

    menu.innerHTML = menuContent;

    container.appendChild(menu);

    const content = document.getElementById("content");
    if(content.lastChild) {
        content.removeChild(content.lastChild);
    }
    content.appendChild(container);
};

export { loadMenu };