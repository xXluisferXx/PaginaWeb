// menu hamburguesa

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

// validacion formulario

const form = document.getElementById("formulario");
const Nombre = document.getElementById("nombre");
const Email = document.getElementById("email");
const Password = document.getElementById("password");
let emailval = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/;
let verificar = false;
form.addEventListener("submit", evento=>{
    evento.preventDefault();
    if(nombre.value.length < 2){
        Nombre.style.background = "red";
        verificar = true;
    }else{
        Nombre.style.background = "green";
    }
    if(!emailval.test(email.value)){
        Email.style.background = "red";
        verificar = true;
    }else{
        Email.style.background = "green";
    }
    if(password.value.length < 8){
        Password.style.background = "red";
        verificar = true;
    }else{
        Password.style.background = "green";
    }
})
