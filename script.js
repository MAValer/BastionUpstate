(() => {
  'use strict';

  const FALLBACK_EMAIL = 'michaelavaler08@gmail.com';

  const form = document.getElementById('quoteForm');
  if (!form) return;

  const statusEl = document.getElementById('formStatus');
  const submitBtn = form.querySelector('button[type="submit"]');
  const submitLabel = submitBtn.textContent;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const biz = document.getElementById('biz').value.trim();
    const reach = document.getElementById('reach').value.trim();

    if (!biz || !reach) {
      statusEl.textContent = 'Please fill in your business name and how to reach you.';
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';
    statusEl.textContent = '';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        statusEl.textContent = "Thanks — I'll get back to you the same business day.";
        form.reset();
      } else {
        statusEl.textContent = `Something went wrong. Email ${FALLBACK_EMAIL} directly instead.`;
      }
    } catch (err) {
      statusEl.textContent = `Network error — email ${FALLBACK_EMAIL} directly instead.`;
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = submitLabel;
    }
  });
})();
