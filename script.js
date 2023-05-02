/*const jogadorCaro = {
    nome: "FelipudoDoBrasil",
    idade: 28,
    email: "felipem295",
  }
  
    alert("O nome da emoção é " + jogadorCaro.nome + ". " + "\n" + "Sua idade na ponta dos dedos é " + jogadorCaro.idade + "." + 
    "\n" + "E o e-mail é nada mais nada menos que " + jogadorCaro.email + ".");*/



    /*const bicicleta = {
        cor: "Azul",
        marchas: 21,
        estilo: "barra forte torpedo"
    }

    alert("Cristiano Ronaldo de bicicleta " + bicicleta["estilo"] + " " + bicicleta["marchas"] + " marchas");

    bicicleta.marchas = 18;
    console.log(bicicleta.marchas);*/



/*const filme = {
    diretor: "Zeck",
    principal: "Fabudo",
    coadjuvante: "Felipudo",
    antagonista: "Cria",
    nomeFilme: "Duvida?! Só quando Fizer...",
    anoEstreia: 2023
}

alert("Chegou o grande momento! " + "\nDiretor " + filme.diretor + "." + 
"\nO galante " + filme.principal + "." + 
"\nO malévulo " + filme.antagonista + "." +
"\nApresentamos " + filme.nomeFilme + "." +
"\nCom " + filme.coadjuvante + " e grande elenco." +
"\nEstreia este ano de " + filme.anoEstreia + "!");

prompt("Você já assistiu este filmaço? " + "(Sim/Não)");*/



/*const pessoaAtrasada = {
    nome: "Cria",
    idade: 30,
    musicaGenero: "Trap"
}

alert("O nome da pessoa é " + pessoaAtrasada.nome + ", ela tem " + pessoaAtrasada.idade + " anos de idade e " + "gosta muito  de " + pessoaAtrasada.musicaGenero + "." + 
"\nA vida dele é uma " + pessoaAtrasada.musicaGenero + " total.")*/



//Array de objetos[{}]

/*const professores = [
    {nome: "Andrei", modulo: 1},
    {nome: "Vitor", modulo: 2},
    {nome: "Mina", modulo: 3}
]

console.log(professores);
console.log(professores[1]);
console.log(professores[1].nome);*/



/*const curso = {
    nome: "FrontEnd" //string
}

//Adicionando atributo ao objeto
curso.numeroEstudante = 50;
curso['numeroEstudante'] = 80;

console.log(curso.numeroEstudante);*/


//Adicione ao objeto 1 uma lista com os nomes dos personagens do filme.
//Acesse e imprima no console cada pessoa do elenco junto com seu respectivo personagem.
//Altere a primeira pessoa do elenco por "Xuxa".
//Imprima no console todas as propriedades do objeto.

const novoFilme = {
    diretor: "Zeck",
    principal: "Fabudo",
    coadjuvante: "Felipudo",
    antagonista: "Cria",
    nomeFilme: "Duvida?! Só quando Fizer...",
    anoEstreia: 2023
}

novoFilme.figurantes = ["Mastodonte", "Prof° inglês", "Cabelinho"];
novoFilme.figurantes[0] = "Xuxa";

console.log(novoFilme.figurantes);
console.log(novoFilme.diretor);
console.log(novoFilme.principal);
console.log(novoFilme.coadjuvante);
console.log(novoFilme.antagonista);
console.log(novoFilme);