export {themeIcon, themeSwitchButton};

const themeSwitchButton = document.querySelector('#theme');
const themeIcon = document.querySelector('#theme-icon');
const body = document.querySelector('body'); 
const footer = document.querySelector('footer');
const buttonTop = document.querySelector('.buttonTop');
const iconButtonTop = document.querySelector('.scrollToTop');

const onChangeTheme = function () {
    if(themeIcon.classList.contains('icon-dark')) {
        themeIcon.classList.replace('icon-dark', 'icon-light');
        body.classList.remove('theme-dark');
        footer.classList.remove('theme-dark');
        // themeSwitchButton.classList.remove('theme-dark');
        buttonTop.classList.remove('theme-dark');
        // iconButtonTop.classList.remove('theme-dark');
        // iconButtonTop.style.fill = 'black';


    } else {
        themeIcon.classList.replace('icon-light', 'icon-dark');
        body.classList.add('theme-dark');
        footer.classList.add('theme-dark');
        // themeSwitchButton.classList.add('theme-dark');
        // buttonTop.classList.add('theme-dark');
        iconButtonTop.style.fill = 'white';
    }
};

themeSwitchButton.addEventListener('click', onChangeTheme);
