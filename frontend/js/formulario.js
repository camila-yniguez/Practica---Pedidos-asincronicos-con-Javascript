window.onload = () => {
/**
 * @param {string} selector 
 * @return {HTMLElement}
 */
    const qs = (selector) => document.querySelector(selector); 

    let form = qs("form");
    let title = qs("#title");
    let rating = qs("#rating");
    let awards = qs("#awards");
    let release_date = qs("#release_date");
    let length = qs("#length");
    let modificar = qs(".botonModificar");
    let agregar = qs(".botonAgregar");
    let borrar = qs(".botonBorrar");
    
    let id = prompt("id");

    fetch(`http://localhost:3031/api/movies/${id}`)
        .then((response) => response.json())
        .then((data) => {
            
            
            let movie = data.data
            
            let fecha = new Date(movie.release_date) 

            title.value = movie.title
            rating.value = movie.rating
            awards.value = movie.awards
            release_date.value = fecha.toISOString().substring(0,10)
            length.value = movie.length


            
        })

    modificar.addEventListener("click", () => {

        let datosNuevos = {
            title : title.value,
            rating : rating.value,
            awards : awards.value,
            release_date : release_date.value,
            length : length.value
        }

        let settings = {
            method: "PUT",
            body: JSON.stringify(datosNuevos),
            headers: {"Content-Type" : "application/json"}
        }
        let url = `http://localhost:3031/api/movies/update/${id}`
        
        fetch(url, settings)
            .then((response) => response.json())
            .then(() => {
                 alert("modificado!")
            })
    })

    agregar.addEventListener("click", () => {

        let datosNuevos = {
            title : title.value,
            rating : rating.value,
            awards : awards.value,
            release_date : release_date.value,
            length : length.value
        }

        let settings = {
            method: "POST",
            body: JSON.stringify(datosNuevos),
            headers: {"Content-Type" : "application/json"}
        }

        let url = `http://localhost:3031/api/movies/create`


        fetch(url, settings)
        .then((response) => response.json())
        .then(() => {
             alert("creado!")
        })

    })

    borrar.addEventListener("click", () => {
 
        let url = `http://localhost:3031/api/movies/delete/${id}`

        let settings = {
            method: "DELETE",
            headers: {"Content-Type" : "application/json"}
        }

        fetch(url, settings)
            .then((response => console.log(response)))
            .then(() => alert("borrado"))
    })
}