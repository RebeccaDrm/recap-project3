import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');
// States
let maxPage = 1;
let page = 1;
let searchQuery = "";

async function fetchCharacters(page = 1) {
  const response = await fetch(
    "https://rickandmortyapi.com/api/character?page=${page}"
  );
  const data = await response.json();

  maxPage = data.info.pages;

  return data.results;
}

async function renderCharacters() {
  const characters = await fetchCharacters(page);

  cardContainer.innerHTML = "";

  characters.forEach((character) => {
    const cardElement = CharacterCard(character);
    cardContainer.append(cardElement);
  });

  pagination.textContent = `Page ${page} of ${maxPage}`;
}

// Event listeners for buttons
prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
    renderCharacters(); // Fetch and render characters for the new page
  }
});

nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    page++; // Increase page number
    renderCharacters(); // Fetch and render characters for the new page
  }
});

renderCharacters();
