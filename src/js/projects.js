export default class Projects
{
    constructor(firstLink, secondLink, title, text, openOtherLink)
    {
        this.firstLink = firstLink
        this.secondLink = secondLink
        this.text = text
        this.title = title
        this.openOtherLink = openOtherLink
        if (openOtherLink != null) {
            this.createBlock2()
        }
        else{
            this.createBlock()
        }
    }

    createBlock()
    {
        const img1 = document.createElement('img')
        const img2 = document.createElement('img')
        const images = document.createElement('div')
        const article = document.createElement('article')
        const content = document.createElement('div')
        const title = document.createElement('h3')
        const text = document.createElement('p')

        images.classList.add('images')
        title.innerHTML = this.title
        text.innerHTML = this.text
        img1.src = this.firstLink
        img2.src = this.secondLink

        article.appendChild(title)
        article.appendChild(text)
        article.appendChild(content)
        article.appendChild(images)
        images.appendChild(img1)
        images.appendChild(img2)

        const main = document.querySelector('main')
        main.appendChild(article)
        
    }


    createBlock2()
    {
        const img1 = document.createElement('img')
        const img2 = document.createElement('img')
        const images = document.createElement('div')
        const article = document.createElement('article')
        const content = document.createElement('div')
        const title = document.createElement('h3')
        const text = document.createElement('p')
        const linkOut = document.createElement('a')

        linkOut.href = this.openOtherLink
        linkOut.target = '_blank'
        images.classList.add('images')
        title.innerHTML = this.title
        text.innerHTML = this.text
        img1.src = this.firstLink
        img2.src = this.secondLink

        article.appendChild(title)
        article.appendChild(text)
        article.appendChild(content)
        article.appendChild(images)
        images.appendChild(img1)
        images.appendChild(linkOut)
        linkOut.appendChild(img2)

        const main = document.querySelector('main')
        main.appendChild(article)
    }
}