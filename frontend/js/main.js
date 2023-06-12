let favoritos = [];

window.onload = () => {
  const app = document.getElementById("root");
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  app.appendChild(container);
  // Aqui debemos agregar nuestro fetch

  fetch("http://localhost:3031/api/movies")
    .then((response) => response.json())
    .then((peliculas) => {
      let data = peliculas.data;

      data.forEach((movie) => {
        const card = document.createElement("div");
        card.setAttribute("class", "card");

        const h1 = document.createElement("h1");
        h1.textContent = movie.title;

        const p = document.createElement("p");
        p.textContent = `Rating: ${movie.rating}`;

        const duracion = document.createElement("p");
        duracion.textContent = `Duración: ${movie.length}`;

        const star = document.createElement("p");
        star.setAttribute("class", "action stars");
        star.innerHTML = "&#10029";

        container.appendChild(card);
        card.appendChild(h1);
        card.appendChild(p);

        if (movie.genre !== null) {
          const genero = document.createElement("p");
          genero.textContent = `Genero: ${movie.genre.name}`;
          card.appendChild(genero);
        }
        card.appendChild(duracion);
        card.appendChild(star);
      });

      let displays = document.querySelector("#favorite");
      if(localStorage.length === 0){
        displays.style.display = "none"
      } else {
        displays.style.display = "block"
      }
      console.log(localStorage)

      let favoriteMovie = document.querySelectorAll(".stars");

      for (let i = 0; i < favoriteMovie.length; i++) {
        const starID = favoriteMovie[i];

        starID.addEventListener("click", () => {
          favoritos.push(data[i]);
          localStorage.setItem("movie", JSON.stringify(favoritos)); 
          console.log(JSON.parse(localStorage.getItem("movie")));
          
        });
      }
    });
};


/* let favoritos = [];

window.onload = () => {
  const app = document.getElementById("root");
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  app.appendChild(container);
  // Aqui debemos agregar nuestro fetch

fetch("http://localhost:3031/api/movies")
  .then((response) => response.json())
  .then((peliculas) => {
    
    let data = peliculas.data;

    data.forEach((movie) => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const h1 = document.createElement("h1");
      h1.textContent = movie.title;

      const p = document.createElement("p");
      p.textContent = `Rating: ${movie.rating}`;

      const duracion = document.createElement("p");
      duracion.textContent = `Duración: ${movie.length}`;
      
      const star = document.createElement("p");
      star.setAttribute("class", "action stars");
      star.innerHTML = "&#10029";

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
      
      if (movie.genre !== null) {
        const genero = document.createElement("p");
        genero.textContent = `Genero: ${movie.genre.name}`;
        card.appendChild(genero);
      }
      card.appendChild(duracion);
      card.appendChild(star)

      
    });
    
    let favoriteMovie = document.querySelectorAll(".stars");

    for (let i = 0; i < favoriteMovie.length; i++) {
      const starID = favoriteMovie[i];
      
      starID.addEventListener("click", () => {

        // favoritos.push(data[i])
        favoritos.push(data[i]);
        console.log(favoritos);
      })
      
    }
    return favoritos;
    
    window.addEventListener("keypress", () => {
      
      console.log(localStorage.getItem("movie"));
      console.log(localStorage)
    })
    
    
  })
};


window.addEventListener("keypress", () => {
  
  console.log(localStorage.movie);
  console.log(localStorage)
  console.log(favoritos)
})
localStorage.setItem("movie",favoritos); */