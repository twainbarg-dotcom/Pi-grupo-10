let data = localStorage.getItem("miClave");
let info = JSON.parse(data);
let saludo = document.querySelector(".saludo");
let mensajito = document.querySelector(".mensajito");
let links = document.querySelector(".links");

if (links){

    if (info){

        if(saludo){
            saludo.innerText = "Bienvenido: " + info.email;
        }
        if (mensajito){
            mensajito.innerText = "Disfruta de la app";
        }
        links.innerHTML = `
            <li class="cuenta">Bienvenido: ${info.email}</li>
            <li class="logout"><a id="logout-link" href="#">Logout</a></li>
        `;
 }

 else{
    if(saludo){
        saludo.innerText="";
    }

    if(mensajito){
        mensajito.innerText = "";
    }
    
    links.innerHTML = `
            <li><a href="index.html">Home</a></li>
            <li><a href="login.html">Login</a></li>
            <li><a href="register.html">Register</a></li>
        `;
    }
}