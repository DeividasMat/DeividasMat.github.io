(() => {
  const form = document.querySelector('.contact-form');
  if (!form) return;
  const fields = [...form.querySelectorAll('.form-field input, .form-field textarea')];
  const button = form.querySelector('button[type="submit"]');
  const buttonLabel = button.querySelector('span');
  let attempted = false;
  function validate(field) {
    const error = document.getElementById(field.getAttribute('aria-describedby'));
    const value = field.value.trim();
    let message = '';
    if (!value) message = field.name === 'name' ? 'Please enter your name.' : field.name === 'email' ? 'Please enter your email address.' : 'Please write a short message.';
    else if (field.type === 'email' && field.validity.typeMismatch) message = 'Enter a valid email address.';
    else if (field.name === 'message' && value.length < 10) message = 'Please write at least 10 characters.';
    else if (!field.validity.valid) message = 'Please check this field.';
    error.textContent = message;
    error.hidden = !message;
    if (message) field.setAttribute('aria-invalid', 'true');
    else field.removeAttribute('aria-invalid');
    return !message;
  }
  fields.forEach(field => {
    field.addEventListener('blur', () => {
      if (attempted || field.value.trim()) validate(field);
    });
    field.addEventListener('input', () => {
      if (field.hasAttribute('aria-invalid')) validate(field);
    });
  });
  form.addEventListener('submit', event => {
    attempted = true;
    const invalid = fields.filter(field => !validate(field));
    if (invalid.length) {
      event.preventDefault();
      invalid[0].focus();
      return;
    }
    button.disabled = true;
    buttonLabel.textContent = 'Sending…';
  });
  window.addEventListener('pageshow', () => {
    button.disabled = false;
    buttonLabel.textContent = 'Send message';
  });
  // Native HTML validation remains available when JavaScript is unavailable.
  form.noValidate = true;
})();
