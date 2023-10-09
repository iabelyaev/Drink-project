const menuBurger = document.querySelector('.menu__burger');
const list = document.querySelector('.menu__list');

const initMenu = () => {
  menuBurger.addEventListener('click', () => {
    let expanded = menuBurger.getAttribute('aria-expanded') === 'true';
    menuBurger.setAttribute('aria-expanded', !expanded);
    expanded ? menuBurger.setAttribute('aria-label', 'Открыть меню') : menuBurger.setAttribute('aria-label', 'Закрыть меню')
    list.classList.toggle('menu__list--opened');
    menuBurger.classList.toggle('menu__burger--opened');
  })
}

export default initMenu;
