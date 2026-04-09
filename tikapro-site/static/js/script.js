document.addEventListener('DOMContentLoaded', function() {
    var hamburgerBtn = document.getElementById('hamburger-btn');
    var mobileMenu = document.getElementById('mobile-menu');

    function closeMobileMenu() {
        mobileMenu.classList.remove('open');
        hamburgerBtn.classList.remove('open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
    }

    function toggleMenu() {
        var isOpen = mobileMenu.classList.toggle('open');
        hamburgerBtn.classList.toggle('open', isOpen);
        hamburgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    }

    if (hamburgerBtn && mobileMenu) {
        var tapped = false;

        // touchend for iOS Safari — fires before the synthetic click
        hamburgerBtn.addEventListener('touchend', function(e) {
            e.preventDefault();
            tapped = true;
            toggleMenu();
            // reset flag after click would have fired
            setTimeout(function() { tapped = false; }, 300);
        });

        // click for desktop and Chrome iOS (which fires click even after touchend)
        hamburgerBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            if (!tapped) {
                toggleMenu();
            }
        });

        // Close when tapping a link inside the menu
        mobileMenu.addEventListener('click', function(e) {
            if (e.target.closest('a')) {
                closeMobileMenu();
            }
        });

        // iOS Safari doesn't fire 'click' on document for non-interactive elements,
        // so use touchstart for outside-tap detection
        document.addEventListener('touchstart', function(e) {
            if (!hamburgerBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                closeMobileMenu();
            }
        });

        // Fallback outside-click for desktop
        document.addEventListener('click', function(e) {
            if (!hamburgerBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                closeMobileMenu();
            }
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                var offset = document.querySelector('.navbar').offsetHeight + 16;
                window.scrollTo({
                    top: target.getBoundingClientRect().top + window.pageYOffset - offset,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Image slideshows
    document.querySelectorAll('.image-slideshow').forEach(function(slideshow) {
        var images = slideshow.querySelectorAll('.slide-wrapper img');
        var dots = slideshow.querySelectorAll('.slide-dot');
        var currentIndex = 0;

        function showSlide(index) {
            images[currentIndex].classList.remove('active');
            dots[currentIndex].classList.remove('active');
            currentIndex = index;
            images[currentIndex].classList.add('active');
            dots[currentIndex].classList.add('active');
        }

        dots.forEach(function(dot) {
            dot.addEventListener('click', function() {
                showSlide(parseInt(this.dataset.index));
            });
        });

        setInterval(function() {
            showSlide((currentIndex + 1) % images.length);
        }, 4000);
    });
});
