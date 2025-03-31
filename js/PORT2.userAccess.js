let header = document.getElementsByTagName('header')[0];
function enter() {
    header.style.opacity = '1';
}
function leave() {
    header.style.opacity = '';
}

let loser = document.getElementById('loginInfo');
function signup() {
    loser.style.opacity = '0';
    document.getElementsByClassName('text')[0].style.opacity = 0;
    document.getElementsByClassName('text')[0].style.zIndex = -1;
    document.getElementById('signupInfo').style.opacity = '1';
}

function login() {
    document.getElementById('signupInfo').style.opacity = '0';
    loser.style.opacity = '1';
}