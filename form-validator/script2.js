const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
// const error = document.querySelectorAll('small')

function errorMessage(input, message) {
  const error = input.nextElementSibling;
  error.innerHTML = input.value !== '' ? '' : message;
}

function showError(inputArr, message) {
  inputArr.forEach(input => {
    errorMessage(input, message);
    input.classList.add('error');
  });
}

function checkLength(input, min, max, message) {
  const error = input.nextElementSibling;
  error.innerHTML =
    input.value.length < min || input.value.length > max
      ? (error.innerHTML = message)
      : '';
}

form.addEventListener('submit', e => {
  e.preventDefault();

  showError([username, email, password, password2], 'Field cannot be empty');
  checkLength(username, 3, 15, 'username should be between 3 and 15 char.');
  checkLength(password, 3, 15, 'username should be between 6 and 20 char.');
});
