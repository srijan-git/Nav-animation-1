let circle = document.querySelector(".circle");
let frames = document.querySelectorAll(".frame");
const lerp = (x, y, a) => x * (1 - a) + y * a;

frames.forEach((frame) => {
  frame.addEventListener("mousemove", function (dets) {
    let dim = frame.getBoundingClientRect();
    let xStart = dim.x;
    let xEnd = dim.x + dim.width;
    let boxZoneZeroOrOne = gsap.utils.mapRange(
      xStart,
      xEnd,
      0,
      1,
      dets.clientX
    );
    gsap.to(circle, {
      scale: 8,
    });

    gsap.to(frame.children, {
      color: "#fff",
      duration: 0.4,
      y: "-5vw",
    });

    gsap.to(frame.children, {
      x: lerp(-50, 50, boxZoneZeroOrOne),
      duration: 0.3,
    });
  });

  frame.addEventListener("mouseleave", function (dets) {
    gsap.to(circle, {
      scale: 1,
    });
    gsap.to(frame.children, {
      color: "#000",
      duration: 0.4,
      y: 0,
    });
    gsap.to(frame.children, {
      x: 0,
      duration: 0.3,
    });
  });
});

window.addEventListener("mousemove", function (dets) {
  //   circle.style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
  gsap.to(circle, {
    x: dets.clientX,
    y: dets.clientY,
    duration: 0.2,
    ease: Expo,
  });
});
