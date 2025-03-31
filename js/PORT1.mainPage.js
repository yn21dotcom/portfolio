let chk = true;
let chk2 = true;

document.addEventListener('scroll', function(){

    // positioning mainBanner quote
    let scrollY = window.scrollY
    let quote = document.getElementsByClassName('quote')[0];
    let quoteRect = quote.getBoundingClientRect();
    let statOTop = document.getElementsByClassName('statement')[0].offsetTop;
    if(chk && scrollY + 600 > statOTop) {
        quote.style.position = 'absolute';
        quote.style.top = `${((scrollY + quoteRect.top)/statOTop) *100}%`;
        chk = false;
    }
    else if(!chk && scrollY + 600 <= statOTop){
        quote.style.position = 'fixed';
        quote.style.top = '10%';
        chk = true;
    }

    // changing header baackground color
    if(chk2 && scrollY + 300 > statOTop) {
        document.getElementsByTagName('header')[0].style.backgroundColor = 'white';
        document.getElementsByTagName('header')[0].style.color = 'black';
        document.getElementsByTagName('header')[0].style.borderBottom = '1px solid rgb(200, 200, 200)';
        chk2 = false;
    }
    else if(!chk2 && scrollY + 300 <= statOTop) {
        document.getElementsByTagName('header')[0].style.backgroundColor = 'transparent';
        document.getElementsByTagName('header')[0].style.color = 'white';
        document.getElementsByTagName('header')[0].style.borderBottom = '0';
        chk2 = true;
    }

    // showing footer
    let fqWrapOTop = document.getElementsByClassName('fqWrap')[0].offsetTop;
    let fQuote = document.getElementsByClassName('footerQuote')[0];
    if(scrollY + 61 >= fqWrapOTop) {
        fQuote.style.visibility = 'visible';
    }
    else if(scrollY + 61 < fqWrapOTop) {
        fQuote.style.visibility = 'hidden';

    }

    // let footerOTop = document.getElementsByTagName('footer')[0].offsetTop;
    // if(scrollY + 804.5 >= footerOTop) {
    //     fQuote.style.position = 'absolute';
    //     fQuote.style.top = '61%';
    // }
    // else if(scrollY + 804.5 < footerOTop) {
    //     fQuote.style.position = 'fixed';
    //     fQuote.style.top = '40%';
    // }

    let mfooterOTop = document.getElementsByClassName('mainFooter')[0].offsetTop;
    if(scrollY + 804.5 >= mfooterOTop) {
        fQuote.style.position = 'absolute';
        fQuote.style.top = '61%';
    }
    else if(scrollY + 804.5 < mfooterOTop) {
        fQuote.style.position = 'fixed';
        fQuote.style.top = '40%';
    }
})

window.addEventListener('load', function() {
let scrollY = window.scrollY;
let quote = document.getElementsByClassName('quote')[0];
let statOTop = document.getElementsByClassName('statement')[0].offsetTop;

if (scrollY + 600 <= statOTop) {
    quote.style.position = 'fixed';
    quote.style.top = '10%';
    chk = true;
} else {
    quote.style.position = 'absolute';
    quote.style.top = `${((scrollY + quote.getBoundingClientRect().top) / statOTop) * 100}%`;
    chk = false;
}
});

console.log('scrollY', scrollY);
let footerOTop = document.getElementsByTagName('footer')[0].offsetTop;
console.log('footerOTop', footerOTop);

// recent works
let titl = ['titlZero', 'titlOne', 'titlTwo', 'titlThree', 'titlFour', 'titlFive', 'titlSix', 'titlSeven', 'titlEight', 'titlNine', ]
function titlEnter(num) {
    // let recBack = ['#606f9752', '#b3607640', '#e6b20e85', '#5285c885', '#6b32568a', '#1f951954', '#a5b9bfba', '#c43a1e75', '#e5e5e1', '#dad58991'];
    let recBack = ['#bbc5e2', '#d9bfc6', '#ffe182', '#9eb8da', '#a96882', '#648762', '#8fa2a7', '#d97763', '#a6c6c8', '#fffaca'];
    let recWork = [10, 6, 8, 59, 61, 14, 30, 50, 5, 62]

    document.getElementsByClassName('titles')[0].style.color = 'rgba(255, 255, 255, 0.4)';
    document.getElementById(titl[num]).style.color = 'black';
    document.getElementsByClassName('recentWorks')[0].style.backgroundColor = `transparent`;
    document.getElementsByTagName('body')[0].style.backgroundColor = `${recBack[num]}`;
    // document.getElementsByTagName('header')[0].style.backgroundColor = `${recBack[num]}`;
    // document.getElementsByTagName('header')[0].style.transition = `all 0s`;
    document.getElementsByClassName('works')[0].innerHTML = `<img src="./img/koneil/${recWork[num]}.jpg">`
}

function titlLeave(num) {
    document.getElementById(titl[num]).style.color = 'rgba(255, 255, 255, 0.4)';
}

let recentWorks = document.getElementsByClassName('recentWorks')[0];

recentWorks.addEventListener('mouseleave', function(){
    document.getElementsByTagName('body')[0].style.backgroundColor = ``;
    document.getElementsByClassName('recentWorks')[0].style.backgroundColor = `rgb(240, 240, 240)`;
    // document.getElementsByClassName('titles')[0].style.color = '';
    // document.getElementsByTagName('header')[0].style.transition = ``;
    // document.getElementsByTagName('header')[0].style.backgroundColor = ``;

    for(let i=0; i<titl.length; i++) {
        document.getElementById(titl[i]).style.color = 'rgb(200, 200, 200)';
    }
})

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