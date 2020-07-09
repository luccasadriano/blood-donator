import React, {Component} from 'react';
import './css/quem_somos.css';
import logo from "../img/logo.png";
import beletatti from "../img/Beletatti.png";
import souza from "../img/souza.jpg";
import Luccas from "../img/luccas.jpg";
import carlos from "../img/carlos.jpg";
import gui from "../img/gui.jpg";

export class quem_somos extends Component {
    render() {
        return (
            <center>
            <div id="fundo">
                <div className="quem_somos">
                
                    <h1>Quem Somos ?</h1>
                    <img id='logo' src={logo} alt="Blood Donator"/>
                    <p className="quem_somos" id="amigos"><strong>5 amigos</strong> preocupados com a escassez na <strong>doação de sangue global</strong>, decidiu desenvolver uma plataforma para incentivar as pessoas a <strong>doarem sangue no Brasil</strong>. Com uma grande preocupação em incentivar as <strong>pessoas a doarem</strong>, iniciamos um processo de pesquisas sobre o maior problema. Segundo pesquisas, 6 em cada 10 doadores, são voluntários (ou espontâneos, aqueles que doam com frequência sem se importar com quem vai receber o sangue). 
                        Você sabia que com 450 ml de sangue é possível salvar 4 vidas?
                        Queremos educar as pessoas, você pode fazer muito, com pouco. Em nossa plataforma, 
                        você consegue agendar para que um dos agentes cadastrados na plataforma colha o sangue em sua 
                        residência. Após a doação, você tem acesso à sua carteira de doador e ainda possui acesso a 
                        descontos em nossa aba de benefícios.</p>

                </div>
                <div className="quem_somos">
                    <h1>Quem são os 5 amigos ?</h1>
                    <p className="quem_somos">Os cincos amigos são estudante Universitário da faculdade Unimetrocamp, 
                    a amizade entre eles surgiram através de trabalhos em grupo da faculdade. Agora falaremos um 
                    pouquinho de cada um deles:</p>
                    <ul className="quem_somos">
                        <li className="quem_somos" id="amigo1"><img src={beletatti} alt="Richard Beletatti"/>
                            <h1>Richard Beletatti</h1>
                                <p>Richard Beletatti Alves da Silva,20 anos, cursante de Análise Desenvolvimento de 
                                Sistemas, finaliza o curso no fim do ano de 2020. O interesse por Tecnologia surgiu quando 
                                era jovem aprendiz em uma empresa de Fibra Óptica, em 2017, onde em em algum dia qualquer
                                 fazendo suas tarefas de jovem aprendiz, passou perto do setor de TI, e ficou encantado 
                                 com as coisas que via, e então com esse encanto decidiu seguir sua carreira no ramo de TI, 
                                 e hoje explorando o ramo de TI, sua meta é se tornar Developer de Software.</p></li>
                        <li><img src={souza} alt="Richard Souza"/><h1>Richard Leite</h1>
                            <p>Richard Leite, futuro Developer de Jogos, desde de sua infância tinha seus olhos radiantes por jogos,
                                e hoje não se contenta em apenas jogar e sim almeja programar. Então se dedica a cada dia e noite,
                                 porque o seu sonho é maior do que qualquer fase de sua vida.</p></li>
                        <li><img src={Luccas} alt="Luccas Adriano"/><h1>Luccas Adriano</h1>
                            <p>Luccas Adriano, cursante de Análise Desenvolvimento de Sistemas, termina seu curso no fim do ano
                                de 2020, tem como proximo passo fazer sua pos graduação, para mais recursos em seu curriculo. A paixão
                                por TI veio logo cedo, pois sempre foi curioso por coisas que envolvia a tecnologia, e ainda sonha em se 
                                tornar um excelente Developer em JavaScript. 
                                </p></li>
                        <li><img src={carlos} alt="Carlos Alexandre"/><h1>Carlos Alexandre</h1>
                        <p>Carlos Alexandre, cursando Análise e desenvolvimento de sistemas. 
                            Fascinado por Sistemas e seus fluxos, o seu primeiro contato foi em seu 
                            primeiro estágio, onde observava os funcionários mexendo com Sistemas e via o 
                            quão era magnificos seus fluxos. Hoje em dia Carlos se dedica sua vida ganhando 
                            experiência para criar diversos tipo de sistemas.</p></li>
                        <li><img src={gui} alt="Guilherme Andrade"/><h1>Guilherme Andrade</h1>
                        <p>Guilherme Andrade, 21 anos, cursando Análise e desenvolvimento de sistemas.
                            Fascinado no mundo tecnológico desde que sua família fundou uma lan house
                            em 2006, apaixonado no mundo de jogos on-line decidiu ingressar em uma graduação 
                            voltada para área tecnológica, atualmente em seu penúltimo semestre do curso.</p></li>
                    </ul>
                </div>
            </div>
            </center>
        )
   }
};

export default quem_somos;