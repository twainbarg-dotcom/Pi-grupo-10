const form = document.querySelector(".busqueda");
const input = document.querySelector("#busqueda");
let category = document.querySelector(".menu-lateral ul")
let url_categoria = `https://dummyjson.com/products/category-list`

form.addEventListener("submit", function (e) {
    e.preventDefault(); 
    let name = input.value.length;

     if (input.value.length == 0){
        alert("El campo de busqueda está vacio")
    }else if (input.value.length <= 3){
        alert("El campo de busqueda debe tener al menos 3 caracteres")
    }else{
        form.submit()
    }


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

formR.addEventListener("submit", function(e){
    e.preventDefault();

    if (emailR.value.length == 0) {
        alert("El email es obligatorio");
    }

    else if (passwordR.value.length == 0) {
        alert("La contraseña es obligatoria");
    }

    else if (passwordR.value.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres");
    }

    else if (passwordR.value !== password2R.value) {
        alert("Las contraseñas no coinciden");
    }
    else {
        formRegister.submit();  
    }

});