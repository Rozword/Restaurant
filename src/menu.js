import { cardsContainer, cards } from "./pageload";


let dishesDiv = (title, para, divNum, chef, pic) => {
    let divs = document.getElementsByClassName('cards')
    let dishTitle = document.createElement('h3')
    let dishChef = document.createElement('div')
    dishChef.setAttribute('id', 'dishChef')
    let dishPara = document.createElement('p')       
    dishTitle.textContent = title
    
    dishPara.textContent = para    
    divs[divNum].appendChild(dishTitle) 
    divs[divNum].appendChild(dishChef)   
    divs[divNum].appendChild(dishPara)
    let chefTitle = document.createElement('p')
    let chefPic = document.createElement('img')
    chefTitle.textContent = chef
    chefPic.src = pic
    dishChef.appendChild(chefTitle)
    dishChef.appendChild(chefPic)
    
}


let showDishes = () =>{

    cardsContainer()
    cards(4)  

    let divs = document.getElementsByClassName('cards')
    let dishesTitle = document.createElement('h1')
    dishesTitle.textContent = 'Take a look at some of our dishes!'
    divs[0].appendChild(dishesTitle)

    dishesDiv('Beef Bourguignon', 'This is a superb stew with carrots, mushrooms, and onions complementing tender chunks of beef', 1, 'Chef: Odin', 'images/Odin.jpg')
    dishesDiv('Niçoise Salad', 'This innovative take on Niçoise salad includes seared ahi tuna and poached eggs atop green beans, olives, new potatoes, and tomatoes, among other ingredients.', 2, 'Chef: Nina', 'images/Nina.jpg')
    dishesDiv('Roasted Chicken with Herbes de Provence', ' This roast chicken incorporates Organic Herbes de Provence and Organic Garlic Powder.', 3, 'Chef: Logan', 'images/Logan.jpg')
    dishesDiv('Prime Rib Au Poivre', 'This haute cuisine recipe is crusted with Organic Peppercorn Melange.', 4, 'Chef: Freya', 'images/Freya.jpg')


}

export {showDishes}