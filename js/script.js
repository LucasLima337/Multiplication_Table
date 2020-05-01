var x1 = window.document.querySelector('div#d1')
        var x2 = window.document.querySelector('div#d2')
        var x3 = window.document.querySelector('div#d3')
        var x4 = window.document.querySelector('div#d4')
        var x5 = window.document.querySelector('div#d5')
        var x6 = window.document.querySelector('div#d6')
        var x7 = window.document.querySelector('div#d7')
        var x8 = window.document.querySelector('div#d8')
        var x9 = window.document.querySelector('div#d9')
        var x0 = window.document.querySelector('div#d0')
        function clicar(){
            var n = window.document.getElementById('n1')
            var num = Number.parseInt(n.value)
            x1.innerHTML = `${num} x ${1} = ${num * 1}`
            x2.innerHTML = `${num} x ${2} = ${num * 2}`
            x3.innerHTML = `${num} x ${3} = ${num * 3}`
            x4.innerHTML = `${num} x ${4} = ${num * 4}`
            x5.innerHTML = `${num} x ${5} = ${num * 5}`
            x6.innerHTML = `${num} x ${6} = ${num * 6}`
            x7.innerHTML = `${num} x ${7} = ${num * 7}`
            x8.innerHTML = `${num} x ${8} = ${num * 8}`
            x9.innerHTML = `${num} x ${9} = ${num * 9}`
            x0.innerHTML = `${num} x ${10} = ${num * 10}`
        }
        function cores(){
            x1.style.color = 'blue'
            x2.style.color = 'red'
            x3.style.color = 'blue'
            x4.style.color = 'red'
            x5.style.color = 'blue'
            x6.style.color = 'red'
            x7.style.color = 'blue'
            x8.style.color = 'red'
            x9.style.color = 'blue'
            x0.style.color = 'red'
        }
        function normal(){
            x1.style.color = 'black'
            x2.style.color = 'black'
            x3.style.color = 'black'
            x4.style.color = 'black'
            x5.style.color = 'black'
            x6.style.color = 'black'
            x7.style.color = 'black'
            x8.style.color = 'black'
            x9.style.color = 'black'
            x0.style.color = 'black'
        }