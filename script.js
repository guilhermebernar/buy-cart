//Criando a main
const main = document.createElement('main');

//Aplicando a main ao Body
document.body.appendChild(main);

//Criando a productList
const productList = document.createElement('ul');

//h3 do total
const valorDaCompra = document.createElement('h3')

//Aplicando a productList ao main
main.appendChild(productList);

//Função que lista produtos e botão
function listarProdutos(carrinho){

    productList.innerHTML = ""
    for(let i = 0; i<carrinho.length; i++){
        const produto = carrinho[i]
        
        details(produto)
    }
    const button = document.createElement('button')
    button.innerText = "Finalizar"
    button.classList.add('btnEnviar')
    productList.appendChild(button)
}

//carrinho existente:
listarProdutos(carrinho)

//Criação de evento de evenvio de produto 
const form = document.querySelector(".form")
form.addEventListener("submit", cadastrarProduto)

//Cadastro de produto:
function cadastrarProduto(event){
    console.log(event)
    event.preventDefault()

    const inputs    = event.target

    const name      = inputs[0].value
    const price     = inputs[1].value
    
    const novoProd  = {}
    novoProd.name   = name
    novoProd.price  = parseInt(price)
    
    carrinho.push(novoProd)
    console.log(carrinho)

    listarProdutos(carrinho)
    valorDaCompra.innerHTML = `<strong>Total  R$ ${vtotal(carrinho)} </strong>`
}


//Criação de conteúdo do item de produto
const ProductDetails = document.createElement('section')
productList.appendChild(ProductDetails);
 
function details(produto){
    const  productItem  = document.createElement("li")
    const name  = produto.name
    const price = produto.price

    const  tagDiv       = document.createElement("div")
    const  tagName      = document.createElement("p")
    const  tagPrice     = document.createElement("p")

    tagName.innerHTML    = `Produto: ${name}`
    tagPrice.innerHTML   = `Preço: R$ ${price}`

    tagDiv.classList.add("infos")
    tagDiv.appendChild(tagName)
    tagDiv.appendChild(tagPrice)
    productItem.appendChild(tagDiv)
    productList.appendChild(productItem)

}

//Mostrando o resultado total
const totalPrice = document.createElement('h3')
main.appendChild(totalPrice)


function vtotal (carrinho) {
    
    let total = 0

    for (let i = 0; i < carrinho.length; i++){
        total += carrinho[i].price  
    }
    
    return total
}

valorDaCompra.innerHTML = `<strong>Total  R$ ${vtotal(carrinho)} </strong>`
main.appendChild(valorDaCompra)
