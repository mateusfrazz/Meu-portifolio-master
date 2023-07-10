let button = document.querySelector('#button');

let formArray = [];

button.addEventListener('click', ()=> {
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



let buscarLista = [];

let buscar = document.querySelector('#buscar');
buscar.addEventListener('click', ()=> {
    let buscaListaLocal = localStorage.getItem('meuFormulario');
    buscarLista.push(JSON.parse(buscaListaLocal))
    console.log(buscarLista)
})