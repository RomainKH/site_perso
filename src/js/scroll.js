export default class ScrollsElements
{
    constructor(block, scrollStart, scrollEnd, allOthers, isReverse)
    {
        this.block = block
        this.titleBlock = this.block.querySelector('h3')
        this.paraBlock = this.block.querySelector('p')
        this.imgsBlock = this.block.querySelectorAll('img')
        this.imgContainer = this.block.querySelector('.images')
        this.startScroll = scrollStart
        this.endScroll = scrollEnd
        this.othersBlock = allOthers
        this.isReverse = isReverse
        if (this.block.getBoundingClientRect().top < -10) {
            this.fromTopElment = this.block.getBoundingClientRect().top
        }
        else{
            this.fromTopElment = 0
        }
        
        if (this.isReverse == false) {
            this.scroll()
        }
        else {
            this.reverseScroll()
        }
    }

    scroll()
    {
        if(window.scrollY >= this.startScroll && window.scrollY <= this.endScroll ) {
            this.block.style.zIndex = 2
            for (let i = 0; i < this.othersBlock.length; i++) {
                this.othersBlock[i].style.opacity = 0
            }
            this.block.style.opacity = 1
            
            this.titleBlock.style.transform = `translateX(-${Math.round(-this.fromTopElment / 4.6)}%)`
            this.paraBlock.style.transform = `translateX(-${Math.round(-this.fromTopElment / 6.55)}%)`
            this.imgsBlock[0].style.transform = `translateX(-${Math.round(-this.fromTopElment / 3.2)}%)`
            this.imgsBlock[1].style.transform = `translateX(-${Math.round(-this.fromTopElment / 3.3)}%)`
            
        }
        else{
            this.block.style.zIndex = 0
        }   
    }

    reverseScroll()
    {
        if(window.scrollY >= this.startScroll && window.scrollY <= this.endScroll) {
            this.block.style.zIndex = 2
            for (let i = 0; i < this.othersBlock.length; i++) {
                this.othersBlock[i].style.opacity = 0
            }
            this.block.style.opacity = 1
            
            this.titleBlock.style.transform = `translateX(${Math.round(-this.fromTopElment / 4.6)}%)`
            this.paraBlock.style.transform = `translateX(${Math.round(-this.fromTopElment / 6.55)}%)`
            this.imgsBlock[0].style.transform = `translateX(${Math.round(-this.fromTopElment / 3.2)}%)`
            this.imgsBlock[1].style.transform = `translateX(${Math.round(-this.fromTopElment / 3.3)}%)` 
        }
        else{
            this.block.style.zIndex = 0
        }   
    }

}