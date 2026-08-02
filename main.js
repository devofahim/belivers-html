document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mainNav = document.getElementById('mainNav');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');
    const mobileNavClose = document.getElementById('mobileNavClose');
    const mobileSearchToggle = document.getElementById('mobileSearchToggle');
    const searchBar = document.getElementById('searchBar');
    const stickyHeader = document.getElementById('stickyHeader');
    const headerWrapper = document.querySelector('.header-wrapper');
    const stickyMenuToggle = document.getElementById('stickyMenuToggle');

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

    if (stickyMenuToggle) {
        stickyMenuToggle.addEventListener('click', openMobileNav);
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

    // Sticky Header - show when scrolling up past header
    if (stickyHeader && headerWrapper) {
        let lastScrollY = window.scrollY;
        let ticking = false;

        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    const headerBottom = headerWrapper.offsetTop + headerWrapper.offsetHeight;
                    const currentScrollY = window.scrollY;

                    if (currentScrollY > headerBottom) {
                        if (currentScrollY < lastScrollY) {
                            stickyHeader.classList.add('show');
                        } else {
                            stickyHeader.classList.remove('show');
                        }
                    } else {
                        stickyHeader.classList.remove('show');
                    }

                    lastScrollY = currentScrollY;
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

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

    // Scroll to Top Button
    const scrollTopBtn = document.getElementById('scrollTop');
    if (scrollTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });

        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});