let body = document.getElementsByTagName('body')[0];
let header = document.getElementsByTagName('header')[0];
let recentWorks = document.getElementsByClassName('recentWorks')[0];
let recTitle = document.getElementsByClassName('recTitle');
let archOTop = document.getElementsByClassName('archive')[1].offsetTop;
let chk = true;

document.addEventListener('scroll', function(){
    let scrollY = window.scrollY;
    let statOTop = document.getElementsByClassName('statement')[0].offsetTop;
console.log(scrollY,archOTop)
    // for ipad: returning page to default after exiting recent works
    if(scrollY >= archOTop) {
        body.style.backgroundColor = '';
        header.style.backgroundColor = 'white';
        recentWorks.style.backgroundColor = '';

        if(chk && scrollY + 300 <= statOTop) {
            header.style.backgroundColor = 'transparent';
            header.style.color = 'white';
        }

        for(let i=0; i<10; i++) {
            recTitle[i].style.color = '';
            recTitle[i].style.scale = '';
            recTitle[i].style.marginLeft = '';
        }
    }

    // changing header background color
    if(chk && scrollY + 300 > statOTop) {
        header.style.backgroundColor = 'white';
        header.style.color = 'black';
        header.style.transition = '';
        header.style.borderBottom = '1px solid rgb(200, 200, 200)';
        chk = false;
    }
    else if(!chk && scrollY + 300 <= statOTop) {
        body.style.backgroundColor = '';
        recentWorks.style.backgroundColor = '';
        header.style.backgroundColor = 'transparent';
        header.style.color = 'white';
        header.style.transition = '';
        header.style.borderBottom = 'none';
        document.getElementsByClassName('works')[0].innerHTML = '';

        for(let i=0; i<10; i++) {
            recTitle[i].style.color = '';
            recTitle[i].style.scale = '';
            recTitle[i].style.marginLeft = '';
        }
        chk = true;
    }
})

// recent works
let titles = document.getElementsByClassName('titles')[0];

let recWork = [10, 6, 8, 59, 61, 14, 30, 50, 5, 62];
let recBg = ['#bbc5e2', '#d9bfc6', '#ffe182', '#9eb8da', '#a96882', '#648762', '#8fa2a7', '#d97763', '#a6c6c8', '#fffaca']

// adding recent work titles
for(let i=0; i<10; i++) {
    titles.innerHTML += `
    <div class="recTitle">${ITEM_LIST[recWork[i]].title}</div>
    `;
}

for(let i=0; i<10; i++) {

    // configuring css for title mouseenter/mouseleave
    recTitle[i].addEventListener('mouseenter', function(){
        titles.style.color = 'rgba(30, 30, 30, 0.2)';
        this.style.color = 'rgb(30, 30, 30)';
        this.style.marginLeft = '10vw';
        this.style.scale = '1.1'
        recentWorks.style.backgroundColor = `${recBg[i]}`;
        recentWorks.style.borderTop = '1px solid';
        recentWorks.style.borderBottom = '1px solid';
        recentWorks.style.borderColor = 'rgb(200, 200, 200)';
        body.style.backgroundColor = `${recBg[i]}`;
        header.style.backgroundColor = `${recBg[i]}`;
        header.style.transition = 'all 0s';
        document.getElementsByClassName('works')[0].innerHTML = `<img src="./img/koneil/${recWork[i]}.jpg" id="p${i}">`;
    })

    recTitle[i].addEventListener('mouseleave', function(){
        this.style.color = '';
        this.style.scale = '';
        this.style.marginLeft = '';
    })

    // returning everything to normal once user exits recent works
    recentWorks.addEventListener('mouseleave', function(){
        recentWorks.style.backgroundColor = '';
        recentWorks.style.border = 'none';
        body.style.backgroundColor = '';
        body.style.backgroundColor = '';
        header.style.backgroundColor = 'white';
        // header.style.transition = '';
        recTitle[i].style.color = '';
        document.getElementsByClassName('works')[0].innerHTML = '';
    })
}

// archive & swiper
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    autoplay: {
        delay: 1000
    },
    speed: 500
});

let view = document.getElementsByClassName('viewMore')[0];
function viewMore() {
    view.style.color = "white";
    view.style.backgroundColor = "rgb(200, 200, 200)";
}
function viewNo() {
    view.style.color = "rgb(200, 200, 200)";
    view.style.backgroundColor = "";
}