export default class Projects
{
    constructor(firstLink, secondLink, title, text, openOtherLink, githubLink)
    {
        this.firstLink = firstLink
        this.secondLink = secondLink
        this.text = text
        this.title = title
        this.openOtherLink = openOtherLink
        this.githubLink = githubLink
        if (this.openOtherLink != null || this.githubLink != null) {
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
        const title = document.createElement('h2')
        const text = document.createElement('p')

        images.classList.add('images')
        title.innerHTML = this.title
        text.innerHTML = this.text
        img1.src = this.firstLink
        img2.src = this.secondLink

        article.appendChild(title)
        article.appendChild(text)
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
        const article = document.createElement('article')
        const title = document.createElement('h2')
        const text = document.createElement('p')
        const images = document.createElement('div')
        const aroundLink = document.createElement('div')
        const linkOut = document.createElement('a')
        const linkGit = document.createElement('a')

        linkOut.href = this.openOtherLink
        linkOut.innerHTML = 'site'
        linkOut.target = '_blank'
        images.classList.add('images')
        title.innerHTML = this.title
        text.innerHTML = this.text
        img1.src = this.firstLink
        img2.src = this.secondLink
        aroundLink.classList.add('center')
        linkOut.classList.add('clickable')

        article.appendChild(title)
        article.appendChild(text)
        article.appendChild(aroundLink)
        aroundLink.appendChild(linkOut)
        if (this.githubLink !=null) {
            linkGit.href = this.githubLink
            linkGit.innerHTML = 'Github'
            linkGit.target = '_blank'
            linkGit.classList.add('clickable')
            aroundLink.appendChild(linkGit)
        }
        article.appendChild(images)
        images.appendChild(img1)
        images.appendChild(img2)

        const main = document.querySelector('main')
        main.appendChild(article)
    }
}