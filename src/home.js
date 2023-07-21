import homeCSS from './home.css';
import './images/hero-image.jpg';
import './images/quote-background.jpg';
import './images/american-coffee.jpg';
import './images/cost-rica-coffee.jpg';
import './images/jamaican-coffee.jpg';
import './images/house-coffee.jpg';

export default class HomePage {
    render() {
        const mainContent = document.createElement('main');
        mainContent.classList.add('home-main-content');
        mainContent.innerHTML = `
            <section class="home-main-section"></section>

            <section class="products-section">
                <h1 class="products-main-text">
                    OUR PRODUCTS
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ex vel purus maxim
                    luctus bibendum vitae ut sapien. Donec eget mauris et velit aliquam malesuada
                </p>
                <div class="products-wrapper">
                    <div class="product">
                        <div class="image-product-wrapper">
                            <img src="./images/american-coffee.jpg" alt="american coffee">
                        </div>
                        <p>
                            American Coffee
                        </p>
                        <p>
                            $25.00
                        </p>
                        <button>
                            Add to Cart
                        </button>
                    </div>

                    <div class="product">
                        <div class="image-product-wrapper">
                            <img src="./images/cost-rica-coffee.jpg" alt="cost rica coffee">
                        </div>
                        <p>
                            Cost Rica Light
                        </p>
                        <p>
                            $35.00
                        </p>
                        <button>
                            Add to Cart
                        </button>
                    </div>

                    <div class="product">
                        <div class="image-product-wrapper">
                            <img src="./images/jamaican-coffee.jpg" alt="jamaican coffee">
                        </div>
                        <p>
                            Jamaican Mountain
                        </p>
                        <p>
                            $15.00
                        </p>
                        <button>
                            Add to Cart
                        </button>
                    </div>

                    <div class="product">
                        <div class="image-product-wrapper">
                            <img src="./images/house-coffee.jpg" alt="house coffee">
                        </div>
                        <p>
                            House Coffee
                        </p>
                        <p>
                            $25.00
                        </p>
                        <button>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </section>

            <section class="quote-section">
                <div>
                    <blockquote class="quote">
                        "Good ideas start with brainstorming, great ideas start with coffee"
                    </blockquote>
                </div>
            </section>

            <section class="form-section">
                <h1>
                    Book Your Table
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ex vel purus maxim
                    luctus bibendum vitae ut sapien. Donec eget mauris et velit aliquam malesuada
                </p>
                <form class="form-field">
                    <fieldset>
                        <div>
                            <label for="user-name">Your Name</label>
                            <input type"text" id="user-name" name="username" required>
                        </div>

                        <div>
                            <label for="email-address">Email Address</label>
                            <input type="email" id="email-address" name="useremail" required>
                        </div>
                    </fieldset>

                    <fieldset>
                        <div>
                            <label for="phone-number">Phone Number</label>
                            <input type="tel" id="phone-number" name="userphone">
                        </div>

                        <div>
                            <label for="date">MM/DD/YYYY</label>
                            <input type="date" id="date" name="date" required>
                        </div>
                    </fieldset>

                    <fieldset>
                        <div>
                            <select>
                                <option>Select</option>
                            </select>
                        </div>

                        <div>
                            <select>
                                <option>
                                    Select
                                </option>
                            </select>
                        </div>
                    </fieldset>

                    <fieldset>
                        <textarea></textarea>
                    </fieldset>

                    <fieldset>
                        <button>
                            Book Now
                        </button>
                    </fieldset>
                </form>
            </section>
        `;

        return mainContent;
    };
};