const API_URL = "https://rickandmortyapi.com/api/character";

async function getCharactersFetch() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    displayCharacters(data.results);
  } catch (error) {
    console.error("Error con fetch:", error);
  }
}

async function getCharactersAxios() {
  try {
    const response = await axios.get(API_URL);
    displayCharacters(response.data.results);
  } catch (error) {
    console.error("Error con axios:", error);
  }
}

function displayCharacters(characters) {
  const container = document.getElementById("data-container");

  container.innerHTML = "";

  characters.forEach(character => {
    const card = document.createElement("div");

    card.innerHTML = `
      <h3>${character.name}</h3>
      <img src="${character.image}" width="150">
      <hr>
    `;

    container.appendChild(card);
  });
}