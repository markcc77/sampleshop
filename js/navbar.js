window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        const navbarCollapsibleText = document.body.querySelector('#mainNavText');
        const navbarCollapsibleLogo = document.body.querySelector('#mainNavLogo');
        const navbarCollapsibleDate = document.body.querySelector('#mainNavDate');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
            navbarCollapsibleText.style.display = 'none'
            navbarCollapsibleLogo.style.display = 'none'
            navbarCollapsibleDate.innerHTML = ''
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
            navbarCollapsibleText.style.display = ''
            navbarCollapsibleLogo.style.display = 'inline-block'
            navbarCollapsibleDate.innerHTML = datehax()
        }

    };

    // Shrink the navbar 
    navbarShrink();
    $('#staticBackdrop').modal('show')

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    /* const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    }; */

    // Collapse responsive navbar when toggler is visible
    /* const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    }); */

});
