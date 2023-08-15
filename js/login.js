
document.getElementById('btn-submit').addEventListener ('click', function(){
    
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    const passField = document.getElementById('pass');
    const pass = passField.value;

    if(email === 'Admin' && pass === 'Admin'){
       window.location.href = 'bank.html';
    }
    else {
        alert('You Entered a wrong password or E-mail');
    }


})