import homeCSS from './home.css';
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
                        <img src="./images/american-coffee.jpg" alt="american coffee">
                        <p class="product-title">
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
                        <img src="./images/cost-rica-coffee.jpg" alt="cost rica coffee">
                        <p class="product-title">
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
                        <img src="./images/jamaican-coffee.jpg" alt="jamaican coffee">
                        <p class="product-title">
                            Jamaican Mountain
                        </p>
                        <p>
                            15.00
                        </p>
                        <button>
                            Add to Cart
                        </button>
                    </div>

                    <div class="product">
                        <img src="./images/house-coffee.jpg" alt="house coffee">
                        <p class="product-title">
                            House Coffee
                        </p>
                        <p>
                            25.00
                        </p>
                        <button>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </section>
        `;

        return mainContent;
    };
};