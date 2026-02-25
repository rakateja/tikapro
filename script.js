document.addEventListener('DOMContentLoaded', function() {
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
