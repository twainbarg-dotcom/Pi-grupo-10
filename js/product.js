const form = document.querySelector(".busqueda");
const input = document.querySelector("#busqueda");
const detalle = document.querySelector(".producto-mas")
let category = document.querySelector(".menu-lateral ul")
let url_categoria = `https://dummyjson.com/products/category-list`
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let idProduct = queryStringObj.get('product');

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

fetch(`https://dummyjson.com/products/${idProduct}`)
 .then(function(response){
    return response.json()
 })
 .then(function(data){ 
    let tagsHTML = "";
    for (let i = 0; i < data.tags.length && i < 3; i++) {
        tagsHTML += `<li>${data.tags[i]}</li>`;
    }



        let opinionesHTML = "";

    if (data.reviews && data.reviews.length > 0) {
        
        for (let i = 0; i < data.reviews.length; i++) {

            let review = data.reviews[i];

            opinionesHTML += `
            <aside class="opinion">
                <ul>
                    <li><strong>${review.reviewerName}</strong></li>
                    <li>Calificación: ⭐ ${review.rating}</li>
                    <li>Comentario: ${review.comment}</li>
                    <li>Fecha: ${review.date}</li>
                </ul>
            </aside>`;
        }

    } else {
        opinionesHTML = "<p>No hay opiniones disponibles.</p>";
    }






    let detalleHTML = 
   `<img src="${data.images[0]}" alt="${data.title}">
    <div class="info-producto">
        
                <h2>${data.title}</h2>
                <h3>Especificaciones:</h3>
                <ul class="texto1">
                 <li>Precio: $${data.price}</li>
                 <li>Marca: ${data.brand}</li>
                 <li>Categoría: <a href="category.html?category=${data.category}">${data.category}</a></li>
                 <li>Descripcion: ${data.description}</li>
                 <li>Stock: ${data.stock} unidades</li>
                 <li class="texto2">Llega gratis mañana 📦</li>
                 </ul>
                  <h3>Tags:</h3>
                <ul>${tagsHTML}</ul>
                 
                <div class="Botoncompra">
                    <button>COMPRAR PRODUCTO 🛒</button>
                </div>

                 <h3>Opiniones:</h3>
                ${opinionesHTML}
    </div>`;

     
detalle.innerHTML = detalleHTML; 
})

.catch(function(error){
        console.log("error" + error);
})