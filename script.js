function cursorEffect(){
    var page1Content = document.getElementById("page1-content");
    var cursor = document.getElementById("cursor");

    page1Content.addEventListener("mousemove", function(e){
        gsap.to(cursor, {
            x: e.x,
            y: e.y
        })
    })

    page1Content.addEventListener("mouseenter", function(){
        gsap.to(cursor, {
            scale: 1,
            opacity: 1
        })
    })

    page1Content.addEventListener("mouseleave", function(){
        gsap.to(cursor, {
            scale: 0,
            opacity: 0,
        })
    })



    const lenis = new Lenis();

    lenis.on('scroll', ScrollTrigger.update);


    gsap.ticker.add((time) => {
    lenis.raf(time * 1000); 
    });


    gsap.ticker.lagSmoothing(0);
}

cursorEffect()

function swipper(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
          },
      });
}

swipper()

var t1 = gsap.timeline()

t1.from("#loader h3", {
    x: 40,
    opacity: 0,
    duration: 1,
    // ease: "power4.out",
    stagger: 0.1,
})
t1.to("#loader h3", {
    x: -40,
    opacity: 0,
    duration: 1,
    // ease: "power4.out",
    stagger: -0.1,
})
t1.to("#loader", {
    opacity:0,
})
t1.from("#page1-content span", {
    y: 100,
    opacity: 0,
    duration: 0.5,
    // ease: "power4.out",
    stagger: 0.1,
    delay: -0.5
})
t1.to("#loader", {
    display:"none"
})