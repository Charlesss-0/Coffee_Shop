import aboutCSS from './about.css';
import './images/about-background.jpg'
import './images/coffee-types.jpg'

export default class AboutPage {
    render() {
        const mainContent = document.createElement('main');
        mainContent.classList.add('about-main-content');
        mainContent.innerHTML = `
            <section class="about-main-section">
                <div class="opening-hours">
                    <h1>
                        Opening Hours
                    </h1>
                
                    <ul>
                        <li>
                            Monday <span>7:00 AM 9:00 PM</span>
                        </li>

                        <li>
                            Tuesday <span>7:00 AM 9:00 PM</span>
                        </li>

                        <li>
                            Wednesday <span>7:00 AM 9:00 PM</span>
                        </li>

                        <li>
                            Thursday <span>7:00 AM 9:00 PM</span>
                        </li>

                        <li>
                            Friday <span>7:00 AM 9:00 PM</span>
                        </li>

                        <li>
                            Saturday <span>7:00 AM 9:00 PM</span>
                        </li>

                        <li>
                            Sunday <span>9:00 AM 6:00 PM</span>
                        </li>
                    </ul>
                </div>
            </section>

            <section class="dis-sec">
                <div>
                    <h1>
                        Our Story
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Etiam erat velit scelerisque in dictum non consectetur. Et tortor consequat id porta nibh venenatis cras.
                        Tristique nulla aliquet enim tortor. Ornare aenean euismod elementum nisi.
                        Integer vitae justo eget magna fermentum iaculis. Pellentesque habitant morbi tristique senectus et netus et malesuada.
                        Aliquet eget sit amet tellus cras. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Lacus laoreet non curabitur gravida arcu.
                        Commodo viverra maecenas accumsan lacus vel. Egestas sed tempus urna et pharetra pharetra. Eu feugiat pretium nibh ipsum consequat.
                        Eget mi proin sed libero. Consectetur a erat nam at lectus urna duis convallis convallis. Eget lorem dolor sed viverra. Ornare arcu dui vivamus arcu.
                        Tellus pellentesque eu tincidunt tortor aliquam.
                    </p>
                </div>
            </section>
        `;
        
        return mainContent;
    };
};