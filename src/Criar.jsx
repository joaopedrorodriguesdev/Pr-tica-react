import {useNavigate} from 'react-router';

export default function Criar() {

  const navigate = useNavigate();

  function cadastrarPedido(formData) {
    const produto = formData.get("Produto");
    const produtos = JSON.parse(localStorage.getItem("produtos") || "[]");
    produtos.push(produto);
    localStorage.setItem("produtos", JSON.stringify(produtos));
    console.log(JSON.parse(localStorage.getItem("produtos")));
    navigate("/");
  }

  return(
    <>
      <h1>Cadastrar item de compra</h1>
      <form action={cadastrarPedido}>
        <label htmlFor="Produto: "></label>
        <input type="text" name="Produto"/>
        <input type="submit" value="Cadastrar" />
      </form>
    </>
  );
}