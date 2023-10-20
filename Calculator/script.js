const select = document.querySelector('select');
const list = document.querySelector('ul');
const heading = document.querySelector('h1');

select.addEventListener('change', e => {
  let choice = select.value;
  let days;

  if (choice === 'February') {
    days = 28;
  } else if (
    choice === 'April' ||
    choice === 'June' ||
    choice === 'September' ||
    choice === 'November'
  ) {
    days = 30;
  } else {
    days = 31;
  }

  createCalendar(days, choice);
});

function createCalendar(days, choice) {
  heading.innerHTML = choice

  list.textContent = ''
  for(let i = 1; i <= days; i++) {
  const listItem = document.createElement('li')
    listItem.textContent = i
    list.appendChild(listItem)
  }
}

createCalendar(31, 'January')