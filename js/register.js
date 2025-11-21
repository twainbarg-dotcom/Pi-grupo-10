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

let formR = document.querySelector(".formR");
let emailR = document.querySelector("#email");
let passwordR = document.querySelector("#password");
let password2R = document.querySelector("#password2");
let checkR = document.querySelector("#terminos");


let errorEmail = document.querySelector(".errorEmaR");
let errorCon1 = document.querySelector(".errorCoR");
let errorRepetircontra = document.querySelector(".errorRECONR");

formR.addEventListener("submit", function(e){
    e.preventDefault();

    if (emailR.value.length == 0) {
        errorEmail.innerText = "Ingresa tu email"
        return false
    }

     if (passwordR.value.length == 0) {
        errorCon1.innerText = "Ingresa tu contraseña"
        return false
    }

     if (passwordR.value.length < 6) {
        errorRepetircontra.innerText = "La contraseña debe tener al menos 6 caracteres"
        return false
    }

     if (passwordR.value !== password2R.value) {
        password2R.innerText = "Las contraseñas no coinciden"
        return false
    }
    if (checkR.checked == false) {
    checkR.innerText = "aceptar los términos y condiciones"
    return false
}
     
    formR.submit();  
    

});