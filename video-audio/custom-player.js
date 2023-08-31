const media = document.querySelector("video")
const controls = document.querySelector("controls")

const play = document.querySelector('.play')
const stop = document.querySelector('.stop')
const rwd = document.querySelector('.rwd')
const fwd = document.querySelector('.fwd')

const timer = document.querySelector('.timer span')
const timerBar = document.querySelector('.timer div')
const timerWrapper = document.querySelector('.timer')

media.removeAttribute('controls')
media.addEventListener("dblclick", () => {
  playPauseMedia()
})

media.addEventListener("mouseover", () => {
  // see mouse position
})

play.addEventListener('click', playPauseMedia)
stop.addEventListener('click', stopMedia)
media.addEventListener('timeupdate', setTime)
fwd.addEventListener('click', fastFowardMedia)
rwd.addEventListener('click', rewindMedia)

function playPauseMedia() {
  if(media.paused) {
    play.setAttribute('data-icon', 'u')
    media.play()
  } else {
    play.setAttribute('data-icon', 'P')
    media.pause()
  }
}
console.log(media.autoplay)

function stopMedia() {
  media.pause()
  media.currentTime = 0
  play.setAttribute('data-icon', 'P')
}

function setTime() {
  const minutes = Math.floor(media.currentTime / 60)
  const seconds = Math.floor(media.currentTime - minutes * 60)

  const minuteValue = minutes.toString().padStart(2, '0')
  const secondValue = seconds.toString().padStart(2, '0')

  const mediaTime = `${minuteValue}:${secondValue}`
  timer.textContent = mediaTime
  // duration.textContent = media.duration

  const barLength = timerWrapper.clientWidth * (media.currentTime / media.duration)
  timerBar.style.width = `${barLength}px`
}

function fastFowardMedia() {
  media.currentTime += 5
}

function rewindMedia() {
  media.currentTime -= 5
  if(Math.floor(media.currentTime < 5)) {
    media.currentTime = 0
  }
}
