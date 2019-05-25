export default class Loading
{
    constructor(el)
    {
        this.el = el

        this.checkLoading()
    }

    checkLoading()
    {
        /**
         * animate the loader
         */
        const main = document.body.querySelector('main')
        const animLoading = document.createElement('div')
        animLoading.classList.add('loadingAnim')
        document.body.appendChild(animLoading)
        console.log('not loaded')
        setTimeout(function(){animLoading.style.opacity = 1}, 800)

        this.el.addEventListener('load', () => {            
            setTimeout(function(){
                main.style.display = 'flex'
                animLoading.style.opacity = 0
            }, 1200)
            setTimeout(function(){
                animLoading.remove()
                main.style.opacity = 1  
                const footer = document.querySelector('footer')
                footer.style.display = "flex"
            }, 1290)
        })
    }

}