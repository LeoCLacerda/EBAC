function buildMasks() {
    $('#idTelefone').mask('(00) 00000-0000', {
        placeholder: '(xx) xxxxx-xxxx'
    })
    $('#idCpf').mask('000.000.000-00', {
        placeholder: 'xxx.xxx.xxx-xx'
    })
    $('#idCep').mask('00000-000', {
        placeholder: 'xxxxx-xxx'
    })
}

$(document).ready(() => {
    buildMasks()
})