var display = document.getElementById('display')

function calcular (tipo, valor) {
    if(tipo === 'acao') {
        if (valor === 'c') {
            //limpa res
            display.value = ''
        }
        if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
            display.value += valor
        }
        if (valor === '=') {
            var valor_campo = document.getElementById('display').value

            display.value = eval(valor_campo)
        }
    }
    else if(tipo === 'valor') {
        display.value += valor
    }
}