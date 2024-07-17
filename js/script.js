const productSelect = document.querySelector('#productSelect');
const qty = document.querySelector('input');
const add = document.querySelector('.add');
const clear = document.querySelector('.clear');
const cartTable = document.querySelector('.cartTable').querySelector('tbody');
const totalDisplay = document.querySelector('#totalDisplay');
const cart = [];

add.addEventListener('click', (event) => {
    event.preventDefault;

    addToCart();
    updateTotal();
})

clear.addEventListener('click', (event) => {
    event.preventDefault;

    clearCart();
})

/* FUNÇÃO PARA ADICIONAR E SEPARAR NO CARRINHO */

function addToCart() {
    // Obter a seleção do produto
    const selectedOption = productSelect.value;
    
    // Extrair a descrição e o valor do produto
    const [description, valueWithCurrency] = selectedOption.split(' - R$ ');
    const value = parseFloat(valueWithCurrency.replace(',', '.')); // Convertendo para número
    
    // Obter a quantidade
    const quantity = parseInt(qty.value);

    // Calcular o total
    const total = value * quantity;

    // Obter a tabela e adicionar a nova linha
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
    <tr>
        <td>${description}</td>
        <td>R$ ${value.toFixed(2).replace('.', ',')}</td>
        <td>${quantity}</td>
        <td>R$ ${total.toFixed(2).replace('.', ',')}</td>
        </tr>
    `;

    cartTable.appendChild(newRow);
}


/* FUNÇÃO PARA LIMPAR O CARRINHO */

function clearCart() {
    // Remove todas as linhas da tabela
    while (cartTable.firstChild) {
        cartTable.removeChild(cartTable.firstChild);
        totalDisplay.textContent = "Total: R$ 0,00";
    }
}

/* FUNÇÃO PARA MOSTRAR O TOTAL DA COMPRA */

function updateTotal() {
    let total = 0;

    // Calcular o total acumulado
    cartTable.querySelectorAll('tr').forEach(row => {
        const totalCell = row.cells[3];
        const totalValue = parseFloat(totalCell.textContent.replace('R$', '').replace(',', '.'));
        total += totalValue;
    });

    // Atualizar o display do total
    totalDisplay.textContent = `Total: R$ ${total.toFixed(2).replace('.', ',')}`;
}