console.log("js applied sucessfully");

const btins=document.getElementById("btn");
btins.addEventListener("click",()=>{
    let newpage="shop.html";
window.open(newpage,"_blank");
});

// document.addEventListener("click",imgbtn);
// function imgbtn() {
//     document.getElementById("imagebtn").innerText="hello kese honapap loyguhs";
// }
const buttonin=document.getElementById("hiheloo");
buttonin.addEventListener("click",()=>{
    let newpagee="shop.html";
    window.open(newpagee,"_blank");
});
document.addEventListener("DOMContentLoaded",function(params) {
    const scrooltop=document.getElementById("uparrow");

scrooltop.addEventListener("click",function (params) {
    window.scrollTo({
        top:0,
        behavior:"smooth",
        
    });
});
});
const btinos=document.getElementById("bits");
btinos.addEventListener("click",()=>{
    let newpage="shop.html";
window.open(newpage,"_blank");
});
