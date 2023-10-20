const countDown = document.getElementById("countdown");
const today = document.getElementById("today");
const newYear = document.getElementById("newYear");

const newyear = "2024-01-01 00:00:00";
const targetDate = new Date(newyear).getTime(); // New Year's Eve

today.innerHTML += formatDate(Date.now())
newYear.innerHTML += formatDate(newyear)

function countdown() {
  const now = new Date().getTime();

  let secondsLeft = targetDate - now;

  const days = Math.floor(secondsLeft / (1000 * 60 * 60 * 24));
  secondsLeft = secondsLeft % (1000 * 60 * 60 * 24);

  const hours = Math.floor(secondsLeft / (1000 * 60 * 60));
  secondsLeft = secondsLeft % (1000 * 60 * 60);

  const minutes = Math.floor(secondsLeft / (1000 * 60));

  const seconds = Math.floor((secondsLeft % (1000 * 60)) / 1000);

  countDown.innerHTML = `${days}d  ${hours}h ${minutes}m ${seconds}s remaining`;
  setInterval(() => {
    countdown(targetDate);
  }, 1000);
}

function formatDate(date)  {
  let formatted = new Date(date).toLocaleDateString("en-US", {
    year:"numeric",
    month: "long", 
    day: "2-digit",
  })
  return formatted
}

countdown();
