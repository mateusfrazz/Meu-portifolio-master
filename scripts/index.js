
let button = document.querySelector('#button');

let formArray = [];

// metodo de envio
button.addEventListener('click', ()=> {
    if(localStorage.meuFormulario) {
        formArray =  JSON.parse(localStorage.getItem('meuFormulario'))
    }
    // pegando os campos de input
    let nomeValue = document.querySelector('#nome').value;
    let emailValue = document.querySelector('#email').value;
    let mensagemValue = document.querySelector('#mensagem').value;
    
    // objeto de envio 
    let formulario = {
        nome: nomeValue,
        email: emailValue,
        mensagem: mensagemValue,
    }
    //adicionando formulario no array
    formArray.push(formulario);
    
    // enviando os itens para o localstorage
    localStorage.setItem('meuFormulario', JSON.stringify(formArray))
})


