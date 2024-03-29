const loadMoreButton = document.getElementById('loadMore');




const limit = 5;
let offset = 0;

function loadMore(offset, limit) {
  PokeApi.getPokemons(offset, limit)
    .then((pokemons = []) => {
      const newHTML = pokemons.map(convertPokemonToLi).join('');
      pokemonList.innerHTML += newHTML;
    })
    .catch((error) => console.error(error));
}

loadMore(offset, limit);

loadMoreButton.addEventListener('click', () => {
  offset += limit;
  loadMore(offset, limit);
});


function convertPokemonToLi(pokemon) {
  return `
    <li class="pokemon ${pokemon.type}">
      <span class="number">#${pokemon.number}</span>
      <span class="name">${pokemon.name}</span>
      <div class="detail" >
        <ol class="types">
          ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
        </ol>
        <img src="${pokemon.photo}" alt="${pokemon.name}">
      </div>
    </li>
  `;
}



const pokemonList = document.getElementById('pokemonList');

PokeApi.getPokemons(offset, limit)
  .then((pokemons = []) => {
    const newHTML = pokemons.map(convertPokemonToLi).join('');
    pokemonList.innerHTML = newHTML;
  })
  .catch((error) => console.error(error));

