const btnAdd = document.querySelector('.add__todo')
const btnDeleteAll = document.querySelector('.delet__todo')
const progresCard = document.querySelector('.progres__card')
const comletedCard = document.querySelector('.comleted__card')
const deletedCard = document.querySelector('.deleted__card')
const input = document.querySelector('.input__todo')
const popapEdit = document.querySelector('.popap-edit')
const inputPopapEdit = document.querySelector('.input-edit')
const btnPopapSave = document.querySelector('.btn-save')
const btnPopapClose = document.querySelector('.btn-close')
let progresTasks = []
let completedTasks = []
let deletedTasks = []

btnAdd.addEventListener('click',()=>{
    if(input.value == ""){
        return null
    }
    progresTasks.push({
        tittle: input.value,
        id: Date.now()
    })
    input.value=''
    console.log(progresTasks)
    initProgres()
  
})
function initProgres (){
    progresCard.innerHTML=``
    for(i=0; i<progresTasks.length;i++){
        progresCard.append(newCard(progresTasks[i].tittle,progresTasks[i].id))  
    }   
}
function initCompleted (){
    comletedCard.innerHTML = ``
    for(i=0; i<completedTasks.length;i++){
        comletedCard.append(newCard(completedTasks[i].tittle,completedTasks[i].id))
    }   
}
function initDeleted (){
    deletedCard.innerHTML = ``
    for(i=0; i<deletedTasks.length;i++){
        deletedCard.append(newCard(deletedTasks[i].tittle,deletedTasks[i].id))
    }   
}

   

btnDeleteAll.addEventListener('click',()=>{
    progresTasks = [];
    completedTasks =[];
    deletedTasks = [];
    initProgres()
    initDeleted()
    initCompleted()
})

function dragAndDrop(cards){
    const listCard = document.querySelectorAll('#card')

    const dragStart = function(){
        // let idCards = this.card[0]
        // return idCards
        setTimeout(()=>{
            this.classList.add('hiden')
            // console.log(this)
            // console.log(this.closest('#card').classList[0])
        },0)
    }  
    const dragEnd = function(){
        this.classList.remove('hiden')
        console.log(this.closest('#card').classList[0])
        return this.closest('#card').classList[0]
    }
    function dragOver(event){
        event.preventDefault()
        // console.log(this.classList +' over')
        return event
    }
    function dragEnter(){
        // console.log(this.classList +' Enter')
        this.classList.add('hovered')
        // console.log(this.classList)
    }
    function dragLeave (){
        // console.log(this.classList +' leave')
        this.classList.remove('hovered')
    }
    function dragDrop (){
        // console.log(this.classList[0])
        initDrop(1,dragEnd(),this.classList[0])
    }

   function initDrop(idCards, taskStart, taskEnd){
        console.log(idCards,taskStart,taskEnd)
   }

    listCard.forEach((i)=>{
        i.addEventListener('dragover', dragOver)
        i.addEventListener('dragenter', dragEnter)
        i.addEventListener('dragleave', dragLeave)
        i.addEventListener('drop', dragDrop)
    })

    cards.addEventListener('dragend',dragEnd)
    cards.addEventListener('dragstart',dragStart)
}

function newCard (text,id){
    const card = document.createElement('div')
    card.classList.add('list-card', 'card')
    card.setAttribute('id', id)
    card.setAttribute('draggable', true)
    card.append(buttonComplete())
    card.append(cardText(text))
    card.append(buttonDelte())
    card.append(buttonEdit())
    dragAndDrop(card)
return card;
}
function buttonComplete(){
    const btnComplete = document.createElement('button')
    btnComplete.classList.add('btn-cmpl', 'btn-card')
    btnComplete.innerText='✔'

    btnComplete.addEventListener('click',(event)=>{
        console.log(event.target.closest('div'))
        let parentElement = +event.target.closest('div').id
        console.log(parentElement)
        for(let i =0 ; i<progresTasks.length; i++){
            if(progresTasks[i].id === parentElement){
                completedTasks.push(progresTasks[i])
                progresTasks.splice(i,1)
                console.log(completedTasks)
                initProgres()
                initCompleted()
            }
        }
    })
    return btnComplete
}
function buttonDelte(){
    const btnDelete = document.createElement('button');
    btnDelete.classList.add('btn-delete', 'btn-card')
    btnDelete.innerText="🗑️"

    btnDelete.addEventListener('click',(event)=>{
        console.log('click')
        let parentElement = +event.target.closest('div').id
        for(let i = 0; i<progresTasks.length;i++){
            if(progresTasks[i].id === parentElement){
                deletedTasks.push(progresTasks[i])
                progresTasks.splice(i,1)
                initProgres()
                initDeleted()                
            }
        }
        for(let i = 0; i<completedTasks.length;i++){
            if(completedTasks[i].id === parentElement){
                deletedTasks.push(completedTasks[i])
                completedTasks.splice(i,1)
                comletedCard.innerHTML=``
                initCompleted()
                initProgres()
                initDeleted()                

            }
        }
    })
    return btnDelete
}
function  buttonEdit(){
    const buttonEdit = document.createElement('button');
    buttonEdit.classList.add('btn-edit', 'btn-card')
    buttonEdit.innerText='✏️';

    buttonEdit.addEventListener('click',(event)=>{
       let parentElementId = +event.target.closest('div').id
       popapEdit.style.display="block"
       
            for(i=0; i <= progresTasks.length; i++) {
                if(progresTasks[i].id === parentElementId){
                inputPopapEdit.value = progresTasks[i].tittle
                break;
            }
        }
        btnPopapSave.addEventListener('click', ()=>{
            popapEdit.style.display = 'none'
            console.log(i)
            console.log(progresTasks[i])
            progresTasks[i].tittle = inputPopapEdit.value
            initProgres()
        })
})
    return buttonEdit
}
function cardText(text){
    const cardText = document.createElement('div');
    cardText.classList.add('card-text')
    cardText.innerText=text;
    return cardText
}
btnPopapClose.addEventListener('click',()=>{
    popapEdit.style.display = "none";
})



