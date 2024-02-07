const paina = document.querySelector("output")
const kuva = document.querySelector("#dice img")
paina.addEventListener("click", () => {
const random_number = Math.floor(Math.random()*6)+1
kuva.src = "./img/" + random_number + ".png"
})