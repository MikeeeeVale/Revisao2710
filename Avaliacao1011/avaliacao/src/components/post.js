import '../Post.css'
import React from 'react'

const Post = ({titulo, imagem, descricao, categoria}) => {
    return(
        <div className='post'>
            <h2 className='titulo'>{titulo}</h2>
            <img src={imagem} className='imagem'/>
            <p className='descricao'>{descricao}</p>
            <p className='categoria'>{categoria}</p>
        </div>
    )
}

export default Post