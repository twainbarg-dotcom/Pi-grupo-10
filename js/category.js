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

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let categoria = queryStringObj.get("category");
let titulo = document.querySelector(".titulo-categoria");
titulo.innerText = `Categoría: ${categoria}`;
let contenedor = document.querySelector(".productos");
let urlCategoria = `https://dummyjson.com/products/category/${categoria}`;

fetch(urlCategoria)
    .then(function(res){ return res.json(); })
    .then(function(data){
        let productos = data.products;
        let html = "";

        for (let i = 0; i < productos.length; i++) {
            html += `
                <article class="producto">
                    <img src="${productos[i].thumbnail}" alt="${productos[i].title}">
                    <h3>${productos[i].title}</h3>
                    <p>$${productos[i].price}</p>
                    <a href="product.html?product=${productos[i].id}">Ver detalle</a>
                </article>
            `;
        }

        contenedor.innerHTML = html;
    })
    .catch(function(e){
        console.log("Error: " + e);
    });