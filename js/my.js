let enlaces_header = document.querySelectorAll(".enlaces-header")[0];
let icon_hamburguer = true;
 document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){
    if(icon_hamburguer){
        document.querySelectorAll(".hamburguer")[0].style.color="#fff";
        icon_hamburguer = false;
    }
    else{
        document.querySelectorAll(".hamburguer")[0].style.color="#000";
        icon_hamburguer = true;
    }
    enlaces_header.classList.toggle("hamburgueropen");
})
 document.querySelectorAll(".enlaces-header")[0].addEventListener("click", function(){
    enlaces_header.classList.toggle("hamburgueropen");
    document.querySelectorAll(".hamburguer")[0].style.color ="#000"
})