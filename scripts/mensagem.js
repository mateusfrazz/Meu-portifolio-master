const ulLista = document.querySelector('#ul-mensagens');
const limpar = document.querySelector('#btn-limpar');

let buscarLista = [];
// criando a funcao de busca de dados
function getLista() {
    if(localStorage.meuFormulario) {
        buscarLista = JSON.parse(localStorage.getItem('meuFormulario'));
        console.log(buscarLista)
    }
}
getLista();
// percorrendo os itens do meu array para listar as mensagens
buscarLista.forEach((item) => {
    if(buscarLista.length > 0) {
        const li = document.createElement('li');
        li.innerHTML += `
        <li class="lista-mensagem">
            <h5 class="pt-5">Nome: ${item.nome}</h5>
            <p>Email: ${item.email}</p>
            <p>Mensagem: ${item.mensagem}</p>
        </li>
        `;
        ulLista.appendChild(li);
        
    }
})
// limpando as mensagens
limpar.addEventListener('click', ()=> {
    localStorage.setItem('meuFormulario', [])
    window.location.reload();
})