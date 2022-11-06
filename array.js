const pessoas = [
    { name: 'Fabiana Araújo', age: 33 },
    { name: "Gabriel Gomes", age: 25 },
    { name: "Fernando Henrique", age: 17 },
    { name: "Ana Luiza", age: 2 },
    { name: "Geralda do Nascimento", age: 93 },
    { name: "Miguel Souza", age: 70 },
    { name: "Antonio Miguel", age: 69 },
  
  ];
  
  
  
  // imprimir a média das pessoas
  const media = pessoas.reduce((acumulado, pessoa) => 
  acumulado + pessoa.age/7, 0)
  console.log('A média é', media.toFixed(2))
  
  // Imprimir todos os nomes
  const nomes = pessoas.map(pessoa => `${pessoa.name}`);
  console.log(nomes);
  
  // Imprimir apenas os maiores de idade autorizados a terem habilitação
  const maioridade = pessoas.filter(pessoa => (pessoa.age > 18));
  console.log( "Os dados dos de maiores são",maioridade);
  
  // Imprimir os dados de Gabriel Gomes com tratativa de erro.
  var found = prompt("Digite um nome");
  if (found === "Gabriel Gomes"){
   found = pessoas.find(nome => (nome.name === "Gabriel Gomes"));
  console.log(found);}
  
  else {
    console.log ('não é Gabriel Gomes');
  }
  
  
  