const botoes = document.querySelectorA11(".botao");
const textos = document.querySelectorA11(".aba-conteudo");

for(let i=0;i <botoes.length;i++){
   botoes[i].onclick = function(){

    for(let j=0;j<botoes.length;j++){
         textos[j].classList.remove("ativo");
    }

         botoes[i].classList.add("ativo");
         textos[i].classList.add("ativo");
    }
   
}