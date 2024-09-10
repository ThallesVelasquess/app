// Imprimindo "Hello World!"
/*
let mensagem = "Hello World!"

// let - variavel que pode mudar
// const - variavel que nao muda


{
    const mensagem = "Ola mundo!"
    console.log(mensagem);
}

console.log(mensagem);
*/

// arrays, objetos
/*
let metas = ["Thalles", "Alo"]

console.log(metas[1] + ", " + metas[0])
*/

 /*
let meta = {
    value: "ler um livro por mês",
    checked: false,

}
console.log(meta.value)
*/


let meta = {
    value: "ler um livro por mês",
    checked: false, 
    log: (info) =>{
        console.log(info)
    }

}

meta.value = "não é mais ler um livro"
meta.log(meta.value)


/*
// function | arrow function
const criarMeta = () => {}

function criarMeta() {}
*/