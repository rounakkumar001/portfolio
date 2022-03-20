console.log("connected app.js")

const navToggle = document.querySelector(".icon");
const links = document.querySelector(".nav-links");
const line1 = document.querySelector(".line1")
const line2 = document.querySelector(".line2")
const line3 = document.querySelector(".line3")
const first = document.querySelector("#first")
const second = document.querySelector("#second");
const hp1 = document.querySelector(".HP1");
const hp2 = document.querySelector(".HP2");



first.addEventListener("click",()=>{
    if(hp1.style.display == "none" && first.innerHTML =="Show Description"){
        hp1.style.display = "block";
        first.innerHTML = "Show Less";
    }else{
        hp1.style.display = "none"
        first.innerHTML = "Show Description";
    }
})
second.addEventListener("click",()=>{
    if(hp2.style.display == "none" && second.innerHTML =="Show Description"){
        hp2.style.display = "block";
        second.innerHTML = "Show Less";
    }else{
        hp2.style.display = "none"
        second.innerHTML = "Show Description";
    }
})




const linkList = document.querySelectorAll(".nav-links li")
linkList.forEach((items)=>{
    items.addEventListener('click',()=>{
        myFun();
        myFun2();
    })
})

navToggle.addEventListener('click',myFun);
navToggle.addEventListener('click',myFun2);

function myFun2(){
    line1.classList.toggle("line-a");
    line2.classList.toggle("line-b");
    line3.classList.toggle("line-c");

}

function myFun(){
    links.classList.toggle("nav-active"); 
}



// pop Up 
document.querySelector("#ref").addEventListener("click", function(){
    swal("Sorry!", "The reference section is currently vacant.!", "info");
})
