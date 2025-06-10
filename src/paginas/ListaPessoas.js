const pessoas = [
    { id: 1, nome: "Ana", profissao: "Engenheira" },
    { id: 2, nome: "Bruno", profissao: "Professor" },
    { id: 3, nome: "Carla", profissao: "Designer" },
    { id: 4, nome: "Diego", profissao: "Professor" },
    { id: 5, nome: "Eduarda", profissao: "Médica" }
  ];
  
  export default function ListaPessoas() {
    const professores = pessoas.filter(pessoa => pessoa.profissao === "Professor");
  
    const listItems = professores.map(pessoa => (
      <li key={pessoa.id}>
        <p>
          <b>{pessoa.nome}</b>
          {" " + pessoa.profissao}
        </p>
      </li>
    ));
  
    return <ul>{listItems}</ul>;
  }
  