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


function changeLanguage(language) {
    const elementsToTranslate = document.querySelectorAll('[data-lang]');
    
    elementsToTranslate.forEach(element => {
        element.innerHTML = translations[language][element.getAttribute('data-lang')];
    });

}

let initial = true;

function toggleLanguage() {
    const isChecked = document.getElementById('language-toggle').checked;
    const language = isChecked ? 'en' : 'ru';
  
    // Saving initial text
    if (initial)
    {
	translations['ru'] = {};

	document.querySelectorAll('[data-lang]').forEach(element => {
		const lang = element.getAttribute('data-lang');

    		translations['ru'][lang] = element.innerHTML;
        });
	
        initial = false;
    }

    changeLanguage(language);
    

    const sliderBefore = document.querySelector('.slider:before');
    const slider = document.querySelector('.slider');

    if (isChecked ) {
        slider.style.setProperty('--slider-content', '"EN"');
    } 
    else {
        slider.style.setProperty('--slider-content', '"RU"');
    }

}

let translations = {
    'en': {
        'name': 'Nikita Lev',
        'contact': 'Contact',
        'about': 'About Me',
        'city': 'Krasnoyarsk',
        
	'achievement1': '🏆 Tinkoff Scholar 2023 in "Analytics"',
        'achievement2': '🚀 Experience of speaking at 4 scientific conferences in 2023-2024 with winning prizes',
        'achievement3': '👨‍🎓 Bachelor of Mathematics, received additional education in ML and data analysis from Yandex',
        'achievement4': '⌛ 5-year experience of participation in programming contests (C++)',
        'hobby': '🏓 Passionate about table tennis',
        'experience': 'Work Experience',
        
	'job1-period': '07.2023 — 08.2023<br/>2 months',
        'job1-company': 'LLC "Solution Factory"',
        'job1-location': 'Krasnoyarsk, <a href="http://solutionfactory.ru">solutionfactory.ru</a>, software development',
        'job1-responsibility1': 'Developed machine learning modules for generating new insights in the maxbonus.ru loyalty program',
        'job1-responsibility2': 'Used classical, boosting, and neural network ML models on customer and receipt data from ClickHouse',
        'job1-achievements': 'Results and Achievements',
        'job1-result-intro': 'Developed 6 ML modules managed via Rest API:',
        'job1-result1': 'Probability of customer churn',
        'job1-result2': 'Customer clustering',
        'job1-result3': 'Search for similar clients',
        'job1-result4': 'Forecasting a basket of goods',
        'job1-result5': 'Search for the most interesting products',
        'job1-result6': 'Forecasting the date of purchase',
	
	'job2-period': '07.2021 — 08.2021 <br/> 2 months',
	'job2-company': 'MFC Polyus',
	'job2-position': 'Test Automation Specialist',
        'job2-location': 'Krasnoyarsk, <a href="https://polyus.com/ru/"> polyus.com</a>, software development',
        'job2-responsibility1': 'Implemented Selenium WebDriver in C# for test automation',
        'job2-responsibility2': 'Created BDD test scenarios using Cucumber',
        'job2-result-intro': 'Automated testing of the electronic document management system, which avoided manual testing',

	'education': 'Education',

	'masters-degree': "Master's degree: 2024-2026",
	'university-masters': 'School of space and information technology of Siberian Federal University <br/> Applied mathematics and computer science',

	'bachelours-degree': "Bachelour's degree: 2020-2024 <a href=\"#\" style=\"text-decoration: none\" onclick=\"openModal('diplomas/Bachelor.jpg', event)\">📜</a> ",
	'university-bachelours': 'School of mathematics and computer science of Siberian Federal University <br/> Mathematics and computer sciences',
        'diploma2': 'Diploma:',
	'diploma2-theme': 'Forecasting the concentration of PM 2.5 in the atmosphere of Krasnoyarsk using time series models and ensemble machine learning models.',
        
'add-education-intro': 'Additional education',
        'add-education1': 'Siberian Federal University, course «Programmer»<a href = "#" style="text-decoration: none" onclick="openModal(\'diplomas/Programmer.jpg\', event)"> 📜</a>',
        'add-education2': 'Yandex & SFU, course «Machine Learning and data analysis».</br> Qualification work — Visual analysis using interactive maps in the problem of taxi demand forecasting (time series forecasting).',

	'skills' : 'Skills',
	'science' : 'Science',
	'conference1' : 'Participation in the XX International Scientific Conference of Students, Postgraduates and Young Scientists "Prospect Svobodny - 2024" (1st place)',
	'conference2' : 'Participation in the open conference of young scientists on mathematical modeling, information technology and fundamental mathematics of the Institute of Numerical Mathematics SB RAS (1st place)',
	'publication1' : 'Publication of <a href="https://doi.org/10.25743/SSTS.2023.68.60.050">article</a> "Methods for forecasting time series in the problem of analyzing the level of concentration of pollutants in the atmosphere of Krasnoyarsk". Safety and monitoring of natural and man-made systems',
	'conference3' : 'Participation in the XX International Scientific Conference of Students, Postgraduates and Young Scientists "Prospect Svobodny - 2023" (laureate)',
	
	'projects' : 'Projects',
	'courses' : 'Courses and certificates',
	'cert0' : '2023 — Tinkoff Scholarship',
	'cert0-description' : "Studied basic and master's courses on Machine Learning and Deep Learning from Tinkoff Education",
	'cert1' : '<a href="https://www.coursera.org/account/accomplishments/certificate/6FMYJVWFVDEH">Mathematics and Python for data analysis</a>',
	'cert3' : '<a href="https://www.coursera.org/account/accomplishments/certificate/3YAMVR5AVGLR">Training on labeled data</a>',
	'cert4' : 'Ingosstrakh',
	'cert5' : '<a href="https://www.coursera.org/account/accomplishments/certificate/HLU7QYJK2VS5">Finding structure in data</a>',
	'cert6' : '<a href="https://www.coursera.org/account/accomplishments/certificate/4BTD9RHF43MQ">Drawing conclusions from data</a>',
	'cert7' : '<a href="https://www.coursera.org/account/accomplishments/certificate/A5H3NR3MWPTJ">Applied tasks of data analysis</a>',

	'rights': '&copy; 2024 Nikita Lev. All rights reserved.'
    }
};



document.addEventListener('keydown', handleKeyPress);