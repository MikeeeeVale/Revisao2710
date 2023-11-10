import '../Post.css'
import React from 'react'

const Coment = ({nome, img, comentario}) => {
    return(
        <div className='coment'>
            <h2 className='nome'>{nome}</h2>
            <img src={img} className='user'/>
            <p className='comentario'>{comentario}</p>
        </div>
    )
}

export default Coment