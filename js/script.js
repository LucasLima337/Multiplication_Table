var button = window.document.querySelector('button#but')
button.addEventListener('click', clicar)

function clicar(){
    var numtxt = window.document.querySelector('input#num')
    var num = Number.parseInt(numtxt.value)

    if(numtxt.value == ''){
        window.alert('Preencha o campo abaixo para realizar a operação!')
    }
    else{
        var sec2 = window.document.querySelector('section#sec2')
        var tab = window.document.querySelector('div#tab')
        var i = 1
        sec2.style.padding = '20px'
        tab.innerHTML = ''
        while(i <= 10){
            tab.innerHTML += `${num} x ${i} = ${num * i}<br>`
            i += 1
        }
    }
}
