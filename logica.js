document.querySelector('#enviar').addEventListener('click', () => enviar())

function enviar() {
    let nome = document.querySelector('#nome').value
    let email = document.querySelector('#email').value
    let senha = document.querySelector('#senha').value
    let confisenha = document.querySelector('#confisenha').value

    let nomef = false
    let emailf = false
    let senhaf = false
    let confisenhaf = false

    const regex = /[0-9]/

    if(regex.test(nome) || !(nome.length > 1)) {
        document.querySelector('.msgnome').classList.remove('esconder')
        nomef = false
    } else {
        nomef = true
        document.querySelector('.msgnome').classList.add('esconder')
    }

    if(!(email.indexOf('@') > -1) || !(email.length > 5)) {
        document.querySelector('.msgemail').classList.remove('esconder')
        emailf = false
    } else {
        emailf = true
        document.querySelector('.msgemail').classList.add('esconder')
    }

    if(!(senha.length >= 4)){
        document.querySelector('.msgsenha').classList.remove('esconder')
        senhaf = false
    } else {
        senhaf = true
        document.querySelector('.msgsenha').classList.add('esconder')
    }

    if(!(confisenha === senha) || confisenha === ''){
        document.querySelector('.msgconfisenha').classList.remove('esconder')
        confisenhaf = false
    } else {
        confisenhaf = true
        document.querySelector('.msgconfisenha').classList.add('esconder')
    }



    if(nomef && emailf && senhaf && confisenhaf) {
        alert('Cadastro realizado com sucesso!')
        
        document.querySelector('#nome').value = ''
        document.querySelector('#email').value = ''
        document.querySelector('#senha').value = ''
        document.querySelector('#confisenha').value = ''
    }
}
