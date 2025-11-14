const form = document.querySelector(".busqueda");
const input = document.querySelector("#busqueda");

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
let category = document.querySelector(".menu-lateral ul")
let url_categoria = `https://dummyjson.com/products/category-list`
fetch(url_categoria)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
      console.log(data);
      let contenido = ""
       
      for (let i = 0; i < data.length; i++) {
        const categoria = data[i];

        console.log(categoria);
        contenido += `<li><a href="category.html?category=${categoria}">${categoria}</a></li>`;
    }

    category.innerHTML = contenido
    })
    .catch(function(error){
        console.log("error" + error);
    })

