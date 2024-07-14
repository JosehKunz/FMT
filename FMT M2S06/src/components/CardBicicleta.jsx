import '../assets/styles/CardBicicleta.css'

function CardBicicleta({ nomeModelo, preco, imgSrc }) {
    return (
        <>
            <div className="card-bicicleta">
                <img src={imgSrc} alt="Imagem do modelo da bike" />
                <span className="modelo">{nomeModelo}</span>
                <span className="preco">R$ {preco}</span>
            </div>
        </>
    )
}

export default CardBicicleta