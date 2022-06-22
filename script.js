// funções
function pulalinha() {

    document.write("<br>")

}

function mostra(frase) {

    document.write(frase)

    pulalinha()

}

function mostraconsole(frase) {

    console.log(frase)
}

var sorteados = [];

var adicionarSorteado = function () {
    var numero = document.getElementById("numero").value;
    for (var i = 0; i < 6; i = i + 1) {
        if (sorteados[i] == numero) {
            alert("Numero já sorteado!");
            return;
        }
    }
    sorteados.push(numero);
    console.log(sorteados);
};

var botao = document.getElementById("verificar");
botao.onclick = adicionarSorteado;

var caixaDoNumero = document.getElementById("numero");


segredos = [];

for (var i = 0; i < 6; i += 1) {
    segredos.push(Math.round(Math.random() * 10));
}

var botaoClicado = function () {

    for (var i = 0; i < segredos.length; i = i + 1) {

        if (segredos[i] == caixaDoNumero.value) {

            alert("Parabéns! Você acertou um dos números secretos");
            caixaDoNumero.value = "";
            return;

        }
    }
    alert("Que pena, você errou")
    caixaDoNumero.value = "";
};

chute = [];
for (var i = 0; i < 6; i++) {
    chute.push(parseInt(prompt('digite um numero de 1 a 10')))
}

var acertos = 0;

for (var i = 0; i < 6; i++) {
    for (var o = 0; o < 6; o++)
        if (chute[i] === segredos[o]) {
            acertos = acertos + 1
        };
};

mostraconsole(acertos)
mostraconsole(chute)
mostraconsole(segredos)
