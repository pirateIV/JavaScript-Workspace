const buttons = document.querySelectorAll('div')

for(let i = 0; i < buttons.length; i++) {
  addHandler(buttons[i])
}

function addHandler(button) {
  button.onclick = function(e) {
    let message = e.target.getAttribute('data-message')
    alert(message)
  }
}

document.onkeydown = function(e){
  if(e.keyCode === 13) {
    document.activeElement.onclick(e)
  }
}
