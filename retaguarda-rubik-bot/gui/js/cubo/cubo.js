// var container = document.createElement("div");
// container.setAttribute("class", "container-cubo");

var containerCubo = document.querySelector("#preview-cubo");

for (i = 0; i < 3; i++){
    for (j = 0; j < 4; j++){        
        var quadrante = document.createElement("div");
        quadrante.setAttribute("class", "quadrante d-inline-block");
        quadrante.setAttribute("id", "q"+ i.toString() + j.toString());
        containerCubo.appendChild(quadrante);
    }
}
// document.getElementById("preview-cubo").appendChild(container);

var faceSuperior = document.getElementById("q01");
var faceEsquerda = document.getElementById("q10");
var faceFrente = document.getElementById("q11");
var faceDireita = document.getElementById("q12");
var faceCosta = document.getElementById("q13");
var faceInferior = document.getElementById("q21");

const vermelho = 'red'
const laranja = 'orange'
const verde = 'green'
const azul = 'blue'
const branco = 'white'
const amarelo = 'yellow'

addFace(
    faceEsquerda,
    [
        [vermelho, vermelho, vermelho],
        [vermelho, vermelho, vermelho],
        [vermelho, vermelho, vermelho]
    ]
)

addFace(
    faceFrente,
    [
        [branco, branco, branco],
        [branco, branco, branco],
        [branco, branco, branco]
    ]
)

addFace(
    faceSuperior,
    [
        [azul, azul, azul],
        [azul, azul, azul],
        [azul, azul, azul]
    ]
)

addFace(
    faceDireita,
    [
        [laranja, laranja, laranja],
        [azul, laranja, amarelo],
        [laranja, laranja, laranja]
    ]
)

addFace(
    faceCosta,
    [
        [amarelo, amarelo, amarelo],
        [amarelo, amarelo, amarelo],
        [amarelo, amarelo, amarelo]
    ]
)

addFace(
    faceInferior,
    [
        [verde, verde, verde],
        [verde, verde, verde],
        [verde, verde, verde]
    ]
)

function addFace(quadrante, arr){
    //adiciona uma face a um quadrante
    for (i = 0; i < 3; i++){
        for (j = 0; j < 3; j++){            
            var contPeca = document.createElement("div");
            contPeca.setAttribute("class", "cont-peca d-inline-block");
            // var peca = document.createElement("figure");
            // peca.setAttribute("class", "peca");
            contPeca.style.backgroundColor = arr[i][j];
            // contPeca.appendChild(peca);
            quadrante.appendChild(contPeca);
        }
    }
}