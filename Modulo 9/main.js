$(document).ready(() => {
    $('form').on('submit', (e) => {
        e.preventDefault()
        const urlImg = $('#idNovaImg').val()
        const novoItem = $('<li style="display: none"></li>')
        $(`<img src="${urlImg}" />
           <div class="overlayLink">
               <a href="${urlImg}" target="_blank">Abrir Imagem</a>
           </div>
        `).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn()
        $('#idNovaImg').val('')
    })
    $('header button').click(() => {
        $('form').slideDown(500)
    })
    $('#idBtnCancelar').click(() => {
        $('form').slideUp(500)
    })
})