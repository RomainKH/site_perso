export default class ScrollsElements
{
    constructor(block, scrollStart, scrollEnd, allOthers, isReverse)
    {
        this.block = block
        this.titleBlock = this.block.querySelector('h3')
        this.paraBlock = this.block.querySelector('p')
        this.imgsBlock = this.block.querySelectorAll('img')
        this.imgContainer = this.block.querySelector('.images')
        this.button = this.block.querySelector('.center a')
        this.startScroll = scrollStart
        this.endScroll = scrollEnd
        this.othersBlock = allOthers
        this.isReverse = isReverse
        if (this.block.getBoundingClientRect().top < 10) {
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
            
            this.titleBlock.style.transform = `translateX(-${Math.round(-this.fromTopElment / 1.7)}px)`
            this.paraBlock.style.transform = `translateX(-${Math.round(-this.fromTopElment / 1.65)}px)`
            this.imgsBlock[0].style.transform = `translateX(-${Math.round(-this.fromTopElment / 1.35)}px)`
            this.imgsBlock[1].style.transform = `translateX(-${Math.round(-this.fromTopElment / 1.44)}px)`
            if (this.button != null) {
                this.button.style.transform = `translateX(-${Math.round(-this.fromTopElment / 1.5)}px)`
            }
            
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
            
            this.titleBlock.style.transform = `translateX(${Math.round(-this.fromTopElment / 1.7)}px)`
            this.paraBlock.style.transform = `translateX(${Math.round(-this.fromTopElment / 1.65)}px)`
            this.imgsBlock[0].style.transform = `translateX(${Math.round(-this.fromTopElment / 1.35)}px)`
            this.imgsBlock[1].style.transform = `translateX(${Math.round(-this.fromTopElment / 1.44)}px)`
            if (this.button != null) {
                this.button.style.transform = `translateX(${Math.round(-this.fromTopElment / 1.5)}px)`
            } 
        }
        else{
            this.block.style.zIndex = 0
        }   
    }

} 