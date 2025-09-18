const products = [
    {
        id: 1010,
        name: "Xbox Series X",
        price: 4000.0,
        category: "Games",
        discount: 0.0,
        amount: 2
    },
    {
        id: 1011,
        name: "Xbox Series S",
        price: 3000.0,
        category: "Games",
        discount: 0.0,
        amount: 10
    },
    {
        id: 2020,
        name: "O Senhor dos Anéis: A Sociedade do Anel",
        price: 59.90,
        category: "Livros",
        discount: 0.1,
        amount: 50
    },
    {
        id: 2022,
        name: "Contos de Edgar Allan Poe",
        price: 50.0,
        category: "Livros",
        discount: 0.0,
        amount: 20
    },
    {
        id: 3030,
        name: "Notebook Gamer Acer",
        price: 5000.0,
        category: "Informática",
        discount: 0.1,
        amount: 2
    },
]

function printProducts(products){
    

    products.forEach(p => {

        let tag = ""
        let price = p.price
        if(p.discount != 0.0){
            tag = "(PROMOÇÃO) "
            price = p.price - (p.price * p.discount)
        }

        console.log(`Cod.: ${p.id} - ${tag}${p.name} - ${p.category} - R$ ${price}`)
    })
}


function printProductsinpromocao(products){
    const productspromo = products
    .map(p => p.name)
    .filter(p => p.discount != 0.0)
    
    console.log(productspromo)
}

function printProductsgames(products){
    const productsgamer = products
    .filter(p => p.category === "Games")
    .map(p => p.name)
    
    console.log(productsgamer)
}

function printProductsbookdiscounted(products){
    const bookdiscounted = products
    .filter(p => p.category === "Livros" && p.discount > 0)
    .map(p => ({
        name: p.name,
        originalprice: p.price,
        discountedprice: p.price - (p.price * p.discount)
    }))
    
    console.log(bookdiscounted)
}

function printProductsamount0(products){
    const amount00 = products
    .filter(p => p.amount == 0)
    .map(p => p.name)

    console.log(amount00)
}

function printProductstotalamount(products){
    const list = products.map(p => `${p.name}: ${p.amount}`)
    const amounttotal = products.reduce((ac, p) => ac + p.amount)

    console.log(list)
    console.log(amounttotal)
}

function printProductsmaiscaro(products) {
    const moreexpensiveproducts = products.reduce((ac, p) => {
        return (p.price > ac.price) ? p:ac
    })

    const formatted = [moreexpensiveproducts].map(p => ({
        name: p.name,
        price: p.price
    }))

    console.log(formatted)
}

function printProductslivromaiscaro(products){
    const moreexpensivebook = products
        .filter(p => p.category === "Livros")
        .reduce((ac, p) => (p.price > ac.price ? p:ac))

    const formatted = [moreexpensivebook].map(p => `${p.name} custa R$${p.price}`)

    console.log(formatted)
}

printProducts(products)