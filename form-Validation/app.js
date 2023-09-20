const form = document.querySelector('form')

const username = document.querySelector('#username')
const password = document.querySelector('#password')
const emailInput = document.querySelector('#useremail')
const fileInput = document.querySelector('#fileInput')

const userProfile = document.getElementById('user-profile')

class Validation {
  constructor(username, email, password, profile) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.profile = profile;
  }

  getFormDetails() {
    let userDetails = {
      username   : this.username,
      emailInput : this.email,
      password   : this.password,
      fileInput  : this.profile
    }
    console.log(userDetails)
  }
}

// const userOne = new Validation('Benjamin', 'benabolade@gmail.com', '5433143', '')
fileInput.addEventListener('change', (e) => {
  // console.log(e.target.files)
  const file = fileInput.files[0]
  if (file) {
    const reader = new FileReader()

    reader.onload = function(e) {
      userProfile.src = e.target.result
    }

    reader.readAsDataURL(file)
  }

})
form.addEventListener("submit", (e) => {
  const newUser = new Validation(username.value, emailInput.value, password.value, fileInput.files[0])
  newUser.getFormDetails()
  e.preventDefault()
})