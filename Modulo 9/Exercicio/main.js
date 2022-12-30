
$(document).ready(() => {
    animateBtn()
    formController()

})

function animateBtn() {
    const btn = $('#addBtn')
    btn.hover(() => {
        btn.animate({
            width: "50px"
        }, 100)
    })
    btn.mouseleave(() => {
        btn.animate({
            width: "30px"
        }, 100)
    })
}

function formController() {
    const form = $('#idForm')
    const idTarefa = $('#idTarefa')
    const idData = $('#idData')
    form.on('submit', (e) => {
        e.preventDefault()
        const novaTarefa = $(`<li style="display: none">
                ${idTarefa.val()} - ${idData.val()}
            </li>`).appendTo('ul')
        $(novaTarefa).fadeIn(1000)
        $('li').click(function() {
            $(this).addClass('completarTarefa');
        });
        $(idTarefa).val('')
        $(idData).val('')
    })
}