export default class ScrollsElements
{
    constructor(block, scrollStart, scrollEnd, allOthers)
    {
        this.block = block
        this.titleBlock = this.block.querySelector('h3')
        this.paraBlock = this.block.querySelector('p')
        this.imgsBlock = this.block.querySelectorAll('img')
        this.startScroll = scrollStart
        this.endScroll = scrollEnd
        this.othersBlock = allOthers
        this.fromTopElment = this.block.getBoundingClientRect().top
        

        this.scroll()
    }

    scroll()
    {
        if(window.scrollY >= this.startScroll && window.scrollY <= this.endScroll) {
            this.block.style.opacity = 1
            this.block.style.zIndex = 2
            for (let i = 0; i < this.othersBlock.length; i++) {
                this.othersBlock[i].style.opacity = 0
            }
            this.titleBlock.style.transform = `translateY(-${Math.round(this.fromTopElment)}px)`
            this.paraBlock.style.transform = `translateY(-${Math.round(this.fromTopElment)}px)`
            this.imgsBlock[0].style.transform = `translateY(-${Math.round(this.fromTopElment)}px)`
            this.imgsBlock[1].style.transform = `translateY(-${Math.round(this.fromTopElment)}px)`
        }
        else{
            this.block.style.zIndex = 0
        }   
    }

}