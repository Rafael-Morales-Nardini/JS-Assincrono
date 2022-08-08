let aceitar = true

console.log('Promessa feita')
const promessa = new Promise((resolve, reject) => {
    if (aceitar){
        return resolve('Deu certo')
    } else{
    return reject('Deu errado')
    }
})

console.log('Esperando resultado')
promessa
.then(result => console.log(result))
.catch(erro => console.log(erro))
.finally(() => console.log('Fim da promessa'))