import aboutCSS from './about.css';

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