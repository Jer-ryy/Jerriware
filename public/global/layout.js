// Renders the shared navbar and footer. Pages set <body data-page="home|resume|projects|contact">.
(function () {
  const pages = [
    { id: 'home', label: 'Home', href: '../home/' },
    { id: 'resume', label: 'Resume', href: '../resume/' },
    { id: 'projects', label: 'Projects', href: '../projects/' },
    { id: 'contact', label: 'Contact', href: '../contact/' },
  ];
  const socials = [
    { icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/just_jerryng/' },
    { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/jerry-ng-05ab18211/' },
    { icon: 'github', label: 'GitHub', href: 'https://github.com/Jer-ryy' },
    { icon: 'spotify', label: 'Spotify', href: 'https://open.spotify.com/user/21mee7ciijeqnl64lbfzmzzay?si=5cb0838959b34206' },
  ];
  const current = document.body.dataset.page;

  const navLinks = pages
    .map((p) => `<a class="nav-link${p.id === current ? ' active' : ''}"${p.id === current ? ' aria-current="page"' : ''} href="${p.href}">${p.label}</a>`)
    .join('');

  document.body.insertAdjacentHTML('afterbegin', `
    <nav class="navbar fixed-top navbar-expand-lg site-nav">
      <div class="container">
        <a class="navbar-brand" href="../home/"><img src="../assets/logo-v4.png" class="nav-logo" alt="Jerry"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#siteNav"
          aria-controls="siteNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="siteNav">
          <div class="navbar-nav ms-auto">${navLinks}</div>
        </div>
      </div>
    </nav>`);

  const footerLinks = pages.map((p) => `<a href="${p.href}">${p.label}</a>`).join('');
  const socialLinks = socials
    .map((s) => `<a href="${s.href}" target="_blank" rel="noopener" aria-label="${s.label}"><i class="bi bi-${s.icon}"></i></a>`)
    .join('');

  document.body.insertAdjacentHTML('beforeend', `
    <footer class="site-footer">
      <div class="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
        <span class="mono small">&copy; ${new Date().getFullYear()} Jerry Ng</span>
        <div class="socials d-flex gap-3">${socialLinks}</div>
        <div class="d-flex gap-3 small">${footerLinks}</div>
      </div>
    </footer>`);
})();
