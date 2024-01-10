const detalhesButton = document.getElementById('detalhesButton')
const modal = document.getElementById('myModal');
const buscar = document.getElementById('buscar');

  
 // Quando o botão for clicado, exibe o modal
 detalhesButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Quando o botão de fechar no modal for clicado, fecha o modal
const closeButton = document.getElementById('close');
closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Fecha o modal se clicar fora da área do modal
window.addEventListener('click', (event) => {
  if (event.target === modal) {
      modal.style.display = 'none';
  }
});


function detailToLi(pokemonDetails) {
    return `
      <li>
        <span> Peso: ${pokemonDetails.weight}</span>
        <span> Nome: ${pokemonDetails.name}</span>
      </li>
    `;
  }


buscar.addEventListener('click', () => {
    var nome = document.getElementById('name').value;
    const url = `https://pokeapi.co/api/v2/pokemon/${nome}`;

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
            }
            return response.json();
        })
        .then((pokemonDetails) => {

            var newHTML = detailToLi(pokemonDetails)

            const detalhes = document.getElementById('AreaDetalhes');

            detalhes.innerHTML = newHTML;




        })
        .catch((error) => {
            console.error('Erro:', error);
        });
});



