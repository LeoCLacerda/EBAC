const form = document.getElementById('formulario')
const inputUm = document.getElementById('numeroUm')
const inputDois = document.getElementById('numeroDois')

const numeroUmErro = document.getElementById('numeroUmValidator')
const numeroDoisErro = document.getElementById('numeroDoisValidator')

const mensagemSucesso = document.getElementById('formSucesso')
const mensagemErro = document.getElementById('formErro')

function validarForm(a, b) {
    return parseInt(b) > parseInt(a);
}

function validarInput(target, textErro) {
    const validar = target.value == ''
    textErro.style.display = validar ? 'block' : 'none'
    return !validar
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const validarUm = validarInput(inputUm, numeroUmErro)
    const validarDois = validarInput(inputDois, numeroDoisErro)
    if(validarUm && validarDois && validarForm(inputUm.value, inputDois.value)){
        mensagemSucesso.style.display = 'block'
        mensagemErro.style.display = 'none'
        inputUm.value = ''
        inputDois.value = ''
    }
    else {
        mensagemSucesso.style.display = 'none'
        mensagemErro.style.display = 'block'
    }
})