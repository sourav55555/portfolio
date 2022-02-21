//navbar//
const section= document.querySelectorAll('section');
const navLi= document.querySelectorAll('nav .ul a');

window.addEventListener('scroll',()=>{
  let current ='';
  section.forEach( section =>{
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if(pageYOffset >= (sectionTop - sectionHeight / 2)){
      current = section.getAttribute('id');
    }
  })
  navLi.forEach( li =>{
    li.classList.remove('active');
    if(li.classList.contains(current)){
      li.classList.add('active');
    }
  })
})

//open-close nav//
function oNav() {
    document.getElementById("side-nav").style.width = "60%";
  }
  
  function cNav() {
    document.getElementById("side-nav").style.width = "0";
  }

/*nav color*/
window.addEventListener("scroll",navcolor);
function navcolor(){
  var value= window.scrollY;
  const fixed=document.querySelector(".fixed-top");
  if(value==0){
    fixed.classList.remove('navb');
  }
  else{
    fixed.classList.add("navb");
  }
}
/*screen select*/
var pView= document.getElementById("s-pc-view");
var mView= document.getElementById("s-mobile-view");
const pcbtn2=document.querySelector(".pcbtn2");
const mobilebtn2=document.querySelector(".mobilebtn2");

function pc2(){
  pView.style.display="block";
  mView.style.display="none";
  pcbtn2.classList= "pcbtn2 active1" ;
  mobilebtn2.classList= "mobilebtn2";
}
function mobile2(){
  pView.style.display="none";
  mView.style.display="block";
  pcbtn2.classList= "pcbtn2" ;
  mobilebtn2.classList= "mobilebtn2 active1";
}


/*screen select*/
var pcView= document.getElementById("num-pc-view");
var moView= document.getElementById("num-mobile-view");
const pcbtn1=document.querySelector(".pcbtn1");
const mobilebtn1=document.querySelector(".mobilebtn1");

function pc1(){
 
  pcView.style.display="block";
  moView.style.display="none";
  pcbtn1.classList= "pcbtn1 active1" ;
  mobilebtn1.classList= "mobilebtn1";
}
function mobile1(){
  
  pcView.style.display="none";
  moView.style.display="block";
  pcbtn1.classList= "pcbtn1" ;
  mobilebtn1.classList= "mobilebtn1 active1";
}

/*screen select*/
var pcCview= document.getElementById("cart-pc-view");
var moCview= document.getElementById("cart-mobile-view");
const pcbtn4=document.querySelector(".pcbtn4");
const mobilebtn4=document.querySelector(".mobilebtn4");

function pc4(){
  pcCview.style.display="block";
  moCview.style.display="none";
  pcbtn4.classList= "pcbtn4 active1" ;
  mobilebtn4.classList= "mobilebtn4";
}
function mobile4(){
  pcCview.style.display="none";
  moCview.style.display="block";
  pcbtn4.classList= "pcbtn4" ;
  mobilebtn4.classList= "mobilebtn4 active1";
}

/*screen select*/
var pcwView= document.getElementById("wed-pc-view");
var mowView= document.getElementById("wed-mobile-view");
const pcbtn3=document.querySelector(".pcbtn3");
const mobilebtn3=document.querySelector(".mobilebtn3");

function pc3(){
  pcwView.style.display="block";
  mowView.style.display="none";
  pcbtn3.classList= "pcbtn3 active1" ;
  mobilebtn3.classList= "mobilebtn3";
}
function mobile3(){
  pcwView.style.display="none";
  mowView.style.display="block";
  pcbtn3.classList= "pcbtn3" ;
  mobilebtn3.classList= "mobilebtn3 active1";
}
