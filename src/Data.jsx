function Data(props){
  return(
    <div className="data">
    <p>Nome: {props.name}</p>
    <p>Idade: {props.age}</p>
    <p>Trabalhando: {props.isWorking ? "Sim" : "Não"}</p>
    </div>
  );
}

export default Data