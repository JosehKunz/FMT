import React, { useState } from 'react';
import './Hero.css';

function Hero() {
    const [endereco, setEndereco] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Endereço enviado:', endereco);
    };

    return (
        <div className="hero-container">
            <p className='hero'>  Bebida rápida, gelada e no precinho? O Zé entrega tudo.</p>
            <form onSubmit={handleSubmit} className="form-inline">
                <input
                    type="text"
                    placeholder="Inserir endereço para ver o preço"
                    className='heroAdress'
                    value={endereco}
                    onChange={(e) => setEndereco(e.target.value)}
                />
            </form>
        </div>
    );
}

export default Hero;
