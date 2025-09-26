let globalMessage = "Hello from global scope"

function changeColor(color) {
  const box = document.getElementById("box")
  box.style.background = color
}

function togglePulseBox() {
  const box = document.getElementById("box")
  box.classList.toggle("pulseBox")
}

function addNumbers(a,b) {
  return a+b
}

function showCalculation() {
  let localMessage = "Local calculation done"
  const result = addNumbers(5,7)
  document.getElementById("output").innerText =
    `${globalMessage} | ${localMessage} | 5 + 7 = ${result}`
}

function animateBox() {
  const animBox = document.getElementById("animBox")
  animBox.classList.toggle("animate")
}

function flipCard(cardContainer) {
  const card = cardContainer.querySelector(".card")
  card.classList.toggle("flipped")
}

function toggleModal() {
  const modal = document.getElementById("modal")
  modal.classList.toggle("show")
}
