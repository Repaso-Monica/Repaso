//SELECTORES DOM
const quoteInput = document.querySelector("#quote");
const authorInput = document.querySelector("#author");
const cityInput = document.querySelector("#city");

const quoteForm = document.querySelector(".quote-form");

//EVENTOS
//Al dispararse el submit se imprima una nueva card con los valores del form
quoteForm.onsubmit = (event) => {
  //Evita el comportamiento por defecto del formulario,
  //en este caso no se recarga la página ni envia informacion al servidor
  event.preventDefault();

  const quote = quoteInput.value;
  const author = authorInput.value;
  const city = cityInput.value;

  const newCard = `
  <div class="col-12 col-md-6 col-lg-4">
  <div class="card quote-card">
    <div class="card-header">Quote</div>
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        <p>${quote}</p>
        <footer class="blockquote-footer">
          ${author} famous in
          <cite title="Source Title">${city}</cite>
        </footer>
      </blockquote>
    </div>
  </div>
  </div>
  `;

  const quoteContainer = document.querySelector("#quote-row");
  quoteContainer.innerHTML += newCard;
};

//CUIDADO, ARRAYS! Enganchar eventos a listas es mas dificil
const cardArray = document.querySelectorAll(".card");

cardArray.forEach((card) => {
  card.onclick = (event) => {
    console.log(event, "Evento de Raton");
  };
});
