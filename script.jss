/* ===========================
   SMOOTH SCROLL
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior:"smooth"
        });

    });
});


/* ===========================
   MOBILE MENU
=========================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".navbar ul");

menuBtn.addEventListener("click", ()=>{

    navLinks.classList.toggle("show");

});


/* ===========================
   DARK MODE
=========================== */

const darkBtn = document.createElement("div");

darkBtn.innerHTML="🌙";

darkBtn.classList.add("dark-btn");

document.body.appendChild(darkBtn);

darkBtn.onclick=()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        darkBtn.innerHTML="☀️";

    }else{

        darkBtn.innerHTML="🌙";

    }

};


/* ===========================
   ACTIVE NAVIGATION
=========================== */

const sections=document.querySelectorAll("section");

const navItems=document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

const sectionHeight=section.clientHeight;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


/* ===========================
   SCROLL TO TOP
=========================== */

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.classList.add("top-btn");

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


/* ===========================
   CONTACT FORM
=========================== */

const form=document.querySelector("form");

form.addEventListener("submit",(e)=>{

e.preventDefault();

const inputs=form.querySelectorAll("input, textarea");

let valid=true;

inputs.forEach(input=>{

if(input.value.trim()===""){

input.style.border="2px solid red";

valid=false;

}else{

input.style.border="1px solid #ccc";

}

});

if(valid){

alert("Thank you! Your message has been recorded.");

form.reset();

}

});