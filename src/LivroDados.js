import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ControleLivro } from "./controle/ControleLivros";
import { ControleEditora } from "./controle/ControleEditora";

const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

const LivroDados = () => {
  const opcoes = controleEditora.getEditoras().map((editora) => ({
    value: editora.codEditora,
    text: editora.nome,
  }));
  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const [codEditora, setCodEditora] = useState(opcoes[0]);

  const navigate = useNavigate();

  const tratarCombo = (evento) => {
    setCodEditora(Number(evento.target.value));
  };

  const incluir = (evento) => {
    evento.preventDefault();
    const livro = {
      codigo: 0,
      codEditora: codEditora,
      titulo: titulo,
      resumo: resumo,
      autores: autores.split("\n"),
    };
    controleLivro.incluir(livro);
    navigate("/");
  };

  return (
    <main className="w-75 mt-4" style={{ margin: "auto" }}>
      <h1 className="mb-2">
        <b>Dados do Livro</b>
      </h1>
      <form onSubmit={incluir}>
        <div className="row">
          <div className="col-12 d-flex flex-column mb-2">
            <label htmlFor="input-livro">Título</label>
            <input
              id="input-livro"
              className="form-control"
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>
          <div className="col-12 d-flex flex-column mb-2">
            <label htmlFor="input-resumo">Resumo</label>
            <textarea
              id="input-resumo"
              className="form-control"
              value={resumo}
              onChange={(e) => setResumo(e.target.value)}
            />
          </div>
          <div className="col-12 d-flex flex-column mb-2">
            <label>Editora</label>
            <select
              value={codEditora}
              onChange={tratarCombo}
              className="form-control"
            >
              {opcoes.map((opcao) => (
                <option key={opcao.value} value={opcao.value}>
                  {opcao.text}
                </option>
              ))}
            </select>
          </div>
          <div className="col-12 d-flex flex-column mb-2">
            <label htmlFor="input-autores">Autores</label>
            <textarea
              id="input-autores"
              className="form-control"
              value={autores}
              onChange={(e) => setAutores(e.target.value)}
            />
          </div>
        </div>
        <button className="btn btn-primary mt-2" type="submit">
          Salvar Dados
        </button>
      </form>
    </main>
  );
};

export default LivroDados;
