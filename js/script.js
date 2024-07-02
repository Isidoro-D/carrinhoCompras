const addBtn = document.querySelector(".addBtn");/*criei p/botão Adicionar*/
const addbtnLimpar = document.querySelector(".addBtnLimpar");/*criei p/botão limpar*/

let options = Array.from(document.querySelectorAll("option"));/*criei p/armazenar as opções para selecionar um Array*/
let produtos = document.querySelector(".produto");/* criei para indexar o array */
let addProdutos = Array.from(document.querySelectorAll(".produto"));/* criei para produtos adicionados no carrinho */
let itens = document.querySelectorAll("ul");
let precosItens = [9.90 , 29.90 , 29.90 , 129.90, 19.90 , 69.90];/*preços num Array*/
let produtosCount = 0; /*contagem dos produtos adicionados no carrinho de compras*/
let precoTotal = 0; /*Preço Total das compras*/

console.log(produtos);
console.log(itens);
console.log(precosItens);

addProdutos();

function addProdutos(){
    addBtn.addEventListener("click", (e) =>{
        let qtde = Number(document.querySelector("qtde").valule);
        let itens = document.createElement('li');

        if (qtde != '' || qtde !=0){
            produtosCount++;
            itens.append(itens);
            itens.textContent = `${qtde} x ${options[produtos.value].textContent}`;
            console.log(precosItens[produtosCount - 1]);
            
            let currentPreco = precosItens[produtosCount -1] * qtde;
            addProdutos.push(itens);
            precoTotal += currentPreco;
            document.querySelector('h3').innerText = `Total - R$ ${total.tofixed(2)}`;
        } else {
            alert("erro - insira a quatidade");
            }
    
        })
    }
}

