let subBox = document.getElementsByClassName('subBox');
let pic = document.getElementsByClassName('pic');
let gray = document.getElementsByClassName('gray');
function enter(num) {
    subBox[num].style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
    subBox[num].style.color = 'rgba(80, 80, 80, 0.8)';
    
    // changing text color
    if(num == 0) {
        gray[0].style.color = 'rgba(150, 150, 150, 0.8)';
        gray[1].style.color = 'rgba(150, 150, 150, 0.8)';
    }
    else if(num == 1) {
        gray[2].style.color = 'rgba(150, 150, 150, 0.8)';
    }
    else if(num == 2) {
        
    }
    else if(num == 4) {
        gray[3].style.color = 'rgba(150, 150, 150, 0.8)';
    }



}
function leave(num) {

    // changing text color
    subBox[num].style.backgroundColor = '';
    subBox[num].style.color = 'rgba(255, 255, 255, 0.8)';

    for(i=0; i<=3; i++) {
        gray[i].style.color = 'rgba(255, 255, 255, 0.6)';
    }
}