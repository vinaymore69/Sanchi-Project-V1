// // Initialize Lenis
// const lenis = new Lenis();

// // Use requestAnimationFrame to continuously update the scroll
// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger);
document.querySelectorAll(".elem").forEach(elem => { 
    let image = elem.querySelector("img");
    let tl =gsap.timeline()
    
    let xTransform = gsap.utils.random(-100,100);

    tl
        .set(image,{
            transformOrigin: `${xTransform < 0 ? 0 : '100%'}`,
        },"start")
    
        .to(image,{
            scale: 0,
            ease: "none",
            scrollTrigger:{
                trigger: image,
                start: "top top",
                end: "bottom top",
                scrub: true,
            }
        })
        .to(elem,{
            xPercent: xTransform,
            ease: "none",   
            scrollTrigger:{
                trigger: image,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            }
        }

        )
});



document.addEventListener("DOMContentLoaded", function () {
    var grid = document.querySelector('.masonry-gallery');
    var msnry = new Masonry(grid, {
        itemSelector: 'img',
        columnWidth: '.grid-sizer',
        gutter: 10,
        fitWidth: true
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".masonry img");
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    document.body.appendChild(lightbox);

    images.forEach(image => {
        image.addEventListener("click", function () {
            lightbox.classList.add("active");
            const img = document.createElement("img");
            img.src = image.src;
            lightbox.innerHTML = ""; // Clear previous images
            lightbox.appendChild(img);
        });
    });

    lightbox.addEventListener("click", function () {
        lightbox.classList.remove("active");
    });
});



//



