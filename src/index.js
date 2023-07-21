import styles from './styles.css';

const home = document.getElementById('home-content');
const menu = document.getElementById('menu-content');
const about = document.getElementById('about-content');
const contentEl = document.getElementById('content');

function renderHome() {
    import('./home.js').then(module => {
        home.classList.add('active-button');
        menu.classList.remove('active-button');
        about.classList.remove('active-button');    
        contentEl.innerHTML = '';
        const HomePage = module.default;
        const homepage = new HomePage();
        contentEl.appendChild(homepage.render());
    });
}; renderHome();
home.addEventListener('click', renderHome)

function renderMenu() {
    import('./menu.js').then(module => {
        menu.classList.add('active-button');
        home.classList.remove('active-button');
        about.classList.remove('active-button');    
        contentEl.innerHTML = '';
        const MenuPage = module.default;
        const menupage = new MenuPage();
        contentEl.appendChild(menupage.render());
    });
};
menu.addEventListener('click', renderMenu);

function renderAbout() {
    import('./about.js').then(module => {
        about.classList.add('active-button');
        home.classList.remove('active-button');
        menu.classList.remove('active-button');    
        contentEl.innerHTML = '';
        const AboutPage = module.default;
        const aboutpage = new AboutPage();
        contentEl.appendChild(aboutpage.render());
    });
}
about.addEventListener('click', renderAbout)
