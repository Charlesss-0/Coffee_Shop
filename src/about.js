import aboutCSS from './about.css';
import './images/about-background.jpg'

export default class AboutPage {
    render() {
        const mainContent = document.createElement('main');
        mainContent.classList.add('about-main-content');
        mainContent.innerHTML = `
            <section class="about-main-section"></section>
        `;
        
        return mainContent;
    };
};