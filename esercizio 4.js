//es 4: Data una lista di numeri, eleva ciascun elemento a potenza, considerando come esponente il primo elemento della lista data; restituisci infine la somma di tutti i numeri pari presenti nella lista ottenuta

const data = es.data
for (i=1; i<data.length; i++){
    data[i]=Math.pow(data[i], data[0])
    
}
console.log(data)
result=0
for(i=0; i<data.length; i++){
    if(data[i]%2===0) result = result+data[i]
}
    
console.log(result);
 
    