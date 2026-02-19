document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.hero-img');
    let currentIndex = 0;

    function rotateImages() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    setInterval(rotateImages, 5000); // Change image every 5 seconds
}); 