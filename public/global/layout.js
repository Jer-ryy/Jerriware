// Renders the shared navbar and footer. Links jump to the sections on the page.
(function () {
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];
  const socials = [
    { icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/just_jerryng/' },
    { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/jerry-ng-05ab18211/' },
    { icon: 'github', label: 'GitHub', href: 'https://github.com/Jer-ryy' },
    { icon: 'spotify', label: 'Spotify', href: 'https://open.spotify.com/user/21mee7ciijeqnl64lbfzmzzay?si=5cb0838959b34206' },
  ];

  const navLinks = sections.map((s) => `<a class="nav-link" href="#${s.id}">${s.label}</a>`).join('');

  // Phones get just the logo bar and scroll through the page; the section links show from lg up.
  document.body.insertAdjacentHTML('afterbegin', `
    <nav class="navbar fixed-top navbar-expand-lg site-nav">
      <div class="container">
        <a class="navbar-brand" href="#home"><img src="assets/logo-v4.png" class="nav-logo" alt="Jerry"></a>
        <div class="navbar-nav ms-auto d-none d-lg-flex">${navLinks}</div>
      </div>
    </nav>`);

  // Highlight the navbar link for the section crossing the middle of the screen.
  const linkFor = (id) => document.querySelector(`.site-nav .nav-link[href="#${id}"]`);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      document.querySelectorAll('.site-nav .nav-link').forEach((a) => {
        a.classList.remove('active');
        a.removeAttribute('aria-current');
      });
      const link = linkFor(entry.target.id);
      if (link) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'true');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach((s) => {
    const el = document.getElementById(s.id);
    if (el) observer.observe(el);
  });

  const footerLinks = sections.map((s) => `<a href="#${s.id}">${s.label}</a>`).join('');
  const socialLinks = socials
    .map((s) => `<a href="${s.href}" target="_blank" rel="noopener" aria-label="${s.label}"><i class="bi bi-${s.icon}"></i></a>`)
    .join('');

  document.body.insertAdjacentHTML('beforeend', `
    <footer class="site-footer">
      <div class="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
        <span class="mono small">&copy; ${new Date().getFullYear()} Jerry Ng</span>
        <div class="socials d-flex gap-3">${socialLinks}</div>
        <div class="d-flex flex-wrap justify-content-center gap-3 small">${footerLinks}</div>
      </div>
    </footer>`);
})();
