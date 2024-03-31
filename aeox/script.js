const inputName = document.querySelector('#formName')
const phone = document.querySelector('#formPhone')
const email = document.querySelector('#formEmail')

const popap = document.querySelector('.wrapper-popap')

const close_popap = document.querySelector('.close_send')
close_popap.addEventListener('click',()=>{
    popap.style.display = 'none'
})




document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('form');
    form.addEventListener('submit',send)

    async function send (e){
        e.preventDefault();
     
        let formData = new FormData(form);


        
popap.style.display = 'block'
        let response = await fetch('send.php',{
            method: 'POST',
            body: formData
        });


        if (response.ok){
            let result = await response.json();
            //popap.style.display = 'block'
            form.reset();
        }else{
            alert('Ошибка!!!!!')
            //form.classList.remove('sending')
        }
    }
})