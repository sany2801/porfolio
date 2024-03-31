const dot = document.querySelectorAll('.dot')
const wrapper = document.querySelector('.wrapper')
const popap = document.querySelector('.popapWin')
const winner = document.querySelector('.winner')
const btnRestart = document.querySelector('.restart') 
let arrCross = []
let arrZero = []
let count = 'cross'
// console.log(zero)
 
function hover (){
    let cont;

    wrapper.addEventListener('mouseover',(event)=>{
        cont = event.target.classList[1]
        console.log(cont)
        if(count === 'zero'){
            dot[cont].classList.add('hover-zero')
        }
    })
    wrapper.addEventListener('mouseout',(event)=>{
        cont = event.target.classList[1]
        console.log(cont)
        if(count === 'zero'){
            dot[cont].classList.remove('hover-zero')
        }
    })
    
}

function cross(){
    const cross = document.createElement('div')
    const crossBlock1 = document.createElement('div')
    const crossBlock2 = document.createElement('div')
    cross.classList.add('crosses')
    cross.append(crossBlock1, crossBlock2)
    return cross
}
function zero(){
    const zero = document.createElement('div')
    const zeroBlock = document.createElement('div')
    zero.append(zeroBlock)
    zero.classList.add('zero')
    return zero
}


function init(){
    let cont;
        wrapper.addEventListener('click',(event)=>{
            cont = event.target.classList[1]
            if(count === 'cross'){
                dot[cont].append(cross())
                dot[cont].classList.remove('crossesBg')
                arrCross.push(cont)
                count = 'zero'
            }
            else{
                dot[cont].classList.remove('zeroBg')
                dot[cont].append(zero())
                arrZero.push(cont)
                count = 'cross'
            }
            validation(arrCross, arrZero)
        })
        wrapper.addEventListener('mouseover',(event)=>{
            cont = event.target.classList[1]
            console.log(cont)
            if(count === 'zero'){
                dot[cont].classList.add('zeroBg')
            }
            else if(count === 'cross'){
                dot[cont].classList.add('crossesBg')
            }
        })
        wrapper.addEventListener('mouseout',(event)=>{
            cont = event.target.classList[1]
            console.log(cont)
            if(count === 'zero'){
                dot[cont].classList.remove('zeroBg')
            }
            else{
                dot[cont].classList.remove('crossesBg')
            }
        })
    }
    init()
    function validation(cross, zero){
        // console.log(cross,zero)
        if(cross.includes('0') && cross.includes('1') && cross.includes('2') ||
            cross.includes('3') && cross.includes('4') && cross.includes('5')||
            cross.includes('6') && cross.includes('7') && cross.includes('8')||
            cross.includes('0') && cross.includes('3') && cross.includes('6')||
            cross.includes('1') && cross.includes('4') && cross.includes('7')||
            cross.includes('2') && cross.includes('5') && cross.includes('8')||
            cross.includes('0') && cross.includes('4') && cross.includes('8')||
            cross.includes('2') && cross.includes('4') && cross.includes('6')){
                popap.classList.add('active')
                winner.innerHTML+=`WINNER CROS!!!`
            }
        else if(zero.includes('0') && zero.includes('1') && zero.includes('2') ||
            zero.includes('3') && zero.includes('4') && zero.includes('5')||
            zero.includes('6') && zero.includes('7') && zero.includes('8')||
            zero.includes('0') && zero.includes('3') && zero.includes('6')||
            zero.includes('1') && zero.includes('4') && zero.includes('7')||
            zero.includes('2') && zero.includes('5') && zero.includes('8')||
            zero.includes('0') && zero.includes('4') && zero.includes('8')||
            zero.includes('2') && zero.includes('4') && zero.includes('6')){
                popap.classList.add('active')
                winner.innerHTML+=`WINNER ZERO!!!`
            }
        else if(cross.length === 5){
            popap.classList.add('active')
            winner.innerHTML+=`DRAW!!!`
        }
}
btnRestart.addEventListener('click', restart)
    function restart(){
        popap.classList.remove('active')
        arrCross = []
        arrZero = []
        count = 'cross'
        winner.innerHTML = ``
        for(i=0; i<dot.length;i++){
            dot[i].innerHTML=``
        }
       
    }