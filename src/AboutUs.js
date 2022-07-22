import { cardsContainer, cards } from "./pageload";


let createDivs = (title, para, divNum) => {
    let divs = document.getElementsByClassName('cards')
    let chefTitle = document.createElement('h3')
    let chefPara = document.createElement('p')
    chefTitle.textContent = title
    chefPara.textContent = para
    divs[divNum].appendChild(chefTitle)
    divs[divNum].appendChild(chefPara)

    return createDivs
}

let chefs = () => {

    cardsContainer()
    cards(5)    

    let divs = document.getElementsByClassName('cards')
    let chefsTitle = document.createElement('h5')
    chefsTitle.textContent = 'Lear about us!'
    divs[0].appendChild(chefsTitle)

    createDivs('Chef of Cuisine: Odin', 'Odin is our expert Husky Chef. He can cook amazing dishes beyond your imagination', 1)
    createDivs('Sous Chef: Nina', 'Nina is our brillian Golden Retriever chef. Her creativity in the kitchen is without limits', 2 )
    createDivs('Chef de Partie: Logan', "Logan is our talented Aleman Shepar. You won't be able to stop eating his preparations!", 3)
    createDivs('Commis Chef: Freya', "Freya is our promising Golden Retriever chef apprendice. If you eat one of her dishes, you will see the brilliant future that awaits for her!", 4)
    
    return chefs
}

export{chefs}