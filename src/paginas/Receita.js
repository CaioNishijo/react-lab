export default function Receita({ drinkers }) {
    return (
      <ol>
        <li>Ferva {drinkers} copos de água</li>
        <li>Adicione {drinkers} copos de chá e {0.5 * drinkers} colheres de molho</li>
        <li>Adicione {0.5 * drinkers} copos de leite para ferver e açúcar</li>
      </ol>
    );
  }
  