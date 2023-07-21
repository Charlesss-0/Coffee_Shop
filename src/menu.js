import menuCSS from './menu.css';
import './images/menu-image.jpg';
import './images/latte-art.png';

export default class MenuPage {
    render() {
        const mainContent = document.createElement('main');
        mainContent.classList.add('menu-main-content');
        mainContent.innerHTML = `
            <section class="menu-main-section">
                <div class="coffee-menu-wrapper">
                    <h1>
                        Coffee Menu
                    </h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </p>

                    <div class="menu">
                        <ul>
                            <li>
                                <img src="./images/latte-art.png" alt="coffee-icon">
                                <div class="ttl-n-prc">
                                    <h2>Espresso</h2><hr>
                                    <span>$2.50</span>
                                </div>
                                <span class="cf-in">
                                    A concentrated shot of coffee made by forcing hot water through finely-ground coffee beans.
                                    It's the foundation for many other coffee beverages, known for its intense flavor and smooth texture.
                                </span>
                            </li>

                            <li>
                                <img src="./images/latte-art.png" alt="coffee-icon">
                                <div class="ttl-n-prc">
                                    <h2>Cappuccino</h2><hr>
                                    <span>$3.50</span>
                                </div>
                                <span class="cf-in">
                                    A classic Italian coffee made with equal parts espresso, steamed milk, and frothed milk. 
                                    Its delightful balance of espresso and creamy foam on top creates a rich and satisfying taste.
                                </span>
                            </li>

                            <li>
                                <img src="./images/latte-art.png" alt="coffee-icon">
                                <div class="ttl-n-prc">
                                    <h2>Latte</h2><hr>
                                    <span>$4.00</span>
                                </div>
                                <span class="cf-in">
                                    A smooth and mellow coffee drink made with a shot of espresso and steamed milk. 
                                    It has a higher milk-to-coffee ratio, resulting in a creamy, comforting beverage.
                                </span>
                            </li>

                            <li>
                                <img src="./images/latte-art.png" alt="coffee-icon">
                                <div class="ttl-n-prc">
                                    <h2>Mocha</h2><hr>
                                    <span>$4.50</span>
                                </div>
                                <span class="cf-in">
                                    A delightful blend of espresso, steamed milk, and chocolate syrup, topped with whipped cream. 
                                    This coffee treat offers a perfect harmony of rich coffee and chocolate flavors.
                                </span>
                            </li>

                            <li>
                                <img src="./images/latte-art.png" alt="coffee-icon">
                                <div class="ttl-n-prc">
                                    <h2>Americano</h2><hr>
                                    <span>$3.00</span>
                                </div>
                                <span class="cf-in">
                                    A simple yet flavorful coffee created by diluting a shot of espresso with hot water. 
                                    It provides a similar strength to traditional coffee but retains the distinct taste of espresso.
                                </span>
                            </li>

                            <li>
                                <img src="./images/latte-art.png" alt="coffee-icon">
                                <div class="ttl-n-prc">
                                    <h2>Macchiato</h2><hr>
                                    <span>$3.50</span>
                                </div>
                                <span class="cf-in">
                                    An espresso-based coffee with a dollop of frothy milk on top, providing a bolder taste compared to a regular latte. 
                                    Its name means "stained" in Italian, referring to the milk "staining" the espresso.
                                </span>
                            </li>

                            <li>
                                <img src="./images/latte-art.png" alt="coffee-icon">
                                <div class="ttl-n-prc">
                                    <h2>Flat White</h2><hr>
                                    <span>$4.00</span>
                                </div>
                                <span class="cf-in">
                                    A velvety coffee made with espresso and a small amount of steamed milk, 
                                    creating a smooth texture without the frothiness of a cappuccino or latte.
                                </span>
                            </li>

                            <li>
                                <img src="./images/latte-art.png" alt="coffee-icon">
                                <div class="ttl-n-prc">
                                    <h2>Iced Coffee</h2><hr>
                                    <span>$3.50</span>
                                </div>
                                <span class="cf-in">
                                    Chilled coffee served over ice, often sweetened and with the option to add milk or flavored syrups. 
                                    A refreshing and energizing choice, especially on warmer days.
                                </span>
                            </li>

                            <li>
                                <img src="./images/latte-art.png" alt="coffee-icon">
                                <div class="ttl-n-prc">
                                    <h2>Affogato</h2><hr>
                                    <span>$4.50</span>
                                </div>
                                <span class="cf-in">
                                    A delightful dessert coffee consisting of a scoop of vanilla ice cream "drowned" in a shot of hot espresso. 
                                    The combination of hot and cold creates a wonderful contrast of textures and flavors.
                                </span>
                            </li>

                            <li>
                                <img src="./images/latte-art.png" alt="coffee-icon">
                                <div class="ttl-n-prc">
                                    <h2>Irish Coffee</h2><hr>
                                    <span>$5.50</span>
                                </div>
                                <span class="cf-in">
                                    A delightful blend of hot coffee, Irish whiskey, brown sugar, and topped with a layer of thick cream. 
                                    This classic cocktail coffee is a perfect choice for those seeking a warm and spirited drink.
                                </span>
                            </li>

                            <li>
                                <img src="./images/latte-art.png" alt="coffee-icon">
                                <div class="ttl-n-prc">
                                    <h2>Vienna Coffee</h2><hr>
                                    <span>$4.50</span>
                                </div>
                                <span class="cf-in">
                                    A velvety espresso-based coffee infused with whipped cream and sprinkled with chocolate shavings or cocoa powder. 
                                    This Austrian specialty is a treat for both coffee and dessert enthusiasts.
                                </span>
                            </li>

                            <li>
                                <img src="./images/latte-art.png" alt="coffee-icon">
                                <div class="ttl-n-prc">
                                    <h2>Caramel Macchiato</h2><hr>
                                    <span>$4.50</span>
                                </div>
                                <span class="cf-in">
                                    A heavenly combination of espresso, steamed milk, and caramel syrup, topped with velvety milk foam. 
                                    This sweet and indulgent coffee drink is sure to satisfy your cravings.
                                </span>
                            </li>

                            <li>
                                <img src="./images/latte-art.png" alt="coffee-icon">
                                <div class="ttl-n-prc">
                                    <h2>Turkish Coffee</h2><hr>
                                    <span>$4.00</span>
                                </div>
                                <span class="cf-in">
                                    A traditional method of brewing coffee by boiling finely-ground coffee beans with water and sugar (optional). 
                                    Served unfiltered with a rich, thick texture and a robust taste.
                                </span>
                            </li>

                            <li>
                                <img src="./images/latte-art.png" alt="coffee-icon">
                                <div class="ttl-n-prc">
                                    <h2>Cortado</h2><hr>
                                    <span>$3.50</span>
                                </div>
                                <span class="cf-in">
                                    A Spanish-inspired coffee made with equal parts espresso and steamed milk, 
                                    resulting in a small, strong, and smooth beverage perfect for sipping.
                                </span>
                            </li>

                            <li>
                                <img src="./images/latte-art.png" alt="coffee-icon">
                                <div class="ttl-n-prc">
                                    <h2>Nitro Cold Brew</h2><hr>
                                    <span>$4.50</span>
                                </div>
                                <span class="cf-in">
                                    Cold brew coffee infused with nitrogen, resulting in a creamy and velvety texture with a naturally sweet taste. 
                                    Served straight from the tap, this coffee is a refreshing pick-me-up.
                                </span>
                            </li>

                            <li>
                                <img src="./images/latte-art.png" alt="coffee-icon">
                                <div class="ttl-n-prc">
                                    <h2>Honey Cinnamon Latte</h2><hr>
                                    <span>$4.50</span>
                                </div>
                                <span class="cf-in">
                                    A delectable latte with espresso, steamed milk, honey, and a sprinkle of cinnamon. 
                                    The combination of sweet honey and warming cinnamon creates a comforting and aromatic experience.
                                </span>
                            </li>

                            <li>
                                <img src="./images/latte-art.png" alt="coffee-icon">
                                <div class="ttl-n-prc">
                                    <h2>Decaf Soy Latte</h2><hr>
                                    <span>$4.00</span>
                                </div>
                                <span class="cf-in">
                                    A latte made with decaffeinated espresso and soy milk, 
                                    perfect for those seeking a caffeine-free and dairy-free option without compromising on taste.
                                </span>
                            </li>

                            <li>
                                <img src="./images/latte-art.png" alt="coffee-icon">
                                <div class="ttl-n-prc">
                                    <h2>Ristretto</h2><hr>
                                    <span>$3.00</span>
                                </div>
                                <span class="cf-in">
                                    An intense and concentrated shot of espresso, extracted with the same amount of coffee grounds but half the amount of water. Ideal for coffee enthusiasts who appreciate a bolder flavor.
                                </span>
                            </li>

                            <li>
                                <img src="./images/latte-art.png" alt="coffee-icon">
                                <div class="ttl-n-prc">
                                    <h2>Coconut Iced Coffee</h2><hr>
                                    <span>$4.50</span>
                                </div>
                                <span class="cf-in">
                                    A tropical twist on iced coffee, made with chilled coffee, coconut milk, and a touch of sweetener. Served over ice, it's a refreshing and creamy delight.
                                </span>
                            </li>

                            <li>
                                <img src="./images/latte-art.png" alt="coffee-icon">
                                <div class="ttl-n-prc">
                                    <h2>Chai Latte</h2><hr>
                                    <span>$4.00</span>
                                </div>
                                <span class="cf-in">
                                    A spiced tea-based latte made with black tea, steamed milk, honey, and a blend of aromatic spices like cinnamon, cardamom, ginger, and cloves.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        `;

        return mainContent;
    };
};