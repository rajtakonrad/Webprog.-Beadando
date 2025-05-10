document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    const terms = document.getElementById('terms');

    let valid = true;

    [name, subject, message].forEach(field => {
      if (field.value.trim().length < 10) {
        field.classList.add('is-invalid');
        valid = false;
      } else {
        field.classList.remove('is-invalid');
      }
    });

    const emailPattern = /^[^@]+@[^@]+\.[a-z]{2,}$/i;
    if (!emailPattern.test(email.value.trim())) {
      email.classList.add('is-invalid');
      valid = false;
    } else {
      email.classList.remove('is-invalid');
    }

    if (!terms.checked) {
      terms.classList.add('is-invalid');
      valid = false;
    } else {
      terms.classList.remove('is-invalid');
    }

    if (valid) {
      alert('Ûrlap sikeresen elküldve!');
      form.reset();
    }
  });
});
