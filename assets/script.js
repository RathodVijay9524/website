
// Mobile nav toggle
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// Active link highlighting based on body[data-page]
const page = document.body.getAttribute('data-page');
document.querySelectorAll('.menu a').forEach(a => {
  if (a.dataset.nav === page) a.classList.add('active');
});

// Contact form: graceful fetch submit if action is Formspree-like
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', async (e) => {
    const action = form.getAttribute('action') || '';
    if (!action.startsWith('http')) return; // let browser handle mailto or default
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Sending...';
    try {
      const formData = new FormData(form);
      const res = await fetch(action, { method: 'POST', body: formData, headers: { 'Accept': 'application/json' } });
      if (res.ok) {
        alert('Thanks! Your message has been sent.');
        form.reset();
      } else {
        alert('Sorry, something went wrong. You can email me at hello@codewithvijay.online');
      }
    } catch (err) {
      alert('Network error. Please try again later.');
    } finally {
      btn.disabled = false;
      btn.textContent = 'Send';
    }
  });
}
