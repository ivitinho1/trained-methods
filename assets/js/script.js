const showAllButton = document.querySelector('.show-all')
const mapButton = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')
const filter = document.querySelector('.filter-vegan')
const list = document.querySelector('.list')

// função que formata nossos valores para R$:
function format(value){
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value)
}

// função que adiciona todos nossos itens na tela | forEach
function showAll(items) {
    let newLi = ''

    items.forEach(item => {
       newLi = newLi + `
            <li>
                <img src="${item.src}">
                <p>${item.name}</p>
                <p class="price">${format(item.price)}</p>
            </li>
        `
    })

    list.innerHTML = newLi
}

// função que dará 10% de desconto | map
function mapAll(){
    const newPrice = menuOptions.map(item => ({
        ...item,
        price: item.price * 0.9
    }))
    
    showAll(newPrice)
}

// função que ira somar todos os itens | reduce
function sumAllItems(){
    const totalValue = menuOptions.reduce((acc, cur) =>{
        return acc += cur.price
    }, 0)

    list.innerHTML = `
        <li>Soma de todos os itens do menu: <p class="price">${format(totalValue)}</p></li>
    `
}

// função que busca apenas os produtos veganos como true do 'products.js' | vegan: true | filter
function filterJustVegan(){
    const filterVegan = menuOptions.filter(item => item.vegan === true )
    
    showAll(filterVegan)
}

