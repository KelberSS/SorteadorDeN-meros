const winer = document.querySelector(".result")
function generatioButton() {

    const min = Math.ceil(document.querySelector(".minimo").value)
    const max = Math.floor(document.querySelector(".maximo").value)

    if(min>max) {
       alert("Valor inválido, troque os valores colocando no espaço à esquerda o valor mínimo e na direita o valor máximo!")
        return;
    }

    const result = Math.floor(Math.random()*(max-min+1))+min;
    

    winer.innerHTML = result
    
}

