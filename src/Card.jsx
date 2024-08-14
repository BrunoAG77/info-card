import Pic from './pic.jpeg'
import Data from './Data.jsx'

function Card(){
  return(
    <div className="card">
    <img className="img" src={Pic} alt="profile"></img>
    <h2 className="font"><Data name="Bruno Antico Galin" age={19} isWorking={false}/></h2>
    <p className="text">Estou em busca de estágio nas áreas de TI correlatas à profissão em curso, seja remoto ou presencial. Minha principal motivação é aprender cada vez mais assuntos desta área e interagir com colegas de trabalho para ter um ambiente bom. Falo inglês de forma fluente e falo espanhol em um nível intermediário. Tenho capacidade para programar em HTML, CSS, JavaScript, React, Python, Java e SQL, usando raciocínio lógico, além de usar o pacote Office. Me considero uma pessoa organizada e engajada que sempre irá buscar o melhor.</p>
    </div>
  );
}

export default Card