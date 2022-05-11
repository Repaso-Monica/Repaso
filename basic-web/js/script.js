const quoteForm = document.querySelector(".quote-form");
console.log(quoteForm);
quoteForm.onsubmit = (e) => {
  e.preventDefault();
  console.log("Submitted");
  const quote = document.querySelector("#quote-text").value;
  const author = document.querySelector("#quote-author").value;
  const city = document.querySelector("#quote-author-city").value;

  const cardString = `
  <div class="col-md-4">
  <div class="card">
    <div class="card-header">Quote</div>
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        <p>${quote}.</p>
        <footer class="blockquote-footer">
          ${author} famous in
          <cite title="Source Title">${city}</cite>
        </footer>
      </blockquote>
    </div>
  </div>
</div>
`;

  const quoteContainer = document.querySelector(".quote-container");

  quoteContainer.innerHTML += cardString;
};
