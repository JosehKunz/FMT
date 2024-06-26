document.addEventListener("DOMContentLoaded", function() {
    
    function carregarInteresses() {
        const interessesString = localStorage.getItem("meus-interesses");
        let interesses = [];

        if (interessesString) {
            interesses = JSON.parse(interessesString);
        }

        const lista = document.querySelector(".list ul");
        lista.innerHTML = ""; 

        interesses.forEach(interesse => {
            const item = document.createElement("li");
            item.textContent = interesse;
            lista.appendChild(item);
        });
    }

    
    function adicionarInteresse() {
        const input = document.querySelector(".form input");
        const novoInteresse = input.value.trim(); 

        if (novoInteresse) {
            const interessesString = localStorage.getItem("meus-interesses");
            let interesses = [];

            if (interessesString) {
                interesses = JSON.parse(interessesString);
            }

            interesses.push(novoInteresse); 

            localStorage.setItem("meus-interesses", JSON.stringify(interesses)); 

            input.value = ""; 
        }
    }

    
    function limparInteresses() {
        localStorage.removeItem("meus-interesses"); 

        const lista = document.querySelector(".list ul");
        lista.innerHTML = ""; 
    }

    
    function carregarNoticiaPatrocinada() {
        fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?')
            .then(response => response.json())
            .then(data => {
                if (data.items && data.items.length > 0) {
                    const noticia = data.items[0];
                    const tituloNoticia = noticia.titulo; 
                    const introducaoNoticia = noticia.introducao; 
                    const linkNoticia = noticia.link; 

                    
                    const elementoNoticia = document.querySelector(".title-news-today");
                    elementoNoticia.innerHTML = `
                        <strong>${tituloNoticia}</strong><br>
                        <p>${introducaoNoticia}</p>
                        <a href="${linkNoticia}" target="_blank" style="font-size: small;">Leia mais</a>
                    `;
                } else {
                    console.warn('Nenhuma notícia disponível na API.');
                }
            })
            .catch(error => {
                console.error('Erro ao carregar a notícia:', error);
            });
    }


    
    const botaoAdicionar = document.querySelector(".button-add");
    botaoAdicionar.addEventListener("click", adicionarInteresse);

    
    const botaoLimpar = document.querySelector(".button-clear");
    botaoLimpar.addEventListener("click", limparInteresses);

    
    carregarInteresses();

    
    setInterval(carregarInteresses, 1000);

    
    carregarNoticiaPatrocinada();
});
