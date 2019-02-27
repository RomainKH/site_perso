import img0 from '../images/image0.png'
import img1 from '../images/image1.svg'
import img2 from '../images/image2.svg'
import img3 from '../images/image3.svg'
import img4 from '../images/image4.svg'


const article = document.querySelector('article')
const imgDescription = article.querySelector('p')
const imgTitle = article.querySelector('h2')

const arrows = document.createElement('div')
document.body.appendChild(arrows)
arrows.classList.add('arrows')

const buttonA = document.createElement('button')
article.appendChild(buttonA)
buttonA.classList.add('buttonA')
buttonA.innerHTML = 'Next Creation'

const buttonB = document.createElement('button')
article.appendChild(buttonB)
buttonB.classList.add('buttonB')
buttonB.innerHTML = 'Last Creation'

const button = document.querySelector('.continueTo')
const bigImg = document.createElement('img')
let neverDone = true

button.addEventListener('click', () =>
{
    neverDone = false
    setTimeout(function(){ 
        article.classList.add('textAppears') 
    }, 2200)
    setTimeout(function(){  
        article.classList.remove('textAppears')
        article.style.opacity = 1
    }, 4200)
})
window.addEventListener('mousewheel', (_event) => {
    if (neverDone == true) {
        neverDone = false
        setTimeout(function(){ 
            article.classList.add('textAppears') 
        }, 2200)
        setTimeout(function(){  
            article.classList.remove('textAppears')
            article.style.opacity = 1
        }, 4200)
    }
    
})
window.addEventListener('scroll', (_event) => {
    if (neverDone == true) {
        neverDone = false
        setTimeout(function(){ 
            article.classList.add('textAppears') 
        }, 2200)
        setTimeout(function(){  
            article.classList.remove('textAppears')
            article.style.opacity = 1
        }, 4200)
    }
})



const imgArray = new Array(img0, img1, img2, img3, img4)
const descriptionArray = new Array('This was a school project I did which basically was about making a mandala with illustrator about a theme we had to choose. As a fan of the Undertale universe I choosed to do mine on this video game.', 'This Film Poster was also a school project, we had to choose between different movies, I choosed Halloween because John Carpenter is one of the many film director I admire.', 'I did this 404 page in a limited amount of time, I was inspired by matrix, I use the character Neo and the universe of the movie in order to recreate this aspect of being lost as it is the purpose of the 404 page.', 'This was my first creation for the DailyUi I did it as a joke (why ordering barbapapa online ?) and using colours I really like to make the best first impression when publicating this online.', 'This one was inspired by many app already existing, where you can see what is in the sky, and what you are looking at, is it a star ? is it a bird ? or is this something no one has ever seen ? who knows...')
const titleArray = new Array('Mandala Undertale', 'Olly Moss Film Poster', 'DailyUi: The 404 page', 'DailyUi: SignUp page', 'DailyUi: App Icon')

article.appendChild(bigImg)
bigImg.classList.add('bigImg')
bigImg.src = imgArray[0]
let i = 0
let bigImg1 = document.createElement('img')
article.appendChild(bigImg1)
buttonA.addEventListener('click', () => {
    i++
    if(i > 4) {
        i = 0
    }

    bigImg1.src = bigImg.src
    bigImg.src = imgArray[i]

    imgTitle.classList.remove('pauseAnim')
    imgDescription.classList.remove('pauseAnim')
    imgDescription.classList.add('changeText')
    imgTitle.classList.add('changeText')
    imgDescription.innerHTML = descriptionArray[i]
    imgTitle.innerHTML = titleArray[i]
    bigImg1.classList.add('falseBigImg')
    bigImg.classList.add('getBigger')
    setTimeout(function(){
        bigImg.classList.remove('getBigger')
        imgDescription.classList.remove('changeText')
        imgTitle.classList.remove('changeText')
        bigImg1.classList.remove('falseBigImg')
        bigImg1.removeAttribute('src')
    }, 390)
})

buttonB.addEventListener('click', () => {
    i--
    if(i < 0) {
        i = 4
    }

    bigImg1.src = bigImg.src
    bigImg.src = imgArray[i]

    imgTitle.classList.remove('pauseAnim')
    imgDescription.classList.remove('pauseAnim')
    imgDescription.classList.add('changeText')
    imgTitle.classList.add('changeText')
    imgDescription.innerHTML = descriptionArray[i]
    imgTitle.innerHTML = titleArray[i]
    bigImg1.classList.add('falseBigImg')
    bigImg.classList.add('getBigger')
    setTimeout(function(){
        bigImg.classList.remove('getBigger')
        imgDescription.classList.remove('changeText')
        imgTitle.classList.remove('changeText')
        bigImg1.classList.remove('falseBigImg')
        bigImg1.removeAttribute('src')
    }, 390)
})