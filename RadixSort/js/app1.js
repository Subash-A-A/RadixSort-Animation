const play = document.querySelector('.play')
const reverseff = document.querySelector('.reverseff')
const playff = document.querySelector('.playff')
const pause = document.querySelector('.pause')


const timeline = gsap.timeline({defaults: {dration: 1}})
timeline
    .fromTo('.nums', {opactiy: 0, y:'-100%'}, {opactiy: 1, y:0, ease: 'elastic', stagger: 0.1})
    .to('.easein', {opacity: 1, y: 0, stagger: 0.2})
    .from('.rise', {opacity: 0, y: '-100%', stagger: 1})
    // 
    .to('.b100', {opacity: 0})
    .from('.n100', {opacity: 0})
    .to('.b4', {opacity: 0})
    .from('.n4', {opacity: 0})
    .to('.b8', {opacity: 0})
    .from('.n8', {opacity: 0})
    .to('.b11', {opacity: 0})
    .from('.n11', {opacity: 0})
    .to('.b12', {opacity: 0})
    .from('.n12', {opacity: 0})
    .to('.b17', {opacity: 0})
    .from('.n17', {opacity: 0})
    .to('.b123', {opacity: 0})
    .from('.n123', {opacity: 0})
    .to('.b125', {opacity: 0})
    .from('.n125', {opacity: 0})
    .to('.b42', {opacity: 0})
    .from('.n42', {opacity: 0})
    .to('.b43', {opacity: 0})
    .from('.n43', {opacity: 0})
    .to('.b56', {opacity: 0})
    .from('.n56', {opacity: 0})
    .to('.b58', {opacity: 0})
    .from('.n58', {opacity: 0})
    .to('.b89', {opacity: 0})
    .from('.n89', {opacity: 0})
    // 

// Action Listeners 
play.addEventListener('click', ()=>{
    timeline.timeScale(1);
    timeline.play();
})
reverseff.addEventListener('click', ()=>{
    timeline.timeScale(3);
    timeline.reverse();
})
playff.addEventListener('click', ()=>{
    timeline.timeScale(2);
    timeline.play();
})
pause.addEventListener('click', ()=>{
    console.log("pause")
    timeline.pause();
})