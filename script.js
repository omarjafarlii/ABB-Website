const hamburgericon = document.querySelector("#hamburgericon");
let divhamburger = document.querySelector(".div-hamburger");

function toggle() {
  if (divhamburger.style.right === "-100%") {
    divhamburger.style.right = "0";
  } else {
    divhamburger.style.right = "-100%";
  }
}
function cancel() {
  divhamburger.style.right = "-100%";
}

// Checkbox JS
let checkbox = document.getElementById('checkbox')
let btndavam = document.getElementById('btn-davam')
let x = 0

checkbox.onclick = function() {
    x++
    if(x % 2) btndavam.style.background = '#2058BB';
    else btndavam.style.background = '#d6d9de';
}
// Kredit Kalkulyatoru

// Input-1
let mebleginhesablanmasi = document.getElementById("meblegin-hesablanmasi");
let kreditmeblegirange = document.getElementById("kredit-meblegi-range");

function meblegihesabla() {
  mebleginhesablanmasi.innerHTML = kreditmeblegirange.value;
  kredit()
}

// Input-2
let taksithesablanmasi = document.getElementById("taksit-hesablanmasi");
let taksitrange = document.getElementById("taksit-range");

function taksit() {
  taksithesablanmasi.innerHTML = taksitrange.value;
  kredit()
}

// Input-3
let faizinhesablanmasi = document.getElementById("faizin-hesablanmasi");
let faizrange = document.getElementById("faiz-range");

function faiz() {
  faizinhesablanmasi.innerHTML = faizrange.value;
  kredit()
}

function kredit() {
    //Kredit umumi
    let x = eval(kreditmeblegirange.value * faizrange.value) / 100; 
    umumi.innerHTML = Math.ceil(+kreditmeblegirange.value + +x)
    //Kredit ayliq
    ayliq.innerHTML = Math.ceil(umumi.innerHTML / taksitrange.value)
}

//Valyuta
    let manat = document.getElementById('manat-input')
    let xaricipul = document.getElementById('converToAzn-input')
    let valyuta = document.getElementById('valyuta')
    let valyuta2 = document.getElementById('valyuta2')
    function convert(){
        xaricipul.value = (manat.value * valyuta.value)
    }
    function convertToAzn(){
        manat.value = (xaricipul.value * valyuta2.value)
    }