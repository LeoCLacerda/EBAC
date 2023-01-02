function menuHamburger() {
    $('#idMenuHamburgerIcon').click(() => {
        $('#idMenuHamburguer').slideToggle()
    })
}

function gerarCarousel() {
    $('#carouselImages').slick({
        autoplay: true,
        autoplaySpeed: 1500
    })
}

function buildForm() {
    $('#idTelefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    })
    $('#idForm').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            veiculo: {required: true},
            mensagem: {required: true}
        },
        messages: {
            nome: 'Seu nome completo',
            email: 'Preencha seu email',
            telefone: 'Preencha seu telefone',
            veiculo: 'Preencha o veículo',
            mensagem: 'Digite sua mensagem'
        },
        submitHandler: (form) => {
            console.log(form)
        },
        invalidHandler: (e, v) => {
            let camposIncorretos = v.numberOfInvalids()
        }
    })
}

$(document).ready(() => {
    gerarCarousel()
    menuHamburger()
    buildForm()

    $('.listaVeiculos button').click(() => {
        const destino = $('#contato')

        const nomeVeiculo = $(this).parent().find('h3').text()
        console.log(nomeVeiculo)
        $('#veiculoInteresse').val(nomeVeiculo)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })

})