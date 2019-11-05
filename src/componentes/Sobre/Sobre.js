import React from 'react';
import '../ContainerSobre/ContainerSobre.scss';
import Sobrenos from '../ContainerSobre/ContainerSobre.js';

import Giovane from '../Imagens/perfil.jpeg';
import Heitor from '../Imagens/Perfil2.jpeg';



const Sobre = () =>{
    return(
        <div id="Pessoa1">
            <Sobrenos imagem={Giovane} nome="Giovane" desc="Giovane Santez, 15 anos" />
            <Sobrenos  imagem={Heitor} nome="Heitor" desc="Heitor, 16 anos" />
        </div>
        
    )
}

export default Sobre;