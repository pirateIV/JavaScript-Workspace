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
  });
}

function checkLength(input, min, max, message) {
  const error = input.nextElementSibling;
  error.innerHTML =
    input.value.length < min || input.value.length > max ? message : '';
}

function checkPasswordsMatch(input1, input2) {
  if (input1 !== input2) {
    showError(
      input2,
      (input2.nextElementSibling.innerHTML = 'Passwords do not match')
    );
  }
}

form.addEventListener('submit', e => {
  e.preventDefault();

  checkPasswordsMatch(password, password2);
  showError([username, email, password, password2], 'Field cannot be empty');
  checkLength(
    username,
    3,
    15,
    'username should be greater than and less that 15'
  );
});
