let currentIndex = 0;
let currentProjectIndex = 0;

function moveCarousel(direction) {
    const carouselTrack = document.querySelector('.carousel-track');
    const totalImages = carouselTrack.querySelectorAll('.carousel-item').length;
    
    const visibleImages = window.innerWidth <= 768 ? 1 : 3;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalImages - visibleImages;
    } else if (currentIndex > totalImages - visibleImages) {
        currentIndex = 0;
    }

    const offset = currentIndex * -100 / visibleImages; // Move the track by one image width
    carouselTrack.style.transform = `translateX(${offset}%)`;
}


function moveProjectCarousel(direction) {
    const ProjectTrack = document.querySelector('.carousel-project-track');
    const totalImages = ProjectTrack.querySelectorAll('.carousel-item').length;
    const visibleImages = window.innerWidth <= 768 ? 1 : 3;

    currentProjectIndex += direction;

    if (currentProjectIndex < 0) {
        currentProjectIndex = totalImages - visibleImages;
    } else if (currentProjectIndex > totalImages - visibleImages) {
        currentProjectIndex = 0;
    }

    const offset = currentProjectIndex * -100 / visibleImages; // Move the track by one image width
    ProjectTrack.style.transform = `translateX(${offset}%)`;
}


function openModal(imageSrc, event = null){
    if (event) {
    event.preventDefault();
}

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