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
circle();