document.addEventListener("click",function (e){
    let logout = document.querySelector("#logout-link");
    let links = document.querySelector(".links");
    let saludo = document.querySelector(".saludo");
    let mensajito = document.querySelector(".mensajito")
    
    
    if (logout){
        logout.addEventListener("click", function (e) {
            e.preventDefault();

             localStorage.removeItem("miClave");

            if (saludo) saludo.innerText = "";

            if (mensajito) mensajito.innerText = "";

            if (links){
                links.innerHTML = `
                <li><a href="index.html">Home</a></li>
                <li><a href="login.html">Login</a></li>
                <li><a href="register.html">Register</a></li>
                `
             }
             window.location.href = "./index.html";
        })  
    }
})

