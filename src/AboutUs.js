
import { cardsContainer, cards } from "./pageload";


let createDivs = (title, para, divNum, photo) => {
    let divs = document.getElementsByClassName('cards')
    let chefTitle = document.createElement('h3')
    let chefPara = document.createElement('p')
    let pic = document.createElement('img')    
    chefTitle.textContent = title
    pic.src = photo
    chefPara.textContent = para    
    divs[divNum].appendChild(chefTitle)
    divs[divNum].appendChild(pic)
    divs[divNum].appendChild(chefPara)

    
}

let chefs = () => {
    

    cardsContainer()
    cards(4)    

    let divs = document.getElementsByClassName('cards')
    let chefsTitle = document.createElement('h1')
    chefsTitle.textContent = 'Learn about us!'
    divs[0].appendChild(chefsTitle)

    createDivs('Chef of Cuisine: Odin', 'Odin is our expert Husky Chef. He can cook amazing dishes beyond your imagination', 1, 'images/Odin.jpg')
    createDivs('Sous Chef: Nina', 'Nina is our brilliant Golden Retriever chef. Her creativity in the kitchen is without limits', 2, 'images/Nina.jpg' )
    createDivs('Chef de Partie: Logan', "Logan is our talented Aleman Shepard. You won't be able to stop eating his preparations!", 3, 'images/Logan.jpg')
    createDivs('Commis Chef: Freya', "Freya is our promising Golden Retriever chef apprendice. If you eat one of her dishes, you will see the brilliant future that awaits for her!", 4, 'images/Freya.jpg')
    
    
}

export{chefs}