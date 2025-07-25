
function soma() {
    var numero1 = document.getElementById("n1").valueAsNumber
    var numero2 = document.getElementById("n2").valueAsNumber
    // var resposta = document.getElementById('resposta')
    // resposta.textContent = numero1 + numero2
    document.getElementById('resposta').textContent = numero1 + numero2
}

function sub() {
    var numero1 = document.getElementById("n7").valueAsNumber
    var numero2 = document.getElementById("n8").valueAsNumber
    // var resposta = document.getElementById('resposta')
    // resposta.textContent = numero1 + numero2
    document.getElementById('respSub').textContent = numero1 - numero2
}

function multi() {
    var numero1 = parseFloat(document.getElementById("n5").value)
    var numero2 = parseFloat(document.getElementById("n6").value)
    // var resposta = document.getElementById('resposta')
    // resposta.textContent = numero1 + numero2
    document.getElementById('respMulti').innerHTML = numero1 * numero2
}

function div() {
    var numero1 = parseFloat(document.getElementById("n3").value)
    var numero2 = parseFloat(document.getElementById("n4").value)
    var resposta = document.getElementById('respDiv')
    if (numero2 !== 0) {
        resposta.innerHTML = numero1 / numero2
    } else {
        resposta.textContent = "Não se divide por 0"
    }
}

//arrow function
const media = () => {
    var numero1 = parseFloat(document.getElementById("m1").value)
    var numero2 = parseFloat(document.getElementById("m2").value)
    var numero3 = parseFloat(document.getElementById("m3").value)
    var numero4 = parseFloat(document.getElementById("m4").value)
    var numero5 = parseFloat(document.getElementById("m5").value)
    var media = document.getElementById('media')
    media.innerHTML = (numero1 + numero2 + numero3 + numero4 + numero5) / 5
    var resp = (numero1 + numero2 + numero3 + numero4 + numero5) / 5
    if(resp >= 7){
        media.style.color = 'green'
        media.style.backgroundColor = 'lightgreen'
    }else{
        media.style.color = 'red'
        media.style.backgroundColor = 'lightpink'
    }
}
