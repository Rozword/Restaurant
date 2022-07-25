import {home} from "./homeTab"
import {chefs} from "./AboutUs"
import { showDishes } from "./menu";
import {header, createFooter} from "./pageload"




console.log('Hi again');


header()


let body = document.querySelector('body')
let homeButton = document.createElement('button')
let aboutUsButton = document.createElement('button')
let menuButton = document.createElement('button')
let tabsDiv = document.createElement('div')
tabsDiv.setAttribute('id', 'tabsDiv')
homeButton.textContent = 'Home'
aboutUsButton.textContent = 'About us'
menuButton.textContent = 'Menu'
homeButton.classList.add('tabs')
aboutUsButton.classList.add('tabs')
menuButton.classList.add('tabs')
body.appendChild(tabsDiv)
tabsDiv.appendChild(homeButton)
tabsDiv.appendChild(menuButton)
tabsDiv.appendChild(aboutUsButton)




home()

homeButton.onclick = function() {
    let container = document.getElementById('container')
    let cardSection = document.querySelector('.cardSection')
    container.removeChild(cardSection)
    container.removeChild(footer)
    home()
    createFooter()
} 
aboutUsButton.onclick = function() {
    let container = document.getElementById('container')
    let cardSection = document.querySelector('.cardSection')
    container.removeChild(cardSection)
    container.removeChild(footer)
    chefs()
    createFooter()
} 
menuButton.onclick = function(){
    let container = document.getElementById('container')
    let cardSection = document.querySelector('.cardSection')
    container.removeChild(cardSection)
    container.removeChild(footer)
    showDishes()
    createFooter()
}




createFooter()




