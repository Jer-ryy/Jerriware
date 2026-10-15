const form = document.getElementById('contact-form');
const message = document.getElementById('message');
const charCount = document.getElementById('char-count');
const status = document.getElementById('form-status');

message.addEventListener('input', () => {
    charCount.textContent = `${message.value.length} / ${message.maxLength}`;
});

form.addEventListener('reset', () => {
    charCount.textContent = `0 / ${message.maxLength}`;
    status.textContent = '';
    form.querySelectorAll('.is-invalid').forEach((el) => el.classList.remove('is-invalid'));
});

// No mail backend yet, so this opens a pre-filled email in the visitor's mail app.
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let valid = true;
    form.querySelectorAll('[required]').forEach((el) => {
        const ok = el.checkValidity();
        el.classList.toggle('is-invalid', !ok);
        if (!ok) valid = false;
    });

    if (!valid) {
        status.className = 'mono small mt-3 mb-0 error';
        status.textContent = '> error: please fill in the highlighted fields.';
        return;
    }

    const data = new FormData(form);
    const name = `${data.get('firstName')} ${data.get('lastName')}`.trim();
    const subject = `Portfolio enquiry from ${name}`;
    const body = `${data.get('message')}\n\n${name}\n${data.get('email')}`;

    window.location.href = `mailto:jerryngsw2@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    status.className = 'mono small mt-3 mb-0 ok';
    status.textContent = '> opening your mail app...';
});
