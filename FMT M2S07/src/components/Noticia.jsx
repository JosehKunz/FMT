import React, { useState, useEffect } from 'react';

export function Noticia() {
    const [tituloNoticia, setTituloNoticia] = useState(null);

    useEffect(() => {
        async function carregarNoticiaPatrocinada() {
            try {
                const response = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?');
                const data = await response.json();
                if (data.items && data.items.length > 0) {
                    const noticia = data.items[0];
                    setTituloNoticia(noticia.titulo);
                } else {
                    console.warn('Nenhuma notícia disponível na API.');
                }
            } catch (error) {
                console.error('Erro ao carregar a notícia:', error);
            }
        }

        carregarNoticiaPatrocinada();
    }, []);

    return (
        <div>
            {tituloNoticia ? (
                <div className="title-news-today">
                    <strong>{tituloNoticia}</strong>
                </div>
            ) : (
                <p>Carregando notícia...</p>
            )}
        </div>
    );
}
