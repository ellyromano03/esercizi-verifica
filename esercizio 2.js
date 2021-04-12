//es 2: Data una lista di 500 numeri casuali, restituire una lista contenente ciascun elemento moltiplicato per il numero precedente. Il primo numero deve essere moltiplicato per l'ultimo della lista


let result = []
const data = es.data
result.push(data[0]*data[data.length-1])
for (i=1; i<data.length; i++){
    result.push(data[i]*data[i-1])
}
console.log(result)

