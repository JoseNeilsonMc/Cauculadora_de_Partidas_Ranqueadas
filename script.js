// Função que calcula o nível do jogador com base em suas vitórias e derrotas
function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de vitórias subtraindo derrotas de vitórias
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    // Verifica em que faixa de vitórias o jogador se encaixa e atribui o nível correspondente
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Retorna a mensagem com o saldo de vitórias e o nível do jogador
    return `O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`;
}

// Substitua os valores de vitorias e derrotas pelos dados reais do jogador
const vitorias = 75;
const derrotas = 25;
const resultado = calcularNivel(vitorias, derrotas);

// Exibe o resultado no console
console.log(resultado);