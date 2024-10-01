let form=document.getElementById('login form')

form.addEventListener ('submit',function(reload){
    reload.preventDefault();//prevent page load on submit
    //validation
    function validateForm(){
        let valid = true;
    
        //clear error messages
        document.getElementById('nameError').innerHTML=''
        document.getElementById('emailError').innerHTML=''
        document.getElementById('passwordError').innerHTML=''
        document.getElementById('age').innerHTML=''
    }
    // validate name
    let name=document.getElementById('name').value;
    if (name === ""){
        document.getElementById('name Error').innerHTML='Error!Name is required'
        valid=false;
    }
    //validate email
        let email=document.getElementById('email').value;
    if (email === ""){
        document.getElementById('emailError').innerHTML='Error!Email is required'
        valid=false;
    }
    //validate password
        let password=document.getElementById('password').value;
    if (password === "" ){
        document.getElementById('password Error').innerHTML='Error!Password is required'
        valid=false;
    }else if(password.length<8){
        document.getElementById('passwordError').innerHTML='Error!Password must be at least 8 characters long!'
    }
    //validate age
    let age=document.getElementById('age').value;
if (age === " "){
    document.getElementById('ageError').innerHTML='Error!Age is required'
    valid=false;
}else if(isNaN(age) || age <18>100){
    document.getElementById('ageError').innerHTML='Error!Age must be a number not less than 18 and not more than 100!'
}

    
}
)
