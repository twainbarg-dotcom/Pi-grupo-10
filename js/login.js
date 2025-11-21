const form = document.querySelector(".busqueda");
const input = document.querySelector("#busqueda");
let category = document.querySelector(".menu-lateral ul")
let url_categoria = `https://dummyjson.com/products/category-list`

let errorBusqueda = document.querySelector(".errorBusqueda");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (input.value.length == 0) {
        errorBusqueda.innerText = "El campo de busqueda está vacio"
        return false
    } if (input.value.length < 3) {
        errorBusqueda.innerText = "El campo de busqueda debe tener al menos 3 caracteres"
        return false 
    } 
        this.submit(); 

})
fetch(url_categoria)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
      
      let contenido = ""
       
      for (let i = 0; i < data.length; i++) {
        const categoria = data[i];

       
        contenido += `<li><a href="category.html?category=${categoria}">${categoria}</a></li>`;
    }

    category.innerHTML = contenido
    })
    .catch(function(error){
        console.log("error" + error);
    })

let mail = document.querySelector("#email");
let contra = document.querySelector("#password") ;
let formulario = document.querySelector(".formlogin");
let errorE = document.querySelector(".error")
let errorC = document.querySelector(".error2")

formulario.addEventListener("submit",function(event){
    event.preventDefault();

    if(mail.value == ""){
        errorE.innerText= "Ingresa tu mail"
        return false
    }

    if(contra.value == ""){
       errorC.innerText = "Ingresa tu contraseña"
       return false
    }

    if(contra.value.length <6 ){
       errorC.innerText = "La contraseña debe tener al menos 6 caracteres"
       return false;
    }
    let user = {
        email:mail.value 
    }
    let userString = JSON.stringify(user);
    localStorage.setItem("miClave", userString);
    this.submit();
})