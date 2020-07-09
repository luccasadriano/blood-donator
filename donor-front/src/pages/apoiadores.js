import React, {Component} from 'react';
import './css/apoiadores.css';
import Ipg from "../img/ipg.jpg";
import metrocamp from "../img/metrocamp.png";
export class Apoiadores extends Component {
    render() {
        return (
            <center>
                <div className="fundoApoiadores">
                    <div className="apoiadores">
                        <h1>Apoiadores</h1>
                        <p>Conheça os parceiros solidários que ajudam a viabilizar a realização desse sonho.
                            Deseja ser nosso parceiro e ajudar essa causa? Entre em contato conosco !</p>

                        <ul className="apoiadores">
                            <li><img src={Ipg} alt="IPG"/>
                                <h1>IPG Imperions Games E-sports</h1>
                                <p>A Imperions Games e-Sports é uma instituição do e-Sports brasileiro, 
                                    tem como finalidade a profissionalização no mundo games, 
                                    como também desenvolvemos eventos relacionado a área.</p>
                                </li>
                            <li><img src={metrocamp} alt="Unimetrocamp"/>
                            <h1>Centro Universitário UniMetrocamp Wyden</h1>
                            <p>O Centro Universitário UniMetrocamp | Wyden atua, 
                                desde 2002, junto à oferta de uma educação superior com base na qualidade
                                acadêmica. A unidade situa-se em Campinas, interior de São Paulo, e está 
                                entre as melhores instituições de ensino superior da cidade paulista, 
                                conforme última avaliação do Ministério da Educação – sendo elevado à categoria 
                                de centro universitário em dezembro de 2017, pelo MEC.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </center>
        )
   }
};

export default Apoiadores;