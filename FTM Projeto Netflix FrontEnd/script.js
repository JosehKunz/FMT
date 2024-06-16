function compartilhar(redeSocial) {
    const urlParaCompartilhar = 'https://www.netflix.com'; 
    let urlCompartilhamento = '';

    if (redeSocial === 'facebook') {
        urlCompartilhamento = `https://www.facebook.com/sharer/sharer.php?u=${urlParaCompartilhar}`;
    } else if (redeSocial === 'instagram') {
        urlCompartilhamento = `https://www.instagram.com/?url=${urlParaCompartilhar}`;
    } else if (redeSocial === 'twitter') {
        urlCompartilhamento = `https://twitter.com/intent/tweet?url=${urlParaCompartilhar}`;
    }
    window.open(urlCompartilhamento, '_blank');
}

const menuItems = document.getElementById('menu-list').getElementsByTagName('li');
Array.from(menuItems).forEach(item => {
    item.addEventListener('click', () => {
        alert('Página em construção');
    });
});

const episodios = [
    {
        id: 1,
        episodio: 'T01:01',
        tempo: '58min'
    },
    {
        id: 2,
        episodio: 'T01:02',
        tempo: '52min'
    },
    {
        id: 3,
        episodio: 'T01:03',
        tempo: '55min'
    },
]
const listaEpisodios = document.getElementById('lista-episodios')

episodios.forEach(episodio => {
    const cardEpisodio = document.createElement('div')
    cardEpisodio.className = 'card-episodio'
    cardEpisodio.innerHTML = `
                        <span>${episodio.episodio}</span>
                        <span>${episodio.tempo}</span>
                        <button class="botao-assistir" onclick="assistirEpisodio(${episodio.id})">Assistir</button>
                        `
    listaEpisodios.appendChild(cardEpisodio)
})

function assistirEpisodio(id) {
    console.log('clicou para assistir o episódio ', id)            
}

