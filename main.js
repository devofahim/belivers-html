document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mainNav = document.getElementById('mainNav');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');
    const mobileNavClose = document.getElementById('mobileNavClose');
    const mobileSearchToggle = document.getElementById('mobileSearchToggle');
    const searchBar = document.getElementById('searchBar');

    function openMobileNav() {
        mainNav.classList.add('active');
        mobileNavOverlay.classList.add('active');
        document.body.classList.add('no-scroll');
    }

    function closeMobileNav() {
        mainNav.classList.remove('active');
        mobileNavOverlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', openMobileNav);
    }

    if (mobileNavClose) {
        mobileNavClose.addEventListener('click', closeMobileNav);
    }

    if (mobileNavOverlay) {
        mobileNavOverlay.addEventListener('click', closeMobileNav);
    }

    if (mobileSearchToggle && searchBar) {
        mobileSearchToggle.addEventListener('click', function() {
            searchBar.classList.toggle('active');
        });
    }

    const dropdownItems = document.querySelectorAll('.mobile-nav-item.has-dropdown > a');
    dropdownItems.forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            item.parentElement.classList.toggle('open');
        });
    });

    // Hero Swiper initialization
    const heroSwiper = document.querySelector('.hero-swiper');
    if (heroSwiper) {
        new Swiper('.hero-swiper', {
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            speed: 800,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            pagination: {
                el: '.hero-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.hero-nav-next',
                prevEl: '.hero-nav-prev',
            },
        });
    }
});