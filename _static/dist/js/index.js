// Chromeのtransitionバグ対策用

window.onresize = function() {
    const windowSize = window.innerWidth;

    if(window.matchMedia("max-width: 400px").matches) {
    document.querySelector('.global-nav').style.transition = '.5s';
    document.querySelector('.global-header__button').style.transition = '.5s';
    } else {
        document.querySelector('.global-nav').style.transition = 'unset';
        document.querySelector('.global-header__button').style.transition = 'unset';
    }

};