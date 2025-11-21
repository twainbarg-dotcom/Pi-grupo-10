const form = document.querySelector(".busqueda");
const input = document.querySelector("#busqueda");
let category = document.querySelector(".menu-lateral ul")
let url_categoria = `https://dummyjson.com/products/category-list`

form.addEventListener("submit", function (e) {
    e.preventDefault(); 

     if (input.value.length == 0){
        alert("El campo de busqueda está vacio")
    }else if (input.value.length < 3){
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

let mail = document.querySelector("#email");
let contra = document.querySelector("#password") ;
let formulario = document.querySelector(".formlogin");

formulario.addEventListener("submit",function(event){
    event.preventDefault();

    if(mail.value == ""){
        alert("El email es obligatorio");
        return false
    }

    if(contra.value == ""){
       alert("La contraseña es obligatoria");
       return false
    }

    if(contra.value.length <6 ){
       alert("La contraseña debe tener al menos 6 caracteres");
       return false;
    }
    let user = {
        email:mail.value 
    }
    let userString = JSON.stringify(user);
    localStorage.setItem("miClave", userString);
    this.submit();
})