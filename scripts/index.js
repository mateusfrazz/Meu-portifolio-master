let button = document.querySelector('#button');

let formArray = [];

button.addEventListener('click', ()=> {
    if(localStorage.meuFormulario) {
        formArray =  JSON.parse(localStorage.getItem('meuFormulario'))
    }
    let nomeValue = document.querySelector('#nome').value;
    let emailValue = document.querySelector('#email').value;
    let mensagemValue = document.querySelector('#mensagem').value;
    
    let formulario = {
        nome: nomeValue,
        email: emailValue,
        mensagem: mensagemValue,
    }

    formArray.push(formulario);

    localStorage.setItem('meuFormulario', JSON.stringify(formArray))
})


