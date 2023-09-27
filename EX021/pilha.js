let cartas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Valete", "Dama", "Rei"];

let finalizarWhile = false;

while (!finalizarWhile) {
  let opcao = parseInt(
    prompt(
      `Olá jogador!, esses são as cartas disponiveis: \n\n ${cartas
        .map((str, index) => `${index + 1}º :${str}`)
        .join(
          "\n"
        )} \n\n Escolha uma das opções \n\n 1)Adicionar uma carta \n 2)Puxar uma carta \n 3)Sair`
    )
  );

  switch (opcao) {
    case 1:
      let carta = prompt(`Informe a carta a ser adicionada`);
      cartas.unshift(carta);
      alert(
        `Essas são as novas cartas disponiveis \n ${cartas
          .map((str, index) => `${index + 1}º : ${str}`)
          .join("\n")}`
      );

      break;

    case 2:
      alert(`Será removido a carta do topo do baralho...`);
      alert(`A carta ${cartas[0]} foi removida...`);
      cartas.shift();
      alert(
        `Essas são as novas cartas disponiveis \n ${cartas
          .map((str, index) => `${index + 1}º : ${str}`)
          .join("\n")}`
      );

      break;

    case 3:
      alert(`Saindo...`);

      finalizarWhile = true;
  }
}

