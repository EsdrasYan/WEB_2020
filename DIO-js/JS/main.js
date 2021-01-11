
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.google.com")
    //window.location.href = "https://www.google.com";
}

function trocar (elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    elemento.innerHTML = "Obrigado por passar o mouse";
   //alert("trocar texto"); 
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página carregada")
}

function funcaochange(elemento){
    console.log(elemento.value)
}








/*
function soma(n1, n2){
    return n1 + n2;
}

function validarIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validarIdade(idade));

alert(soma(5, 10));
*/




//Condicionais, laços de repetição e date

/*
var d = new Date();

alert(d.getMonth()+1);
alert(d.getHours());
alert(d.getDay());
alert(d.getMinutes());
*/




/*
var count;
for(count=1; count <= 5; count++){
    alert(count);
};
*/


/*
var count = 0;
while (count <= 5){
    console.log(count);
    //alert(count)
    count = count + 1;
};
*/

/*
var idade = prompt("Qual sua idade?");
//var idade = 18; 
if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}
*/



//Exemplo de objeto com lista

/*
var frutas = [{nome: "maça", cor:"Vermelha"}, {nome: "uva", cor:"Roxo"}]
console.log(frutas.nome);
alert(frutas[1].cor);
*/


/*
var fruta = {nome: "maça", cor:"Vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//Exemplo de Array

//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva"); //Adicionar elementos na lista
//lista.pop("laranja") //Remove elementos da lista

//lista.length //ler a quantidade de elementos da lista
//lista.reverse() // Altera a ordem dos elementos da lista.
//lista.toString() //Coversão de lista pra string
//lista.join("-") //separa a lista pelo elemento desejado.
//console.log(lista)

/*
var nome = "Esdras Aguiar";
var idade = 22;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos ");
//alert(idade + idade2)

console.log(nome);
console.log(idade * idade2);
alert(frase.toLocaleUpperCase());
*/


