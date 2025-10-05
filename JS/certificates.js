import { certificates } from './constants/certificates.js';

document.addEventListener('DOMContentLoaded', () => {
    const sliderElement = document.querySelector('#certificates-slider');
    const sliderList = sliderElement.querySelector('.splide__list');
    if (!sliderList) return;

    certificates.forEach(({ src, alt }) => {
        const li = document.createElement('li');
        li.className = 'splide__slide';

        const img = document.createElement('img');
        img.src = src;
        img.alt = alt;

        li.appendChild(img);
        sliderList.appendChild(li);
    });

    // Initialize splide
    var splide = new Splide(sliderElement, {
        type: "slide",
        width: "100vw",
        arrows: true,
        height: "auto",
    });

    splide.mount();
});
