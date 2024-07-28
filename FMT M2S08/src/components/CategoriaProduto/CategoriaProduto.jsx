import './categoriaProduto.css'
function CategoriaProduto({ texto, imagem }) {
    return (
        <>
            <div className="card-categoria">
                <div className="card-categoria__bg">
                    <img src={imagem}/>
                </div>                
                <span>{texto}</span>
            </div>
        </>
    )
}

export default CategoriaProduto