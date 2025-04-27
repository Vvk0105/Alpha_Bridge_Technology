var page1Content = document.getElementById("page1-content");
var cursor = document.getElementById("cursor");

page1Content.addEventListener("mousemove", function(e){
    gsap.to(cursor, {
        x: e.x,
        y: e.y
    })
})

page1Content.addEventListener("mouseenter", function(){

})

page1Content.addEventListener("mouseleave", function(){
    gsap.to(cursor, {
        scale: 0
    })
})



const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);


gsap.ticker.add((time) => {
  lenis.raf(time * 1000); 
});


gsap.ticker.lagSmoothing(0);