import menuCSS from './menu.css';

export default class MenuPage {
    render() {
        const mainContent = document.createElement('main');
        mainContent.classList.add('menu-main-content');
        mainContent.innerHTML = `
            <section class="menu-main-section"></section>
        `;

        return mainContent;
    };
};