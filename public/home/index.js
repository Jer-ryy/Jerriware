const typeWriter = document.querySelector('.typewrite');

new Typewriter(typeWriter, {
    strings: ["an AI Engineer.", "an Applied AI Student.", "a Software Engineer.", "an Automation Builder.", "a Full-Stack Developer."],
    autoStart: true,
    loop: true,
    pauseFor: 1600,
    deleteSpeed: 40,
    delay: 40,
});
