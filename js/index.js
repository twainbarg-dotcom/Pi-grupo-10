const form = document.querySelector(".busqueda");
const input = document.querySelector("#busqueda");
let smartphonesSection = document.querySelector("#smartphones");
let productosDestacadosSection = document.querySelector("#productos-destacados");
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

fetch('https://dummyjson.com/products')
 .then(function(response){
    return response.json()
 })
 .then(function(data){ 
    let productos = ""
 for (let i = 0; i < 10; i++) {
      productos += `<article class="producto">
        <img src=${data.products[i].images[0]} alt=${data.products[i].title}>
        <h3>${data.products[i].title}</h3>
        <p>${data.products[i].description}</p>
        <p>Precio $${data.products[i].price}</p>
        <a href="product.html?product=${data.products[i].id}">Ver detalle</a>
    </article>
      `
 } 
 smartphonesSection.innerHTML = productos
})

.catch(function(error){
        console.log("error" + error);
    })

fetch('https://dummyjson.com/products')
 .then(function(response){
    return response.json()
 })
 .then(function(data){ 
    let productos2 = ""
 for (let i = 10; i < 20; i++) {
      productos2 += `<article class="producto">
        <img src=${data.products[i].images[0]} alt=${data.products[i].title}>
        <h3>${data.products[i].title}</h3>
        <p>${data.products[i].description}</p>
        <p>Precio $${data.products[i].price}</p>
        <a href="product.html?product=${data.products[i].id}">Ver detalle</a>
    </article>
      `
 } 
 productosDestacadosSection.innerHTML = productos2;
})

.catch(function(error){
        console.log("error" + error);
    })