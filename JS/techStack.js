import { techStackWeb, techStackAI } from './constants/techStack.js';

document.addEventListener('DOMContentLoaded', () => {
    // Helper function to populate a slider
    const populateSlider = (sliderContainer, stack) => {
        const sliderList = sliderContainer.querySelector('.splide__list');
        if (!sliderList) return;

        stack.forEach(({ src, alt }) => {
            const li = document.createElement('li');
            li.className = 'splide__slide';

            const img = document.createElement('img');
            img.src = src;
            img.alt = alt;

            li.appendChild(img);
            sliderList.appendChild(li);
        });
    };

    // Populate and initialize web slider

    const techStackWebSlider = document.querySelector('#tech-stack-web-slider');
    if (!techStackWebSlider) return;

    populateSlider(techStackWebSlider, techStackWeb);

    // Initialize Splide sliders
    const splideWeb = new Splide(techStackWebSlider, {
        arrows: false,
        type: 'loop',
        drag: 'free',
        focus: 'center',
        perPage: 3,
        autoScroll: { speed: 0.5 },
    });

    const techStackAISlider = document.querySelector('#tech-stack-ai-slider');
    if (!techStackAISlider) return;

    // Populate both sliders
    populateSlider(techStackAISlider, techStackAI);

    const splideAI = new Splide(techStackAISlider, {
        arrows: false,
        type: 'loop',
        drag: 'free',
        focus: 'center',
        perPage: 3,
        autoScroll: { speed: 0.4 },
    });

    splideWeb.mount(window.splide.Extensions);
    splideAI.mount(window.splide.Extensions);
});
