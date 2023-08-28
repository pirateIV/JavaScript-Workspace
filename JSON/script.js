async function populate() {
  const requestURL = `https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json`

  // const request = new Request(requestURL)

  const res = await fetch(requestURL)
  const data = await res.json()
  console.log(data)

  populateHeader(data)
  populateHeroes(data)
}
populate()

async function populateHeader(obj) {
  const header = document.querySelector("header")
  const heading = document.createElement("h1")

  heading.textContent = obj.squadName
  header.appendChild(heading)
}

async function populateHeroes(obj) {
  const section = document.querySelector("section")
  
}