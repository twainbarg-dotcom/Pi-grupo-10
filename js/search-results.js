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

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let terminoBuscado = queryStringObj.get('buscador');
let URL = `https://dummyjson.com/products/search?q=${terminoBuscado}`
let formulario = document.querySelector(".busqueda")
let article = document.querySelector(".producto")

fetch(URL)
.then(function(rta){
    return rta.json()

})

then(function(data){
    let resultado = data.products
    for (let i = 0; i< resultado.length; i++){
    article.innerHTML +=`
    <article class="producto">
        <img src= "${resultado[i].thumbnail}"
        <h3>${resultado[i].title}</h3>
        <p>${resultado[i].category}</p>
        <p>${resultado[i].price}</p>
        <a href="product.html?producto=${resultado[i].id}">ver detalles</a>
    </article>`


    }

})
.catch(function(err){
    console.log(err);

})



if (!terminoBuscado) {
    terminoBuscado = "";
}

let spanTermino = document.querySelector("#termino-buscado");
if (spanTermino) {
    spanTermino.innerText = terminoBuscado;
}


let listaProductos = document.querySelector(".lista-productos");

fetch(URL)
    .then(function (rta) {
        return rta.json();
    })
    .then(function (data) {
        let resultado = data.products;

        if (resultado.length === 0) {
            listaProductos.innerHTML = `
                <p class="sin-resultados">
                    No encontramos resultados para "<strong>${terminoBuscado}</strong>".
                </p>
            `;
        }for (let i = 0; i < resultado.length; i++) {
        listaProductos.innerHTML += `
            <article class="producto">
                <img src="${resultado[i].thumbnail}" alt="${resultado[i].title}">
                <h3>${resultado[i].title}</h3>
                <p>${resultado[i].category}</p>
                <p>$${resultado[i].price}</p>
                <a href="product.html?producto=${resultado[i].id}">Ver detalles</a>
            </article>`
            }
        
    })
    .catch(function (err) {
        console.log(err);
        listaProductos.innerHTML = "<h2>no se pudo cargar la infromacion</h2>";
    });




  