const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

const circle = () =>{
    window.addEventListener('mousemove', (dets) => {
        // console.log(dets.clientX, dets.clientY)
        document.querySelector("#minCircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`
    })
}

function pageAnimation() {
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    });
    tl.to(".boundingEl", {
        y: 0,
        duration: 2,
        stagger:.2,
        delay:-1,
        ease: Expo.easeInOut
    });
    tl.from("#hero--footer", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        delay:-1,
        ease: Expo.easeInOut
    });
}



circle();
pageAnimation();