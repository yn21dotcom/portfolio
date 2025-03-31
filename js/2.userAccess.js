let header = document.getElementsByTagName('header')[0];
header.addEventListener('mouseenter', function(){
    header.style.opacity = '1';
})
header.addEventListener('mouseleave', function(){
    header.style.opacity = '';
})

let signup = document.getElementById('signupInfo');
let login = document.getElementById('loginInfo');
let text = document.getElementsByClassName('text')[0];
document.getElementsByClassName('signup')[0].addEventListener('click', function(){
    login.style.opacity = 0;
    text.style.opacity = 0;
    text.style.zIndex = -1;
    signup.style.opacity = 1;
})
document.getElementsByClassName('login')[0].addEventListener('click', function(){
    signup.style.opacity = 0;
    login.style.opacity = 1;
})