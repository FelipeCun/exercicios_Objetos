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

/*const novoFilme = {
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
console.log(novoFilme);*/



/*const usuario = {
    nome: "FelipudoDoBrasil",
    idade: 28,
    email: "felipem295",
    cidade: "São Leopoldo",
    marcas: ["dell", "LG", "NOKIA"]
}

const usuarioNovo = {
    ...usuario,
    nome: "Felipe"
}

console.log(usuario.nome)*/



//4. Crie uma função que receba um objeto de pessoa (Exercício 2) e crie um novo objeto mantendo as propriedades originais e acrescentando:
//Uma propriedade com a lista de suas comidas preferidas; 
//Uma propriedade que seja um objeto, com nome e idade, para representar o melhor amigo da pessoa. 


//Ainda na função, imprima no console as propriedades desse objeto seguindo o modelo abaixo:
//"O nome da pessoa é ___ e suas comidas preferidas são ___, ___ e ___. Seu melhor amigo se chama ___ e tem ___ anos"


function vidaDoCria() {
    const pessoaAtrasada = {
        nome: "Cria",
        idade: 30,
        musicaGenero: "Trap"
    }

    pessoaAtrasada.comidaPreferida = ["Pão Fofinho", "Bisnaguinha", "Rosca de Polvilho"];
    pessoaAtrasada.melhorAmigo = {
        nome: "Cuquinha",
        idade: 42
    }

console.log("O nome da pessoa é " + pessoaAtrasada.nome + " e suas comidas preferidas são " + pessoaAtrasada.comidaPreferida[0] + ", " + pessoaAtrasada.comidaPreferida[1] + " e " + 
pessoaAtrasada.comidaPreferida[2] + ". Seu melhor amigo se chama " +  pessoaAtrasada.melhorAmigo.nome + " e tem " + pessoaAtrasada.melhorAmigo.idade + " anos.")
}

vidaDoCria()

