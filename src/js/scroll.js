export default class ScrollsElements
{
    constructor(block, scrollStart, scrollEnd, allOthers)
    {
        this.block = block
        this.titleBlock = this.block.querySelector('h2')
        this.paraBlock = this.block.querySelector('p')
        this.imgsBlock = this.block.querySelectorAll('img')
        this.imgContainer = this.block.querySelector('.images')
        this.buttons = this.block.querySelectorAll('.center a')
        this.buttonsContainer = this.block.querySelector('.center')
        this.startScroll = scrollStart
        this.endScroll = scrollEnd
        this.othersBlock = allOthers
        if (this.block.getBoundingClientRect().top < -5) {
            this.fromTopElment = this.block.getBoundingClientRect().top
        }
        else{
            this.fromTopElment = 0
        }

        this.scroll()
    }

    scroll()
    {
        if(window.scrollY >= this.startScroll && window.scrollY <= this.endScroll ) {
            this.block.style.zIndex = 2
            for (let i = 0; i < this.othersBlock.length; i++) {
                this.othersBlock[i].style.zIndex = 0
            }
            
            this.titleBlock.style.transform = `translateY(-${Math.round(-this.fromTopElment / 1.45)}px)`
            this.paraBlock.style.transform = `translateY(-${Math.round(-this.fromTopElment / 1.4)}px)`
            this.imgsBlock[0].style.transform = `translateY(-${Math.round(-this.fromTopElment / 1.15)}px)`
            this.imgsBlock[1].style.transform = `translateY(-${Math.round(-this.fromTopElment / 1.24)}px)`
            if (this.buttons !== null && this.buttons.length > 1) {
                this.buttons[0].style.transform = `translateY(-${Math.round(-this.fromTopElment / 2.88)}px)`
                this.buttonsContainer.style.transform = `translateY(-${Math.round(-this.fromTopElment / 1.99)}px)`
                this.buttons[1].style.transform = `translateY(-${Math.round(-this.fromTopElment / 2.6)}px)`
            }
            else if (this.buttons.length > 0) {
                this.buttons[0].style.transform = `translateY(-${Math.round(-this.fromTopElment / 2.88)}px)`
                this.buttonsContainer.style.transform = `translateY(-${Math.round(-this.fromTopElment / 1.99)}px)`
            }
            else{}
            
        }
    }
} 