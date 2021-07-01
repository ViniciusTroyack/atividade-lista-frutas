export function FruitList({ fruits }) {
  const lista = fruits.map((frutas) => frutas.name);

  return (
    <ul>
      <li>{lista[0]}</li>
      <li>{lista[1]}</li>
      <li>{lista[2]}</li>
    </ul>
  );
}
