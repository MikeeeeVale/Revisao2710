import '../ProductCard.css'
import React from 'react'

const ProductCard = ({imagem, nome, descricao, preco, caracteristicas}) => {
    return(
        <div className='card'>
            <img src={imagem} className='imagem'/>
            <h2 className='titulo'>{nome}</h2>
            <p className='descricao'>{descricao}</p>
            <h3 className='preco'>{preco}</h3>
            <p className='caracteristica'>{caracteristicas}</p>
        </div>
    )
}

export default ProductCard