const ulLista = document.querySelector('#ul-mensagens');
const limpar = document.querySelector('#btn-limpar');

let buscarLista = [];

function getLista() {
    if(localStorage.meuFormulario) {
        buscarLista = JSON.parse(localStorage.getItem('meuFormulario'));
        console.log(buscarLista)
    }
}
getLista();

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
        console.log(item)
    }
})

limpar.addEventListener('click', ()=> {
    localStorage.setItem('meuFormulario', [])
    window.location.reload();
})