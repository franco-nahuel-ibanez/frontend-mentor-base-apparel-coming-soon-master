function validator(valor){
    let expReg =/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    
    if(expReg.test(valor)) {

        document.querySelector('.message').innerHTML = '';
        document.querySelector('.error').style.display = 'none';
        document.querySelector('input').style.border = '1px solid #ccc';
    
    }else{
        
        document.querySelector('input').style.border = '1.5px solid var(--soft-red)';
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.message').innerHTML = 'Place provide a valid email';
    }
}

const btn = document.querySelector('.arrow');
btn.addEventListener('click', () => {
    let email = document.querySelector('input').value;
    validator(email)
})