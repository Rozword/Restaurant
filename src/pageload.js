let header = () =>{
    let container = document.getElementById('container');
    let title = document.createElement('div')
    let titlePara = document.createElement('p')
    let titleStuff = document.createElement('div')
    title.setAttribute('id', 'restaurantTitleDiv')
    titleStuff.setAttribute('id', 'restaurantStuff') 
    let searchStuff = document.createElement('input')
    let searchIcon = document.createElement('img') 
    searchStuff.setAttribute('type', 'search')
    searchStuff.placeholder = 'Search!'
    searchIcon.src = 'images/search.png'
    titlePara.setAttribute('id', 'restaurantTitlePara')
    titlePara.textContent = 'Pet Life'
    container.appendChild(title)
    title.appendChild(titlePara)
    title.appendChild(titleStuff)
    titleStuff.appendChild(searchIcon)
    titleStuff.appendChild(searchStuff)
}

let createFooter = () =>{
    let container = document.getElementById('container');
    let footer = document.createElement('div')
    footer.setAttribute('id', 'footer')
    footer.textContent = 'Page made by Rozword. All rights reserved'
    container.appendChild(footer)
    

}


let cardsContainer = () => {
    let container = document.getElementById('container');
    let cardSection = document.createElement('div');
    cardSection.classList.add('cardSection');
    container.appendChild(cardSection)  
    return cardsContainer  
    
}

let cards = (num) =>{
    for(let i=0; i<=num; i++){
        let cardSection = document.querySelector('.cardSection')
        let card = document.createElement('div')
        card.classList.add('cards');          
        cardSection.appendChild(card)
    }
    return cards
}

export{cardsContainer, cards, header, createFooter}