import { useState } from "react";

function App() {
  const [proutos, setProdutos] = useState(JSON.parse(localStorage.getItem("produtos") || "[]"));
  function deletarItem(produto) {
    const novosProdutos = proutos.filter((prod) => prod !== produto);
    localStorage.setItem("produtos",JSON.stringify(novosProdutos));
    setProdutos(novosProdutos);
  }
  return (
    <>
      <h1>Listinha de compras</h1>
      {proutos.map((produto) => (
        <>
        <h2>{produto}</h2>
        <button onClick={() => {deletarItem(produto)}}>Deletar</button>
        </>
      ))}
    </>
  )
}
export default App
