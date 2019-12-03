var home;
if (home = document.querySelector('.home.home .navbar')) {
    home.classList.remove('nav-show')
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            home.classList.add('nav-show')
        } else {
            home.classList.remove('nav-show')
        }
    })
}