let currentIndex = 0;

function moveCarousel(direction) {
    const carouselTrack = document.querySelector('.carousel-track');
    const totalImages = carouselTrack.querySelectorAll('.carousel-item').length;
    const visibleImages = 3;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalImages - visibleImages;
    } else if (currentIndex > totalImages - visibleImages) {
        currentIndex = 0;
    }

    const offset = currentIndex * -33.33; // Move the track by one image width
    carouselTrack.style.transform = `translateX(${offset}%)`;
}

function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');

    modal.style.display = 'block';
    modalImg.src = imageSrc;
    captionText.innerHTML = imageSrc.substring(imageSrc.lastIndexOf('/') + 1);
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

function handleKeyPress(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
}

document.addEventListener('keydown', handleKeyPress);