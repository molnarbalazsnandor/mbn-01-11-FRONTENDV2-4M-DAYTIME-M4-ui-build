const beers = {
  id: "beers",
  logo: "Best Beers",
  button: "details",
  cards: [
    {
      title: "Mango Bay",
      sub: "Mad Scientist Beer",
      text: "Pale Ale - American",
    },
    {
      title: "Távoli Galaxis",
      sub: "Rothbeer Brewery",
      text: "IPA - American",
    },
    {
      title: "Flying Rabbit AIPA",
      sub: "MONYO Brewing Co.",
      text: "IPA - American",
    },
    {
      title: "Liquid Cocaine",
      sub: "Mad Scientist Beer",
      text: "IPA - Imperial",
    },
    {
      title: "Organic Chocolate Stout",
      sub: "Samuel Smith Old Brewery",
      text: "Stout - English",
    },
    {
      title: "Bracia",
      sub: "Thornbridge Brewery",
      text: "Strong Ale - English",
    },
    {
      title: "Oatmeal Stout",
      sub: "Samuel Smith Old Brewery",
      text: "Stout - Oatmeal",
    },
    {
      title: "Black Tokyo Horizon",
      sub: "BrewDog",
      text: "Stout - American Imperial",
    },
    {
      title: "Vintage Ale",
      sub: "Fuller's",
      text: "Old Ale",
    },
    {
      title: "All the Leaves are Brown",
      sub: "Tempest Brewing Company",
      text: "Brown Ale - American",
    },
  ],
};

function loadEvent() {
  const rootElement = document.querySelector("#root");
  rootElement.insertAdjacentHTML(
    "beforeend",
    `
  <header>
  <p>Best Beers</p>
  <span>
    <span class="material-icons md-36">menu</span>
  </span>
  </header>
  <div class="cards-container"></div>`
  );

  const cardContainer = document.querySelector(".cards-container");

  beers.cards.map((beer, i) => {
    cardContainer.insertAdjacentHTML(
      "beforeend",
      `
      <div class="card">
      <div class="number">${i + 1}</div>
      <div class="title">${beer.title}</div>
      <div class="sub">${beer.sub}</div>
      <button class="button">details
        <span class="material-icons md-36">arrow_forward</span>
      </button>
      <div class="text">${beer.text}</div>
    </div>
    `
    );
  });
}
window.addEventListener("load", loadEvent());
