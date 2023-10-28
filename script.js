const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

const circle = () => {
  window.addEventListener("mousemove", (dets) => {
    // console.log(dets.clientX, dets.clientY)
    document.querySelector(
      "#minCircle"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
  });
};

function pageAnimation() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  });
  tl.to(".boundingEl", {
    y: 0,
    duration: 2,
    stagger: 0.2,
    delay: -1,
    ease: Expo.easeInOut,
  });
  tl.from("#hero--footer", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    delay: -1,
    ease: Expo.easeInOut,
  });
}

function skewCircle() {
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", (dets) => {
    xscale  = gsap.clamp(.8, 1.2, dets.clientX - xprev)
    //952 is the new clientX and 1052 is old clientX so first time when its move then its value was 1052 and after again when its move then its like
    //new val - old val = 952 - 1052
    //in previous direction  952 - 1052 = -100 and if and in forward direction 1052 - 1125 = +73
    yscale  = gsap.clamp(.8, 1.2, dets.clientY - yprev)
    // var xdiff = dets.clientX - xprev;
    xprev = dets.clientX; //in previous direction 0 = 1052 so, xprev = 1052 and in forward direction 0 = 1025
    // var ydiff = dets.clientY - yprev;
    yprev = dets.clientY;
    // console.log(xdiff);
  });
}

skewCircle();
circle();
pageAnimation();
