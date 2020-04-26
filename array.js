const valoresArray = [7.7, 4.2, 23, 'string']
console.log(valoresArray[0], valoresArray[4])
valoresArray[4] = 10
console.log(valoresArray)
console.log(valoresArray.length)

valoresArray.push({id: 3}, false, null, 'teste')
console.log(valoresArray)

console.log(valoresArray.pop())
delete valoresArray[0]
console.log(valoresArray)

console.log(typeof valoresArray)
