let dayNight = document.querySelector('.dayNight');
let banner = document.querySelector('.full');

// console.log(banner);

dayNight.addEventListener('click', () => {
    banner.classList.toggle("night");
});

let typingEffect = new Typed("#text",{
    strings : ["Full-Stack Developer","Python Developer", "Software Developer", "Django Developer"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 60,
    backDelay : 2000,
    smartBackspace : true,
    startDelay : 1000,
})