let img = document.getElementsByTagName('img');

// peripheral image color change
for(let i=0; i<img.length; i++) {
    img[i].style.transition = 'all 0.5s';
    img[i].style.filter = 'grayscale(90%)';

    img[i].addEventListener('mouseenter', function(){
        img[i].style.scale = '1.1';
        img[i].style.filter = '';
    })

    img[i].addEventListener('mouseleave', function(){
        img[i].style.scale = '1';
        img[i].style.filter = 'grayscale(90%)';
    })
}

// center image side-positioned
let item_no = ['19', '60', '27', '16', '23', '24', '48', '36', '42', '2', '28', '52', '58', '38', '39', '40', '12', '15', '56', '37', '44', '4', '47', '51']
for( let i=0; i<24; i++) {
    let slideBox = document.getElementById('slideBox');
    slideBox.innerHTML += `
    <div class="slideImgBox">
        <img src="./img/koneil/${item_no[i]}.jpg" alt="" class="slideImg">
    </div>
    `
}

// center image slide in
let idx = -1
function slide(num) {
    let slideImgBox = document.getElementsByClassName('slideImgBox');

    slideImgBox[num].style.transition = 'all 1s';
    slideImgBox[num].style.left = '50%';
    slideImgBox[num].style.transform = 'translate(-50%, -50%)';
    slideImgBox[num].style.zIndex = 100000;
    // slideImgBox[num].style.transitionDelay = '0s';
    slideImgBox[num].style.filter = '';
    
// center image slide out
    if(idx >= 0 && idx != num) {
        let i = idx;
        slideImgBox[i].style.zIndex = 10;
        setTimeout(() => {
            console.log(i)
            slideImgBox[i].style.left = '100.8%';
            slideImgBox[i].style.transform = 'translate(0%, -50%)';
            // slideImgBox[idx].style.transitionDelay = '0.5s';
            
        }, 500);
    }
    idx = num;

    document.getElementsByClassName('desc')[0].style.opacity = '0';

// center image description
    setTimeout(() => {
        document.getElementsByClassName('desc')[0].innerHTML = `
        <div><b>${ITEM_LIST[num].title}</b></div>
        <div>${ITEM_LIST[num].size}</div>
        <div>${ITEM_LIST[num].medium}</div>
        <div>${ITEM_LIST[num].status}</div>
        <div>${ITEM_LIST[num].price}</div>
        <div>${ITEM_LIST[num].find}</div>
        `
        document.getElementsByClassName('desc')[0].style.opacity = '1';
    }, 400);
}
