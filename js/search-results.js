
const form = document.querySelector(".busqueda");
const input = document.querySelector("#busqueda");
let category = document.querySelector(".menu-lateral ul");
let url_categoria = "https://dummyjson.com/products/category-list";

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (input.value.length == 0) {
        alert("El campo de busqueda está vacio");
    } else if (input.value.length < 3) {
        alert("El campo de busqueda debe tener al menos 3 caracteres");
    } else {
        this.submit(); 
    }
});


fetch(url_categoria)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        let contenido = "";

        for (let i = 0; i < data.length; i++) {
            const categoria = data[i];
            contenido += `<li><a href="category.html?category=${categoria}">${categoria}</a></li>`;
        }

        category.innerHTML = contenido;
    })
    .catch(function (error) {
        console.log("error" + error);
    });




let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);

let terminoBuscado = queryStringObj.get("busqueda");




let h2Resultados = document.querySelector(".titulo-resultados");        
let h2SinResultados = document.querySelector(".titulo-sin-resultados");     

h2Resultados.innerText = `Resultados de búsqueda para: ${terminoBuscado}`;
h2SinResultados.style.display = "none";


let listaProductos = document.querySelector(".productos");


let URL = `https://dummyjson.com/products/search?q=${terminoBuscado}`;

fetch(URL)
    .then(function (rta) {
        return rta.json();
    })
    .then(function (data) {
        let resultado = data.products;

        
        listaProductos.innerHTML = "";

        if (resultado.length === 0) {
            
            h2SinResultados.innerText =
                `No hay resultados para el término: ${terminoBuscado}`;
            h2SinResultados.style.display = "block";
            return
        } else {
            h2SinResultados.style.display = "none";

            for (let i = 0; i < resultado.length; i++) {
                listaProductos.innerHTML += `
                    <article class="producto">
                        <img src="${resultado[i].thumbnail}" alt="${resultado[i].title}">
                        <h3>${resultado[i].title}</h3>
                        <p>${resultado[i].category}</p>
                        <p>$${resultado[i].price}</p>
                        <a href="product.html?product=${resultado[i].id}">Ver detalles</a>
                    </article>
                `;
            }
        }
       
    })
    .catch(function (err) {
        console.log(err);
        
    });



  