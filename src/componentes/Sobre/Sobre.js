import React from 'react';
import '../ContainerSobre/ContainerSobre.scss';
import Sobrenos from '../ContainerSobre/ContainerSobre.js';

// Icones do google
import Linkedin from '../Imagens/linkedin.png'

// Fotos dos integrantes
import Vanessa from '../Imagens/Vanessa.png';
import Luana from '../Imagens/Luana.png';
import Danilo from '../Imagens/Danilo.jpg';



const Sobre = () => {
    return (
        <>
            <div id="Titulo">
                <h1>Sobre Culturando</h1>
                <p>  O site Culturando tem o intuito de informar e realizar matriculas de cursos na cidade de Caieiras.A intenção do nosso site é fazer com que mais pessoastenha acesso aos diversos cursos culturais disponíveisem nossa cidade. </p>
                
                <h2>Sobre nossa equipe</h2>
            </div>

            <div className="Pessoas">

                <Sobrenos ldin="https://www.linkedin.com/in/luana-marques-39785b197/" imagem={Luana} nome="Luana Marques"  linkedin={Linkedin} />
                <Sobrenos ldin="https://www.linkedin.com/in/vanessa-da-paixão-45553b187" imagem={Vanessa} nome="Vanessa da Paixão"  linkedin={Linkedin} />
                <Sobrenos ldin="" imagem={Danilo} nome="Danilo Medeiros"  linkedin={Linkedin} />
                <Sobrenos ldin="https://www.linkedin.com/in/heitor-borba-da-cruz-b41911190/"  nome="Heitor Borba da Cruz"  linkedin={Linkedin} />
                <Sobrenos ldin="https://www.linkedin.com/in/giovane-santesso-lima-583099196/"  nome="Giovane Santesso Lima"  linkedin={Linkedin} />
                <Sobrenos ldin="https://www.linkedin.com/in/matheus-silva-b87861197/"  nome="Matheus da Silva Antonio"  linkedin={Linkedin} />

            </div>

        </>

            
    )
}

export default Sobre;