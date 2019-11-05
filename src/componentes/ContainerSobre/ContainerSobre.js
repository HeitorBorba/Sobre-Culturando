import React from 'react';
import './ContainerSobre.scss';

const Sobrenos = ({imagem, desc, nome}) =>{
    return(
            <div className="Pessoa">
                    <img src={imagem} alt="f"></img>
                    <h2>{nome}</h2>
                    <p>{desc}</p>
                
            </div>
    )
}

export default Sobrenos;