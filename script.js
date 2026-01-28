const form = document.querySelector('.signup-form');
const successMessage = document.getElementById('success');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const button = form.querySelector('button');

  button.disabled = true;
  button.textContent = '...';

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      form.reset();
      successMessage.hidden = false;
      form.style.display = 'none';
    } else {
      throw new Error('Submission failed');
    }
  } catch (error) {
    alert('Something went wrong. Please try again.');
    button.disabled = false;
    button.textContent = 'Join';
  }
});
