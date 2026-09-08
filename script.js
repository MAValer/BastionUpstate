(() => {
  'use strict';

  const CONTACT_EMAIL = 'michaelavaler08@gmail.com';

  const form = document.getElementById('quoteForm');
  if (!form) return;

  const statusEl = document.getElementById('formStatus');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const biz = document.getElementById('biz').value.trim();
    const reach = document.getElementById('reach').value.trim();
    const details = document.getElementById('details').value.trim();

    if (!biz || !reach) {
      statusEl.textContent = 'Please fill in your business name and how to reach you.';
      return;
    }

    const subject = `Quote request — ${biz}`;
    const body = [
      `Business: ${biz}`,
      `Reach me at: ${reach}`,
      '',
      details || '(no additional details provided)',
    ].join('\n');

    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    statusEl.textContent = 'Opening your email client…';
    window.location.href = mailtoUrl;
  });
})();
