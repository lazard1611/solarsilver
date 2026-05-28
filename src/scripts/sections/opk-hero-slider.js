import '../../styles/sections/opk-hero-slider.scss';
import Swiper from "swiper";
import { Navigation, EffectFade, Autoplay } from 'swiper/modules';

const SELECTORS = {
    section: '.js-opk-hero-section',    
    slider: '.js-opk-hero-slider',    
    btnNext: '.js-opk-hero-next',    
    btnPrev: '.js-opk-hero-prev'     
}

const initSwiper = () => {
    const $sections = document.querySelectorAll(SELECTORS.section);
    if (!$sections.length) return;

    const avtoplayTime = window.slider_autoplay;
    const modules = [Navigation, EffectFade];
    if (avtoplayTime > 0) modules.push(Autoplay);

    $sections.forEach(($section) => {
        const $slider = $section.querySelector(SELECTORS.slider);
        if (!$slider) return;       

        const $btnNext = $section.querySelector(SELECTORS.btnNext); 
        const $btnPrev = $section.querySelector(SELECTORS.btnPrev);         

        const slider = new Swiper( $slider, {                
                modules: modules,
                loop: true,
                slidesPerView: 1,                                
                spaceBetween: 16,
                autoHeight: true,
                navigation: {
                    nextEl: $btnNext,
                    prevEl: $btnPrev,
                },
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
                breakpoints: {
                    768: {
                        autoHeight: false,
                    }
                }
            }
        )

        if (avtoplayTime !== '0') { 
            slider.modules.push('Autoplay');     
            slider.params.autoplay = {
                delay: avtoplayTime            
            }    
            slider.autoplay.start();
        }
    })    
}

document.addEventListener('DOMContentLoaded', () => {
    initSwiper();
});