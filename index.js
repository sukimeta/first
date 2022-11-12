//canvas闖ｴ諛茨ｿｽ
  const canvas = document.querySelector('#canvas');
  canvas.width = 360;
  canvas.height = 600;
  const canvastx = canvas.getContext('2d');


  var imgp001 = new Image();
  var imgp002 = new Image();
  var imgp003 = new Image();

  var pa = false;
  var pd = false;
  var pw = false;
  var ps = false;
  var pp = false;

  var pj = false;
  var pl = false;
  var pi = false;
  var pk = false;

  var go = false;
  let loadon = false;

  var jamp = false;
  var jampy = 0;


window.setInterval( inner , 100 );
function inner(){
  document.getElementById('input').innerHTML = x + ";" + z + ";" + y ;
  document.getElementById('output').innerHTML = jampy;
}


//                 [x,z]
const block0001 = [0,0];
const block0002 = [-1,0];

const block0003 = [0,1];
const block0004 = [-1,1];

const block0005 = [0,2];
const block0006 = [-1,2];


const block0 = [ -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const block1 = [ -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const block2 = [ -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const block3 = [ -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const block4 = [ -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const block5 = [ -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const block6 = [ -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const block7 = [ -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const block8 = [ -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const block9 = [ -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const block10 = [ -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const block11 = [ -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const block12 = [ -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const block13 = [ -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const moby = [0];
const mob = [150,50];


window.setInterval( display , 20 );

let fps = 0;
let x = 0;
let y = 0;
let z = 0;
let cam = 90;

function display(){
  if(loadon === false){
    return;
  }
  fps++;
  if(fps === 50){
    fps = 0;
  }
  canvastx.globalAlpha = 1;
  canvastx.fillStyle = "rgb(255, 255, 255)";
  canvastx.fillRect(0,0,360,600);

  count = -10000;
  Zcount = 0;
  indicate(Math.floor(z), block0);
  Zcount = 1;
  indicate(Math.floor(z), block1);
  Zcount = 2;
  indicate(Math.floor(z), block2);
  Zcount = 3;
  indicate(Math.floor(z), block3);
  Zcount = 4;
  indicate(Math.floor(z), block4);
  Zcount = 5;
  indicate(Math.floor(z), block5);
  Zcount = 6;
  indicate(Math.floor(z), block6);
  Zcount = 7;
  indicate(Math.floor(z), block7);
  Zcount = 8;
  indicate(Math.floor(z), block8);
  Zcount = 9;
  indicate(Math.floor(z), block9);
  Zcount = 10;
  indicate(Math.floor(z), block10);
  Zcount = 11;
  indicate(Math.floor(z), block11);
  Zcount = 12;
  indicate(Math.floor(z), block12);
  Zcount = 13;
  indicate(Math.floor(z), block13);

  obj(mob[0],mob[1]);
}
let Zcount = 0;
let count = -10000;
const fif = 30;
function indicate(n,m){
  let len = m.length;
  let size = fif;
  let yy = 0;
  let index = 0;
  size = fif / ((Zcount - z / fif) * 1); //  50 * ((Zcount - z / 50) * 1)
  if(size <= 0){
    return;
  }
  if(z <= Zcount * size && count <= 0){//(z <= Zcount * size && (Zcount - 1) * size <= z)
    yy = fif * ((Zcount - z / fif) * 1);
    count = yy;
  }else if(z < Zcount * fif){
    count = count + size;
    yy = count;
  }else{
    yy = fif * ((Zcount - z / fif) * 1);
  }
  index = 0;
  while(index < len){
    canvastx.globalAlpha = (size / fif * 1.3) * (1 - 0.03 * Math.abs(x / fif + m[index]));
    if(1 < size / fif){
      canvastx.globalAlpha = 1;
    }
    canvastx.drawImage(imgp001, 180 + size * m[index] + (x * (size / fif)),600 - yy + y, size, size);
    index++;
  }
  moby[Zcount] = yy;
}


function obj(n,m){
  let size = fif / ((m / fif - z / fif) * 1); //  50 * ((Zcount - z / 50) * 1)
  let a = n / fif;
  let index = m / fif;
  index = Math.floor(index);
  if(size <= 0){
    return;
  }
  
  let size2 = size * 2;
  canvastx.globalAlpha = size / fif * 1.3;
    if(1 < size / fif){
      canvastx.globalAlpha = 1;
    }
  canvastx.drawImage(imgp003, 180 + size * a + (x * (size / fif)) - size2 / 2,600 - moby[index] + y + size - size2, size2, size2);
  console.log(mob[0] , mob[1])
}

window.onload = function() {

  imgp001.src = "https://hahihuhehohihe.web.fc2.com/app/3d/img/block.jpg";
  imgp002.src = "https://hahihuhehohihe.web.fc2.com/app/3d/img/block3.jpg";
  imgp003.src = "https://hahihuhehohihe.web.fc2.com/app/3d/img/kyara1.png";
  imgp003.onload = () => {
  }

  loadon = true;
  keyevent();
}

function delay (n){
  return new Promise (function(resolve){
    setTimeout(resolve,n);
  });
}

function keyevent(){  //key讀懃衍


  //繧ｹ繝槭�謫堺ｽ�

    document.querySelector('#pressd').addEventListener('touchstart', (event) => {
      event.preventDefault();
      pd = true;
    });
    document.querySelector('#pressd').addEventListener('touchend', (event) => {
      pd = false;
    });

    document.querySelector('#pressa').addEventListener('touchstart', (event) => {
      event.preventDefault();
      pa = true;
    });
    document.querySelector('#pressa').addEventListener('touchend', (event) => {
      pa = false;
    });

    document.querySelector('#pressw').addEventListener('touchstart', (event) => {
      event.preventDefault();
      pw = true;
    });
    document.querySelector('#pressw').addEventListener('touchend', (event) => {
      pw = false;
    });

    document.querySelector('#presss').addEventListener('touchstart', (event) => {
      event.preventDefault();
      ps = true;
    });
    document.querySelector('#presss').addEventListener('touchend', (event) => {
      ps = false;
    });

    document.querySelector('#pressp').addEventListener('touchstart', (event) => {
      event.preventDefault();
      pp = true;
    });
    document.querySelector('#pressp').addEventListener('touchend', (event) => {
      pp = false;
    });


  //pc謫堺ｽ�

  document.addEventListener('keypress', keypress_ivent);

  function keypress_ivent(e) {
    if(e.key === "a"){
      pa = true;
    }
    if(e.key === "d"){
      pd = true;
    }
    if(e.key === "w"){
      pw = true;
    }
    if(e.key === "s"){
      ps = true;
    }
    if(e.key === " ") {
      pp = true;
    }
    
    if(e.key === "j"){
      pj = true;
    }
    if(e.key === "l"){
      pl = true;
    }
    if(e.key === "i"){
      pi = true;
    }
    if(e.key === "k"){
      pk = true;
    }
  }


  document.addEventListener('keyup', keyup_ivent);

  function keyup_ivent(e) {
    if(e.key === "a"){
      pa =  false;
    }
    if(e.key === "d"){
      pd =  false;
    }
    if(e.key === "w"){
      pw = false;
    }
    if(e.key === "s"){
      ps = false;
    }
    if(e.key === " ") {
      pp = false;
    }

    if(e.key === "j"){
      pj = false;
    }
    if(e.key === "l"){
      pl = false;
    }
    if(e.key === "i"){
      pi = false;
    }
    if(e.key === "k"){
      pk = false;
    }
    return false;
  }

}



window.setInterval( aaa , 10 );

function aaa(){


  if(pa === true){
    x  = x + 1;
  }
  if(pd === true){
    x = x - 1;
  }
  if(pw === true){
    z = z + 1;
  }
  if(ps === true){
    z = z - 1;
    if(z < - 50){
      z = -50;
    }
  }
  if(pp === true){
    if(jamp === false){
      jamp = true;
      jampy = 3;
    }
  }
  
  if(pj === true){
    mob[0]  = mob[0] - 1;
  }
  if(pl === true){
    mob[0] = mob[0] + 1;
  }
  if(pi === true){
    mob[1] = mob[1] + 1;
  }
  if(pk === true){
    mob[1] = mob[1] - 1;
  }
}


window.setInterval( jamppp , 20 );

function jamppp(){
  if(jamp === true){
    y = y + jampy;
    jampy = jampy - 0.1;
  }
  if(y < 0){
    y = 0;
    jampy = 0;
    jamp = false;
  }
}














