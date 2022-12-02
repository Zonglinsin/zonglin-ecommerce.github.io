var MenuItems = document.getElementById("MenuItems");
    
MenuItems.style.maxHeight = "0px"
    
function menutoggle(){
    if(MenuItems.style.maxHeight == "0px")
        {
            MenuItems.style.maxHeight = "200px"
        }
    else
        {
            MenuItems.style.maxHeight = "0px"
        }
}
        
var LoginForm = document.getElementById("LoginForm");
var RegisterForm = document.getElementById("RegisterForm"); 
var Indicator = document.getElementById("Indicator");

function register(){

    RegisterForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)"
    Indicator.style.transform = "translateX(100px)"
    nameError.innerHTML = '';
    passError.innerHTML = '';
    emailError.innerHTML = '';
    registerError.innerHTML = '';
    loginError.innerHTML = '';
    

}

function login(){

    RegisterForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)"
    Indicator.style.transform = "translateX(0px)"
    nameError.innerHTML = '';
    passError.innerHTML = '';
    emailError.innerHTML = '';
    registerError.innerHTML = '';
    loginError.innerHTML = '';
}

//Popup/
let popup = document.getElementById("popup");

function openPopup(){
    popup.style.visibility = 'visible'
}

function closePopup(){
    popup.style.visibility = 'hidden'
}


/*validation*/
var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error')
var passError = document.getElementById('pass-error')
var registerError = document.getElementById('register-error')
var loginError = document.getElementById('login-error')
var UsernameError = document.getElementById('Username-error');
var LoginpassError = document.getElementById('Loginpass-error')
var ContactnameError = document.getElementById('Contactname-error')
var SubjectError = document.getElementById('subject-error')
var MessageError = document.getElementById('message-error')
var contactError = document.getElementById('contact-error')

function validateName(){
    var name = document.getElementById('username').value;

    if(name.length == 0){
        nameError.innerHTML = 'Username cant be blank!';
        return false;
    }
    if((name.length <5) || (name.length >15)){
        nameError.innerHTML = 'Username Should be between 6-15 characters'
        return true;
    }
    nameError.innerHTML = '<span class="valid">valid</span>';
    return true;  
}
function validateContactName(){
    var Contactname = document.getElementById('Contactname').value;

    if(Contactname.length == 0){
        ContactnameError.innerHTML = 'Name cant be blank!';
        return false;
    }
    if(Contactname.length < 3){
        ContactnameError.innerHTML = 'Name Invalid';
        return false;
    }
    ContactnameError.innerHTML = '<span class="valid">valid</span>';
    return true;  
}
function validateEmail(){
    var email = document.getElementById('email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email cant be blank!';
        return false;
    }
    if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        emailError.innerHTML = 'Email Invalid';
        return false;
    }
    emailError.innerHTML = '<span class="valid">valid</span>';
    return true;  
}
function validateSubject(){
    var subject = document.getElementById('subject').value;

    if(subject.length == 0){
        SubjectError.innerHTML = 'Subject cant be blank!';
        return false;
    }
    if(subject.length < 3){
        SubjectError.innerHTML = 'Subject Invalid';
        return false;
    }
    SubjectError.innerHTML = '<span class="valid">valid</span>';
    return true;  
}
function validateMessage(){
    var message = document.getElementById('message').value;

    if(message.length == 0){
        MessageError.innerHTML = 'Message cant be blank!';
        return false;
    }
    MessageError.innerHTML = '<span class="valid">valid</span>';
    return true;  
}
function validatePass(){
    var pass = document.getElementById('pass').value;

    if(pass.length == 0){
        passError.innerHTML = 'Password cant be blank!';
        return false;
    }
    if((pass.length <8) || (pass.length >15)){
        passError.innerHTML = 'Password Should be between 8-15 characters';
        return true;
    }
    passError.innerHTML = '<span class="valid">valid</span>';
    return true;  
}
function validateUsername(){
    var Loginname = document.getElementById('LoginName').value;

    if(Loginname.length == 0){
        UsernameError.innerHTML = 'Username cant be blank!';
        return false;
    }
    UsernameError.innerHTML = '<span class="valid">valid</span>';
    return true;  
}
function validateLoginPass(){
    var Loginpass = document.getElementById('Loginpass').value;

    if(Loginpass.length == 0){
        LoginpassError.innerHTML = 'Password cant be blank!';
        return false;
    }
    LoginpassError.innerHTML = '<span class="valid">valid</span>';
    return true;  
}
function validateRegisterForm(){
    if(!validateName() || !validateEmail() || !validatePass()){
        registerError.style.display = 'block'
        registerError.innerHTML = 'Invalid Registration';
        setTimeout(function(){registerError.style.display = 'none';}, 3000)
        return false;
    }
    else{
        popup.style.visibility = 'visible'
        return true;
    }
}
function validateLoginForm(){
    if(!validateUsername() || !validateLoginPass()){
        loginError.style.display = 'block'
        loginError.innerHTML = 'Invalid Login';
        setTimeout(function(){loginError.style.display = 'none';}, 3000)
        return false;
    }
    else{
        popup.style.visibility = 'visible'
        return true;
    }  
}
function validateContactForm(){
    if(!validateContactName()||!validateEmail()||!validateMessage()||!validateSubject()){
        contactError.style.display = 'block'
        contactError.innerHTML = 'Invalid Submission';
        setTimeout(function(){contactError.style.display = 'none';}, 3000)
        return false;
    }
    else{
        popup.style.visibility = 'visible'
        return true;
    }
}

