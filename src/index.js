const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
})

document.querySelectorAll("link").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    menu.classList.remove("active");
}))
// <<<<<<< HEAD

// // clock.js *************************

// =======
// >>>>>>> 9d5abac1506e212c7817581293a62598ba77899a
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const daymb=document.getElementById("day1");
const hourmb=document.getElementById("hour1");
const minmb=document.getElementById("minute1");
const secmb=document.getElementById("second1");
const currentYear = new Date().getFullYear();

const DJFTime = new Date(`March 30 ${currentYear} 00:00:00`);

//Update countdown time
function updateCountdown()
{
    const currentTime = new Date();
    const diff = DJFTime - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;

    daymb.innerHTML = d;
    hourmb.innerHTML = h < 10 ? '0' + h : h;
    minmb.innerHTML = m < 10 ? '0' + m : m;
    secmb.innerHTML = s < 10 ? '0' + s : s;
}

setInterval(updateCountdown, 1000);


var hd=document.getElementById("lihoatdong");
var dt=document.getElementById("lidoitac");

const hovering=()=>{
    document.style.cursor = Pointer;
}

const hdnoibat=()=>{
    document.getElementById("hoatdong").scrollIntoView();
}
const doitac=()=>{
    document.getElementById("doitac").scrollIntoView();
}
hd.addEventListener("onmouseover", hovering());
dt.addEventListener("onmouseover", hovering());
hd.addEventListener("click", hdnoibat());
dt.addEventListener("click", doitac())