import React from 'react'
import './Card.css'

export default props =>
    <div className="Card">
        <div className="tituloHeader">
            {/* {props.rank} */}
            {props.cabe}
        </div>
        <div className="Conteudo">
            {props.children}
        </div>
        <div className="Footer">
            {props.titulo}
        </div>
    </div>