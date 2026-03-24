// arquivo js para implementar:
//1. capturar o evento de submit do formulário
//2. pegar o valor de input
//3. criar um elemento <li> com o valor digitado no input
//4. criar um elemento <li> na lista <u #itemlist>
//5. limpar o input após adicionar
//6. adicionar botão de remover em cada item da lista

//1 problema

const itemForm = document.getElementById('itemForm')
const itemInput = document.getElementById('itemInput')
const itemList = document.getElementById('itemList')
//const itemForm = document.querySelector('itemForm')
//const itemInput = DocumentType.querySelector('itemInput')
//const itemList = document.querySelector('itemlist')

// 2 problema

itemForm.addEventListener("submit", (e) => {
    e.preventDefault() // <- previne o recarregamento da página

    const item = itemInput.value
    const li = document.createElement("li")


// 3 problema

    li.textContent = item
    
//cria o elemento botão

    const removerButton= document.createElement('button')
    removerButton.textContent = "X"

//adiociona o botão na li criada

    li.appendChild(removerButton)

//evento que remove o item da lista

    removerButton.addEventListener("click", () => {
        li.remove()
    })
// 4 problema
    itemList.appendChild(li)

//5 problema

    itemInput.value = ""
})

function clicou() {
    const botao = document.querySelector(".botao")
    if (itemInput.getAttribute("type") === "text") {
        itemInput.setAttribute("type", "password")
        botao.innerText = "Mostrar Item"
    } else {
        itemInput.setAttribute("type", "text")
        botao.innerText = "Ocultar Item"
    }
}
