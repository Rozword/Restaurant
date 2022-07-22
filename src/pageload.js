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

export{cardsContainer, cards}