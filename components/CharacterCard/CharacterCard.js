export function CharacterCard(character) {
  const cardElement = document.createElement("li");
  cardElement.classList.add("card");

  // Füge den HTML-Inhalt der Karte dynamisch hinzu
  cardElement.innerHTML = `
    <div class="card__image-container">
      <img
        class="card__image"
        src="${character.image}"  // Dynamisch das Bild-URL setzen
        alt="${character.name}"   // Dynamisch den Namen setzen
      />
      <div class="card__image-gradient"></div>
    </div>
    <div class="card__content">
      <h2 class="card__title">${
        character.name
      }</h2>  <!-- Dynamisch den Namen setzen -->
      <dl class="card__info">
        <dt class="card__info-title">Status</dt>
        <dd class="card__info-description">${
          character.status
        }</dd>  <!-- Dynamisch den Status setzen -->
        <dt class="card__info-title">Type</dt>
        <dd class="card__info-description">${
          character.type || "Unknown"
        }</dd>  <!-- Dynamisch den Typ setzen -->
        <dt class="card__info-title">Occurrences</dt>
        <dd class="card__info-description">${
          character.episode.length
        }</dd>  <!-- Dynamisch die Vorkommen setzen -->
      </dl>
    </div>
  `;

  // Rückgabe des erstellten 'li'-Elements
  return cardElement;
}
