import { Editora } from "../modelo/Editora";

const editoras: Array<Editora> = [
  { codEditora: 2588954, nome: "Editora Palmeiras" },
  { codEditora: 6156253, nome: "Editora Andrade" },
  { codEditora: 1565155, nome: "Ratinho Livros" },
  { codEditora: 7854378, nome: "Lagos Profundos" },
  { codEditora: 4145454, nome: "Pedras Pesadas" },
  { codEditora: 8979845, nome: "CIA das Letras" },
];

export class ControleEditora {
  getEditoras(): Array<Editora> {
    return editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = editoras.find(
      (editora) => editora.codEditora === codEditora
    );
    if (editora) {
      return editora.nome;
    } else {
      return "Editora não encontrada";
    }
  }
}
