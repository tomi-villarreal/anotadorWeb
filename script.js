const boton = document.querySelector(".button-anotador");
const botonReset = document.querySelector(".button-reset");
const texto = document.querySelector(".div-text-anotador")

boton.addEventListener("click", ()=>{
    const textoInput = document.getElementById("input-id");
    texto.innerHTML += `
    <div class="text-anotador">
        ${textoInput.value}
        </div>
    `
    textoInput.value = ""
})

botonReset.addEventListener("click", ()=>{
    texto.innerHTML = ""
})