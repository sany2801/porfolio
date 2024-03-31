const downPayment = document.querySelector('.downPayment')
const replenishment = document.querySelector('.replenishment')
const interestRate = document.querySelector('.interestRate')
const term = document.querySelector('.term')
const submit = document.querySelector('.submit')
const result = document.querySelector('.result')
const range = document.querySelector('#range')
const rangeValue = document.querySelector('.rangeValue')
const tableResult = document.querySelector('.tableResult')
const totalValue = document.querySelector('.totalValue')
const replenishmentValue = document.querySelector('.replenishmentValue')
const interestValue = document.querySelector('.interestValue')


submit.addEventListener('click',(event)=>{
    event.preventDefault()
    tableResult.innerHTML = "";
    const arr = []
    for(i=1; i<= +term.value+1 ;i++){
        arr.push(i)
		console.log(arr)
    }
	// debugger;
    const arrRed =  arr.reduce(function(acum, sum, index){
        tableResult.innerHTML +=`
        <tr class = 'index${index}'>
                <td>${index}</td>
                <td>${(acum - replenishment.value).toFixed(3)}</td>
        </tr>`
        totalValue.innerHTML =`
        ${(acum - replenishment.value).toFixed(3)}`
        replenishmentValue.innerHTML =`
        ${+downPayment.value + +replenishment.value * (+term.value-1)}`
        interestValue.innerHTML =`
        ${(((acum - replenishment.value)) - (+downPayment.value + +replenishment.value * (+term.value-1))).toFixed(3)}`
			return (acum + (((acum/100)* +interestRate.value)/12)) + +replenishment.value;
		
    },+downPayment.value)
})



// const array = [1,2,3,4,5]
// console.log(array)
// array.reduce(function(acum, sum, index, arr){
// 	console.log(`acum: ${acum}, sum: ${sum}, index: ${index}, arr: ${arr}`)
// 	return acum + sum
// },0)



