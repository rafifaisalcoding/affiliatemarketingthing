// Basic interactivity for the demo template
document.addEventListener('DOMContentLoaded', function(){
  // Update year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Simple mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.querySelector('.nav');
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    if (nav.style.display === 'block') nav.style.display = '';
    else nav.style.display = 'block';
  });

  // Form handling (demo only — does not send)
  const form = document.getElementById('contact-form');
  const status = document.getElementById('status');
  const clearBtn = document.getElementById('clear');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    status.textContent = 'Preparing message...';

    const data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim()
    };

    // Basic client-side validation
    if (!data.name || !data.email) {
      status.textContent = 'Please provide your name and email.';
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      status.textContent = 'Please provide a valid email address.';
      return;
    }

    // Simulate email generation (client-side)
    const generated = `To: ${data.email}\nSubject: Hello ${data.name}\n\n${data.message || '(No message)'}`;
    // Show preview (safe testing)
    status.textContent = 'Message generated (demo). Preview printed to console.';
    console.log('--- GENERATED MESSAGE (DEMO) ---\n' + generated);
    // Reset after short delay
    setTimeout(() => {
      status.textContent = 'Ready. (This is a demo — no email was sent.)';
      form.reset();
    }, 900);
  });

  clearBtn.addEventListener('click', () => {
    form.reset();
    status.textContent = '';
  });
});
