const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

var timeout;

const circle = (xscale, yscale) => {
  window.addEventListener("mousemove", (dets) => {
    // console.log(dets.clientX, dets.clientY)
    document.querySelector(
      "#minCircle"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
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
  clearTimeout(timeout);
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", (dets) => {
    xscale = gsap.utils.clamp(0.8, 1.8, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.8, dets.clientY - yprev);
    xprev = dets.clientX;
    yprev = dets.clientY;

    circle(xscale, yscale);

    timeout = setTimeout(() => {
      document.querySelector(
        "#minCircle"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
    }, 100);
  });
}

skewCircle();
circle();
pageAnimation();
