const typeWriter = document.querySelector('.typewrite');

new Typewriter(typeWriter, {
    strings: ["an AI Engineer.", "an Applied AI Student.", "a Software Engineer.", "an Automation Builder.", "a Full-Stack Developer."],
    autoStart: true,
    loop: true,
    pauseFor: 1600,
    deleteSpeed: 40,
    delay: 40,
});

const copyBtn = document.getElementById('copy-btn');

copyBtn.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText('jerryngsw2@gmail.com');
        copyBtn.textContent = 'copied!';
    } catch {
        copyBtn.textContent = 'jerryngsw2@gmail.com';
    }
    setTimeout(() => { copyBtn.textContent = 'copy the address'; }, 2000);
});
