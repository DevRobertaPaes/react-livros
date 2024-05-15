import React, { useState, useEffect } from "react";
import { ControleLivro } from "./controle/ControleLivros";
import { ControleEditora } from "./controle/ControleEditora";
import "./LivroLista.css";

const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

const LinhaLivro = ({ livro, excluir }) => {
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  const handleExcluir = () => {
    excluir(livro.codigo);
  };

  return (
    <tr key={livro.codigo}>
      <td className="d-flex flex-column">
        {livro.titulo}
        <button onClick={handleExcluir} className="btn btn-danger w-50">
          Excluir
        </button>
      </td>
      <td>{livro.resumo}</td>
      <td>{nomeEditora}</td>
      <td>
        {livro.autores.map((autor, index) => (
          <li key={index}>{autor}</li>
        ))}
      </td>
    </tr>
  );
};

const LivroLista = () => {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    setLivros(controleLivro.obterLivros());
    setCarregado(true);
  }, [carregado]);

  const excluir = (codigo) => {
    controleLivro.excluir(codigo);
    setCarregado(false);
  };

  return (
    <main className="w-75 mt-4" style={{ margin: "auto" }}>
      <h1 className="mb-2">
        <b>Catálogo de Livros</b>
      </h1>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Resumo</th>
            <th>Editora</th>
            <th>Autores</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default LivroLista;
