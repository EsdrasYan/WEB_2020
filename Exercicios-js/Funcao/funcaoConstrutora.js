function Carro (velociadadeMaxima = 200, delta = 5){

    //atributo privado
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velociadadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velociadadeMaxima
        }
    }

    //metodo publico
    this.getvelocidadeatual = function() {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getvelocidadeatual())

const ferrai =  new Carro(350, 20)
ferrai.acelerar()
ferrai.acelerar()
ferrai.acelerar()
console.log(ferrai.getvelocidadeatual())