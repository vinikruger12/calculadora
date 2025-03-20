var num = document.querySelector('p.numeros')
var primeiro = ''
var segundo = ''
var operacao = ''

function limpar(){  
    primeiro = '' //limpa a variavel 1
    segundo = ''  //limpa a variavel 2
    num.innerHTML = '' //limpa o visor
}

function nove(){
    if(operacao === ''){ //se nao tiver nenhuma operacao o primeiro recebe, logo
        primeiro += '9' //recebe 9 como string
        num.innerHTML = primeiro //aparece o nove no visor
    }else{ //se a operacao ja tiver sido adicionada
        segundo += '9' //recebe 9 como string
        num.innerHTML = primeiro + '' + operfunc() + '' + segundo //no visor aparece o primeiro numero mais a operacao e ai o segundo numero, os '' servem para deixar espaco no visor
    }
}

function oito(){
    if(operacao === ''){
        primeiro += '8'
        num.innerHTML = primeiro
    }else{
        segundo += '8'
        num.innerHTML = primeiro + '' + operfunc() + '' + segundo
    }
}

function sete(){
    if(operacao === ''){
        primeiro += '7'
        num.innerHTML = primeiro
    }else{
        segundo += '7'
        num.innerHTML = primeiro + '' + operfunc() + '' + segundo
    }
}

function seis(){
    if(operacao === ''){
        primeiro += '6'
        num.innerHTML = primeiro
    }else{
        segundo += '6'
        num.innerHTML = primeiro + '' + operfunc() + '' + segundo
    }
}

function cinco(){
    if(operacao === ''){
        primeiro += '5'
        num.innerHTML = primeiro
    }else{
        segundo += '5'
        num.innerHTML = primeiro + '' + operfunc() + '' + segundo
    }
}

function quatro(){
    if(operacao === ''){
        primeiro += '4'
        num.innerHTML = primeiro
    }else{
        segundo += '4'
        num.innerHTML = primeiro + '' + operfunc() + '' + segundo
    }
}

function tres(){
    if(operacao === ''){
        primeiro += '3'
        num.innerHTML = primeiro
    }else{
        segundo += '3'
        num.innerHTML = primeiro + '' + operfunc() + '' + segundo
    }
}

function dois(){
    if(operacao === ''){
        primeiro += '2'
        num.innerHTML = primeiro
    }else{
        segundo += '2'
        num.innerHTML = primeiro + '' + operfunc() + '' + segundo
    }
}

function um(){
    if(operacao === ''){
        primeiro += '1'
        num.innerHTML = primeiro
    }else{
        segundo += '1'
        num.innerHTML = primeiro + '' + operfunc() + '' + segundo
    }
}

function virgula(){
    if(operacao === ''){
        primeiro += '.'
        num.innerHTML = primeiro
    }else{
        segundo += '.'
        num.innerHTML = primeiro + '' + operfunc() + '' + segundo
    }
}

function zero(){
    if(operacao === ''){
        primeiro += '0'
        num.innerHTML = primeiro
    }else{
        segundo += '0'
        num.innerHTML = primeiro + '' + operfunc() + '' + segundo
    }
}

function zz(){
    if(operacao === ''){
        primeiro += '00'
        num.innerHTML = primeiro
    }else{
        segundo += '00'
        num.innerHTML = primeiro + '' + operfunc() + '' + segundo
    }
}




function divi(){ //funcao quando clicar o botao function
    operacao = 'div' //da o valor div para a variavel operacao
    num.innerHTML += '÷'
}

function mult(){
    operacao = 'mult'
    num.innerHTML += 'x'
}

function sub(){
    operacao = 'sub'
    num.innerHTML += '-'
}

function adic(){
    operacao = 'adic'
    num.innerHTML += '+'
}

function operfunc(){ //funcao que ira no meio dos dois
    switch(operacao){
        case 'adic': //se for adicao retorna o +
            return '+';

        case 'sub': //se for subtracao retorna o -
            return '-';

        case 'mult':
            return 'x';

        case 'div':
            return '÷';

        default: return ''; //deve ter default em todos os casos
    }
}

function res(){ //fucntion resultado
    var resultado = 0 //colocar um resultado zero para depois ganhar um valor
    var num1 = Number(primeiro) //transformar as strings em numbers
    var num2 = Number(segundo)

    if(operacao === 'adic'){ //se a oper tiver ganho +, o resultado deve ganhar n1 + n2
        resultado = num1 + num2
    }else if(operacao === 'sub'){
        resultado = num1 - num2
    }else if(operacao === 'mult'){
        resultado = num1*num2
    }else if(operacao === 'div'){ 
        if(num2 != 0){ // se n2 for diferente de zero roda normal
                resultado = num1/num2
        }else{ // se for igual a zero nao roda
            resultado = 'Erro'
        }
    }

    num.innerHTML = resultado // ao apertar o botao o resultado ira aparecer no visor

    primeiro = String(resultado) // o primeiro vai aparecer o resultado e esse resultado tera valor de string para poder ser adicionado mais numeros no futuro, ja a operacao e o segundo numero irao ser resetados
    segundo = ''
    operacao = ''
}