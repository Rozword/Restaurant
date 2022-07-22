import {cardsContainer, cards} from "./pageload";

let home = () => {

cardsContainer();
cards(3)

let divs = document.getElementsByClassName('cards')

let firstDivTitle = document.createElement('h3')
let firstDivPara = document.createElement('p')
firstDivTitle.classList.add('title')
firstDivPara.classList.add('para')
firstDivTitle.textContent = 'Welcome to our awesome restaurant!'
firstDivPara.textContent = 'This is a family restaurant. Come and enjoy a family environment. Pets are also welcome!'
divs[0].appendChild(firstDivTitle)
divs[0].appendChild(firstDivPara)


let secondDivTitle = document.createElement('h3')
let secondDivPara = document.createElement('ul')
secondDivTitle.classList.add('title')
secondDivPara.classList.add('para')
secondDivTitle.textContent = 'Schedule'

let ul1 = document.createElement('li')
ul1.textContent = 'Monday: 7 AM to 6 PM'
secondDivPara.appendChild(ul1)
let ul2 = document.createElement('li')
ul2.textContent = 'Tuesday: 7 AM to 6 PM'
secondDivPara.appendChild(ul2)
let ul3 = document.createElement('li')
ul3.textContent = 'Wednesday: 7 AM to 6 PM'
secondDivPara.appendChild(ul3)
let ul4 = document.createElement('li')
ul4.textContent = 'Thursday: 7 AM to 6 PM'
secondDivPara.appendChild(ul4)
let ul5 = document.createElement('li')
ul5.textContent = 'Friday: 7 AM to 6 PM'
secondDivPara.appendChild(ul5)
let ul6 = document.createElement('li')
ul6.textContent = 'Saturday: 7 AM to 6 PM'
secondDivPara.appendChild(ul6)
let ul7 = document.createElement('li')
ul7.textContent = 'Sunday: 7 AM to 6 PM'
secondDivPara.appendChild(ul7)
divs[1].appendChild(secondDivTitle)
divs[1].appendChild(secondDivPara)

let thirdDivTitle = document.createElement('h3')
let thirdDivPara = document.createElement('p')
thirdDivTitle.classList.add('title')
thirdDivPara.classList.add('para')
thirdDivTitle.textContent = 'Contact us'
thirdDivPara.textContent = 'You can reach us at 555888555 or at 000111000'
divs[2].appendChild(thirdDivTitle)
divs[2].appendChild(thirdDivPara)







return home

}

export{home};