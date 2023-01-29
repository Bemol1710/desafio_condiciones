
//parte 1 borde
const image = document.querySelector("#click")

image.addEventListener("click", function cambiaColor() {

    if (image.style.border == "none") {
        image.style.border = "2px solid red"
        image.style.transition = ".2s"

    } else {
        image.style.border = "none"
    }
})

// parte 2 stickers

const input1 = document.querySelector("#sticker1")
const input2 = document.querySelector("#sticker2")
const input3 = document.querySelector("#sticker3")
const result = document.querySelector("#total")
const verify = document.querySelector(".go")

verify.addEventListener("click", function go() {
    const a = Number(input1.value)
    const b = Number(input2.value)
    const c = Number(input3.value)
    const total = (a + b + c)

    if (a < 0 || b < 0 || c < 0) {
        result.innerHTML = "introduce un número válido del 0 al 10"
        result.style.color = "black"
        result.style.backgroundColor = "#FF5733"
    } else if (total > 10) {
        result.innerHTML = "No puedes llevar tantos stickers"
        result.style.color = "black"
        result.style.backgroundColor = "#FFFF33"
    } else if (total > 0) {
        result.innerHTML = `Perfecto! Te llevas ${total} stickers!`
        result.style.color = "black"
        result.style.backgroundColor = "#33FF36"
    } else {
        result.innerHTML = "No has seleccionado stickers"
        result.style.color = "black"
        result.style.backgroundColor = "#FF3333"
    }
})
//Parte 3 password

const pass1 = document.querySelector("#clave1")
const pass2 = document.querySelector("#clave2")
const pass3 = document.querySelector("#clave3")
const access = document.querySelector("#resultado")

const enter = document.querySelector("#try")

enter.addEventListener("click", function ingresar() {
    const x = pass1.value
    const y = pass2.value
    const z = pass3.value
    const password = x + y + z

    if (x == 9 && y == 1 && z == 1) {
        access.innerHTML = "clave 1 correcta"
        access.style.color = "black"
        access.style.backgroundColor = "#4FFF33"

    } else if (x == 7 && y == 1 && z == 4) {
        access.innerHTML = "clave 2 correcta"
        access.style.color = "black"
        access.style.backgroundColor = "#4FFF33"

    } else if (x < 0 || y < 0 || z < 0) {
        access.innerHTML = "debes usar números positivos"
        access.style.color = "black"
        access.style.backgroundColor = "#ECFF33"

    } else if (x == 0 && y == 0 && z == 0) {
        access.innerHTML = "Clave Incorrecta: Debes usar números distintos de cero"
        access.style.color = "black"
        access.style.backgroundColor = "#ECFF33"
    } else {
        access.innerHTML = "Clave Incorrecta"
        access.style.color = "black"
        access.style.backgroundColor = "#FF3C33"

    }


})