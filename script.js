// funções
function pulalinha() {
    
    document.write("<br>");
    
};

function mostra(frase) {
    
    document.write(frase)
    
    pulalinha()

    }

function mostraconsole(frase) {
    
    console.log(frase)
    
}

// var's

var segredos = [16, 34, 37, 42, 50, 58];
segredos[0] = 20;
console.log(segredos[0]);
segredos.push(60);
console.log(segredos[6]);
console.log(segredos.length);

sorteados = []
var adicionarSorteado = function() {
var numero = document.getElementById("numero").value;
sorteados.push(numero);
console.log(sorteados);



var adicionarSorteado = function() {
    var numero = document.getElementById("numero").value;
    for(var i = 0; i < sorteados.length; i = i + 1) {
        
        if(sorteados[i] == numero) {
            alert("Numero já sorteado!");
            return;
        };
};
};
var botao = document.getElementById("verificar");
botao.onclick = adicionarSorteado;
sorteados.push(numero);
console.log(sorteados);


    
var caixaDoNumero = document.getElementById("numero"); 

var botaoClicado = function() {
    
    for(var i = 0; i < segredos.length; i = i + 1) {
        
        if(segredos[i] == caixaDoNumero.value) {
            
            alert("Parabéns! Você acertou um dos números secretos");
            caixaDoNumero.value= "";
            return;
            
        }
    }
    alert("Que pena, você errou")
    caixaDoNumero.value= "";
};

var botaoAdivinhar = document.getElementById("adivinhar");

botaoAdivinhar.onclick = botaoClicado;


