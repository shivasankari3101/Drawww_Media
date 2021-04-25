// Loader function
window.onload = function(){
    var x = setInterval(function(){
        document.getElementsByClassName("loader")[0].classList.toggle("close_loader");
        clearInterval(x);
    },2000)
}

//theme toggle for about section
document.body.addEventListener("click",function(){
      document.getElementsByClassName("about")[0].classList.toggle("about_dark");
})

//Opening menu
function open_menu(){
    document.getElementsByClassName("bars")[0].classList.toggle("cross");
    document.getElementsByClassName("menu")[0].classList.toggle("open");
    document.body.classList.toggle("fixed");
}