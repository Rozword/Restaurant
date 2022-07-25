import {cardsContainer, cards} from "./pageload";

let home = () => {

    

cardsContainer();
cards(4)

let divs = document.getElementsByClassName('cards')

let firstDivTitle = document.createElement('h3')
let firstDivPara = document.createElement('p')
firstDivTitle.classList.add('title')
firstDivPara.classList.add('para')
firstDivTitle.textContent = 'Welcome to our awesome restaurant!'
firstDivPara.textContent = 'This is a restaurant for dogs, by dogs!'
divs[0].appendChild(firstDivTitle)
divs[0].appendChild(firstDivPara)


let scheduleDivTitle = document.createElement('h3')
let scheduleDivPara = document.createElement('ul')
scheduleDivTitle.classList.add('title')
scheduleDivPara.classList.add('para')
scheduleDivTitle.textContent = 'Schedule'

let ul1 = document.createElement('li')
ul1.textContent = 'Monday: 7 AM to 6 PM'
scheduleDivPara.appendChild(ul1)
let ul2 = document.createElement('li')
ul2.textContent = 'Tuesday: 7 AM to 6 PM'
scheduleDivPara.appendChild(ul2)
let ul3 = document.createElement('li')
ul3.textContent = 'Wednesday: 7 AM to 6 PM'
scheduleDivPara.appendChild(ul3)
let ul4 = document.createElement('li')
ul4.textContent = 'Thursday: 7 AM to 6 PM'
scheduleDivPara.appendChild(ul4)
let ul5 = document.createElement('li')
ul5.textContent = 'Friday: 7 AM to 6 PM'
scheduleDivPara.appendChild(ul5)
let ul6 = document.createElement('li')
ul6.textContent = 'Saturday: 7 AM to 6 PM'
scheduleDivPara.appendChild(ul6)
let ul7 = document.createElement('li')
ul7.textContent = 'Sunday: 7 AM to 6 PM'
scheduleDivPara.appendChild(ul7)
divs[1].appendChild(scheduleDivTitle)
divs[1].appendChild(scheduleDivPara)


let dishTitle = document.createElement('h3')
let dishPicsDiv = document.createElement('div')
dishPicsDiv.setAttribute('id', 'dishDiv')
let img1Div = document.createElement('div')
let img1 = document.createElement('img')
let img1Para = document.createElement('p')
let img2Div = document.createElement('div')
let img2 = document.createElement('img')
let img2Para = document.createElement('p')
let img3Div = document.createElement('div')
let img3 = document.createElement('img')
let img3Para = document.createElement('p')
let img4Div = document.createElement('div')
let img4 = document.createElement('img')
let img4Para = document.createElement('p')
dishTitle.textContent = 'Get to know some of our taste dishes!'
img1.src = 'images/dish1.jpg'
img1Para.textContent = 'Delicious meat with salad'
img2.src = 'images/dish2.jpg'
img2Para.textContent = 'Look at this yummy ramen!'
img3.src = 'images/dish3.jpg'
img3Para.textContent = "Everyday icecream!"
img4.src = 'images/dish4.jpg'
img4Para.textContent = 'Best meat croquettes ever!'


divs[2].appendChild(dishTitle)
divs[2].appendChild(dishPicsDiv)
dishPicsDiv.appendChild(img1Div)
img1Div.appendChild(img1)
img1Div.appendChild(img1Para)

dishPicsDiv.appendChild(img2Div)
img2Div.appendChild(img2)
img2Div.appendChild(img2Para)

dishPicsDiv.appendChild(img3Div)
img3Div.appendChild(img3)
img3Div.appendChild(img3Para)

dishPicsDiv.appendChild(img4Div)
img4Div.appendChild(img4)
img4Div.appendChild(img4Para)



let contactTitle = document.createElement('h3')
let contactPara = document.createElement('p')
contactTitle.classList.add('title')
contactPara.classList.add('para')
contactTitle.textContent = 'Contact us'
contactPara.textContent = 'You can reach us at 555888555 or at 000111000'
divs[3].appendChild(contactTitle)
divs[3].appendChild(contactPara)







return home

}

export{home};