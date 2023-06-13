let bemvindo = alert("Olá! Bem vindo ao conversor de distância espaciais!");

const distanciaAnosLuz = prompt(
  "Qual a distância em anos-luz que deseja converter?"
);

let opcao = prompt(
  "Qual operação deseja realizar?\n" +
    "1. Parsec (PC)\n" +
    "2. Unidade Astronômica (AU)\n" +
    "3. Quilometros (KM)"
);

switch (opcao) {
  case "1":
    alert(
      "Unidade escolhida: " +
        "Parsec \n " +
        "Distância em Anos-luz: " +
        distanciaAnosLuz * 0.306601 +
        " PC"
    );
    break;
  case "2":
    alert(
      "Unidade escolhida: " +
        "Unidade Astronômica\n" +
        "Distância em Anos-luz: " +
        distanciaAnosLuz * 63241.1 +
        " AU"
    );
    break;
  case "3":
    alert(
      "Unidade escolhida: Quilômetros\n" +
        "Distância em Anos-luz: " +
        distanciaAnosLuz * 9.5 * Math.pow(10, 12) +
        " KM"
    );
    break;
  default:
    alert(
      "Unidade escolhida: Opção não identificada\n" +
        "Distância em Anos-luz: Conversão fora do escopo"
    );
}
