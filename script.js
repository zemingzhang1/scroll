// init
var controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();
let timeline2 = new TimelineMax();


  VanillaTilt.init(document.querySelectorAll(".card"),{
          glare: true,
          reverse: true,
          "max-glare": 0.15
        });

timeline
  .to(".rock", 10, { y: -400 })
  .to(".girl", 10, { y: -200 }, "-=10")
  .fromTo(".bg1", { y: -50 }, { y: 0, duration: 10 }, "-=10")
  .to(".content", 10, { top: "0%" }, "-=10")
  .fromTo("#a", { x: "-200%" }, { x: "200%", duration: 21}, "-=10")
  .fromTo("#b", { y:-400, x: "150%" }, {y:450, x: "-150%", duration: 10 }, "-=10")
  .fromTo("#c", { x: "-250%" }, { x: "250%", duration: 22}, "-=10");

timeline2
  .to(".rock2", 10, { y: -300 })
  .to(".girl2", 10, { y: -200 }, "-=10")
  .fromTo(".bg12", { y: -50 }, { y: 0, duration: 10 }, "-=10")
  .to(".content2", 10, { top: "0%" }, "-=10");

let scene = new ScrollMagic.Scene({
  triggerElement: "#pt1",
  duration: "100%",
  triggerHook: 0,
})
  .setTween(timeline)
  .addTo(controller);

let scene2 = new ScrollMagic.Scene({
  triggerElement: "#pt2",
  duration: "100%",
  triggerHook: 0,
})
  .setTween(timeline2)
  .addTo(controller);