window.addEventListener('load', () => {
  const container = document.querySelector('.container');
  const pokemonsCount = 108;

  const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
  };

  const getPokemon = async () => {
    for (let i = 1; i <= pokemonsCount; i++) {
      await respPokemon(i);
    }
  }


  const respPokemon = async (id) => {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await resp.json();
    createPokemon(data)
  }

  const createPokemon = (pok) => {
    const pokEl = document.createElement('div');
    pokEl.classList.add('item');
    const poke_types = pok.types.map(type => type.type.name)
    const colorPoke = poke_types[0].toString();
    pokEl.innerHTML = `
          <div class="item__img">
            <img src="${pok.sprites.front_default}" alt="Pokemon">
          </div>
          <div class="item__info">
            <div class="item__info-id">#${pok.id.toString().padStart(3, '0')}</div>
            <div class="item__info-name">${pok.name[0].toUpperCase() + pok.name.slice(1)}</div>
            <div class="item__info-type">${poke_types[0]}</div>
          </div>
    `;
    pokEl.style.background = colors[colorPoke];
    container.insertAdjacentElement('beforeend', pokEl);
  };


  getPokemon();

  
});