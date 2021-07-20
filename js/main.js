// === Sliders ===

$(document).ready(function(){
    $('.positions-slider').slick({
        arrows: false,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1400,
                settings:{
                    centerMode: true,
                    slidesToShow: 2,
                }
            },
            {
              breakpoint: 1100,
              settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '180px',
                    slidesToShow: 1,
              }  
            },
            {
                breakpoint: 850,
                settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '30px',
                slidesToShow: 1
              }
            }
        ]
    });
});

$(document).ready(function(){
    $('.reviews-cards').slick({
        centerMode: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1400,
                settings:{
                    centerMode: true,
                    slidesToShow: 2,
                }
            },
            {
              breakpoint: 1100,
              settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '180px',
                    slidesToShow: 1,
              }  
            },
            {
                breakpoint: 850,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
        ]
    });
});

$(document).ready(function(){
    $('.photo-slider').slick({
        centerMode: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        responsive: [
            {
                breakpoint: 1400,
                settings:{
                    centerMode: true,
                    slidesToShow: 2,
                }
            },
            {
              breakpoint: 1100,
              settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '180px',
                    slidesToShow: 1,
              }  
            },
            {
              breakpoint: 850,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
        ]
    });
});

// === /Sliders ===

// === Scrolling ===

const worksScroll = document.querySelector('.works-scroll-link');
const sectionPositions = document.querySelector('.section-positions');
const aboutScroll = document.querySelector('.about-scroll-us-link');
const sectionAboutUs = document.querySelector('.section-about-us');
const reviewsScroll = document.querySelector('.reviews-scroll-link');
const sectionReviews = document.querySelector('.section-reviews');
const photoScroll = document.querySelector('.photo-scroll-link');
const sectionPhoto = document.querySelector('.section-photo');

photoScroll.addEventListener('click', () =>{
    sectionPhoto.scrollIntoView({
        behavior: "smooth",
    });
});

worksScroll.addEventListener('click', () =>{
    sectionPositions.scrollIntoView({
        behavior: "smooth",
    });
});

aboutScroll.addEventListener('click', () =>{
    sectionAboutUs.scrollIntoView({
        behavior: "smooth",
    });
});

reviewsScroll.addEventListener('click', ()=>{
    sectionReviews.scrollIntoView({
        behavior: "smooth",
    });
});

// === /Scrolling ===
