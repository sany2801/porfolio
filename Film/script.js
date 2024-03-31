const content = document.querySelectorAll('.content')
const closeBtn = document.querySelector('.close')
const active = document.querySelector('.active')

// closeBtn.style.display = 'block'

// console.log(closeBtn)
const close = () =>{
    
    content.forEach((item)=>{
        item.classList.remove('active')
    })
    
    
}




content.forEach((item)=>{
    item.addEventListener('click',()=>{
        close()
        item.classList.add('active')
        console.log(item)
        if(item.matches('.jocker')){
            closeBtn.style.left = '65%'
        }
        else if(item.matches('.johnWick')){
            closeBtn.style.left = '75%'
        }
        else if(item.matches('.helboy')){
            closeBtn.style.left = '85%'
        }
        else if(item.matches('.starwars')){
            closeBtn.style.left = '95%'
        }



    closeBtn.style.display = 'block'
    
    })
})


closeBtn.addEventListener('click',()=>{
    close()
closeBtn.style.display = 'none'

})
