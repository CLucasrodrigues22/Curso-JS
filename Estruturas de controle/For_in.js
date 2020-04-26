const notas = [6.4, 2.6, 9.0, 8.3, 8.3]
for(contador in notas) {
    console.log(`Posição ${contador} | Nota =`, notas[contador])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}