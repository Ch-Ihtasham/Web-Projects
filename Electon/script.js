// const slides = document.querySelectorAll(".rectangle")
// slides.forEach(
//     (rectangle, index) => {
//         rectangle.style.left = `${index * 100}%`
//     }
// )

// const goPrev = () => {
//     slides.forEach(
//         (rectangle) => {
//             rectangle.style.transform = `translateX(0%)`
//         }
//     )
// }
// const goCenter = () => {
//     slides.forEach(
//         (rectangle) => {
//             rectangle.style.transform = `translateX(-100%)`
//         }
//     )
// }
// const goNext = () => {
//     slides.forEach(
//         (rectangle) => {
//             rectangle.style.transform = `translateX(-200%)`
//         }
//     )
// }

// const dots = document.querySelectorAll(".dot")
// let previousClickedCircle = dots[0];
// previousClickedCircle.style.backgroundColor = '#EDA415';
// dots.forEach(dot => {
//     dot.addEventListener('click', () => {

//         if (previousClickedCircle) {
//             previousClickedCircle.style.backgroundColor = '';
//         }
//         dot.style.backgroundColor = '#EDA415';

//         previousClickedCircle = dot;
//     });
// });

// SLIDER
const slides = document.querySelectorAll(".rectangle");
const dots = document.querySelectorAll(".dot");
let currentSlideIndex = 0;
let previousClickedCircle = dots[0];
previousClickedCircle.style.backgroundColor = '#EDA415';

slides.forEach((rectangle, index) => {
    rectangle.style.left = `${index * 100}%`;
});

const goPrev = () => {
    slides.forEach((rectangle) => {
        rectangle.style.transform = `translateX(0%)`;
    });
};

const goCenter = () => {
    slides.forEach((rectangle) => {
        rectangle.style.transform = `translateX(-100%)`;
    });
};

const goNext = () => {
    slides.forEach((rectangle) => {
        rectangle.style.transform = `translateX(-200%)`;
    });
};

const updateSlider = () => {
    slides.forEach((rectangle, index) => {
        rectangle.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    });

    if (previousClickedCircle) {
        previousClickedCircle.style.backgroundColor = '';
    }
    dots[currentSlideIndex].style.backgroundColor = '#EDA415';
    previousClickedCircle = dots[currentSlideIndex];
};

const startAutoSlide = () => {
    setTimeout(() => {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        updateSlider();
        setTimeout(() => {
            startAutoSlide();
        }, 4000);
    }, 4000);
};


dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        if (previousClickedCircle) {
            previousClickedCircle.style.backgroundColor = '';
        }
        dot.style.backgroundColor = '#EDA415';
        previousClickedCircle = dot;

        currentSlideIndex = index;
        updateSlider();
    });
});
startAutoSlide();
// SIDE BAR
var navLinks = document.getElementById("navLinks");
var showlinks = document.getElementById("show");

function hide() {
    navLinks.style.right = "-200px";
    navmenu.style.overflow="hidden !important";

}
function show() {
    navLinks.style.right = "-8%";
    // showlinks.style.overflow= "auto";
    showlinks.style.position= "static";


}
//  mini slider
const mini = document.querySelectorAll(".main-rectangle2");
mini.forEach((mainRectangle2, index) => {
    mainRectangle2.style.left = `${index * 100}%`;
});
const left = () => {
    mini.forEach((mainRectangle2) => {
        mainRectangle2.style.transform = `translateX(0%)`;
    });
};

const right = () => {
    mini.forEach((mainRectangle2) => {
        mainRectangle2.style.transform = `translateX(-100%)`;
    });
};
