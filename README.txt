Para o exercício, utilize as funções de manipulação de arrays do ES6
que vimos nas aulas (Ex: forEach, map, filter, reduce*)

1 - Criar um array de produtos com a seguinte estrutura:

{
    id: 1010,
    name: "Nome do Produto",
    price: 120.0,
    category: "Livros",
    discount: 0.2,
    amount: 10
}

Adicione pelo menos 10 produtos diferentes com diferentes valores
Tente manter alguns produtos diferentes na mesma categoria
ex: Switch - Games, Xbox - Games, Frieren - Livros, O Senhor dos Anéis - Livro, etc)

2 - Implementar uma função que imprime os produtos do array

Ex: function printProducts(products){}

A função deve iterar pelos produtos e mostrar suas informações organizadas utilizando
template strings

Os produtos com desconto devem mostrar a tag "(PROMOÇÃO)" junto ao nome
e mostrar o novo preço com desconto

Crie uma nova função para cada questão abaixo e crie um título com
console.log identificando aquele resultado

3 - Imprima todos os produtos que possuem algum desconto

4 - Imprima todos os produtos da categoria "Games"

5 - Imprima todos os produtos em promoção na categoria "Livros"

6 - Imprima todos os produtos com estoque zerado (Amount == 0)

7 - Imprima a quantidade total de estoque de todos os produtos

8 - Imprima o produto mais caro

9 - Imprima o produto mais caro na categoria Livros