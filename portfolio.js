
const ham = document.getElementById("ham");
const menu = document.getElementById("nav");
const head = document.querySelector("header");
ham.onclick = function() {
    ham.classList.toggle("active");
    menu.classList.toggle("active");
}




var images = new Array (
    "ss1.png",
    "ss2.png",
    "ss3.png",
    "ss4.png"
)
var link = new Array (
    "https://muskan308.github.io/etq-store/main.html",
    "https://muskan308.github.io/MeriTicket/about.html",
    "https://muskan308.github.io/veganproject/project1.html",
    "https://muskan308.github.io/hotel/main.html"
)
const next = document.getElementById("next");
const prev = document.getElementById("prev");

const left2 = document.querySelector(".left2");
const mid = document.querySelector(".mid");
const right2 = document.querySelector(".right2");

const pre = document.getElementById("preA");

let i = 0;
let j = 1;
let k = 2;
next.onclick = () => {
    if(i<5 ){
        if(i==4 ){
        i=0;
        }
        if(j==4 ){
        j=0;
        }
        if(k==4 ){
        k=0;
        }
       left2.style.backgroundImage = "url('"+images[i]+"')";
       mid.style.backgroundImage = "url('"+images[j]+"')";
       pre.href = link[j];
       right2.style.backgroundImage = "url('"+images[k]+"')";
        i++;
        j++;
        k++;
    }
}
prev.onclick = () => {
    if(i<5){
     if(i == 0)
     i=4;
     if(j == 0)
     j=4;
     if(k == 0)
     k=4;
        left2.style.backgroundImage = "url('"+images[i-1]+"')";
        mid.style.backgroundImage = "url('"+images[j-1]+"')";
        pre.href = link[j-1];
        right2.style.backgroundImage = "url('"+images[k-1]+"')";
        i--;
        j--;
        k--;
    }
}

