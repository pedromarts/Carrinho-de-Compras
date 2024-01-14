// iniciando projeto

function adicionar() {
    let produto = document.getElementById ('produto').value;
    let nomeProduto = produto.split ('-')[0];
    let valorUnitario = produto.split ('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let subTotal = valorUnitario * quantidade;
    let carrinho = document.getElementById ('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos" id="lista-produtos">
    <section class="carrinho__produtos__produto">
      <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subTotal}</span>
    </section>`

    
    
}



function limpar() {
 
    }
