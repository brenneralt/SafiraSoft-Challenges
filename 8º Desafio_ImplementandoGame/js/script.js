document.addEventListener("DOMContentLoaded", function () {
  let contest = document.querySelector(".contest");
  contest.style.display = "none";
});

let pontos = document.getElementById('ponto')

function jokenpo(jogador) {
  console.log(jogador);
  //esconder página atual

  let hands = document.querySelector(".hands");
  hands.style.display = "none";
  let contest = document.querySelector(".contest");
  contest.style.display = "flex";
  let cpu = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

  console.log(cpu);
  /* CONST DAS HANDS PARA SELECIONAR*/
  const divPapel = document.querySelector(".div-papel");
  const divPedra = document.querySelector(".div-pedra");
  const divTesoura = document.querySelector(".div-tesoura");
  
  
  // Selecionando imagens 
  let containerPlayer = document.querySelector(".container-player");
  let containerCpu = document.querySelector(".container-cpu")
      // Para o usuário
      const divPapelClone = divPapel.cloneNode(true);
      const divPedraClone = divPedra.cloneNode(true);
      const divTesouraClone = divTesoura.cloneNode(true);
          // Para a máquina
          const divPapelCloneCPU = divPapel.cloneNode(true);
          const divPedraCloneCPU = divPedra.cloneNode(true);
          const divTesouraCloneCPU = divTesoura.cloneNode(true);

 

    if (jogador == 1 && cpu == 1) { 
        containerPlayer.appendChild(divPapelClone);
        containerCpu.appendChild(divPapelCloneCPU)
        document.getElementById('resultado').textContent = "EMPATE!"

        } else if (jogador == 1 && cpu == 2) { 
          containerPlayer.appendChild(divPapelClone);
          containerCpu.appendChild(divTesouraCloneCPU)
          document.getElementById('resultado').textContent = "VOCÊ PERDEU!"
  
        } else if (jogador == 1 && cpu == 3) { 
          containerPlayer.appendChild(divPapelClone);
          containerCpu.appendChild(divPedraCloneCPU)
          document.getElementById('resultado').textContent = "VOCÊ GANHOU!"

        } else if (jogador == 2 && cpu == 1) { 
      
          containerPlayer.appendChild(divTesouraClone);
          containerCpu.appendChild(divPapelCloneCPU)
          document.getElementById('resultado').textContent = "VOCÊ GANHOU!"
       
        } else if (jogador == 2 && cpu == 2) { 
          containerPlayer.appendChild(divTesouraClone);
          containerCpu.appendChild(divTesouraCloneCPU)
          document.getElementById('resultado').textContent = "EMPATE!"
       
        } else if (jogador == 2 && cpu == 3) { 
          containerPlayer.appendChild(divTesouraClone);
          containerCpu.appendChild(divPedraCloneCPU)
          document.getElementById('resultado').textContent = "VOCÊ PERDEU!"
        
        } else if (jogador == 3 && cpu == 1) { 
          containerPlayer.appendChild(divPedraClone);
          containerCpu.appendChild(divPapelCloneCPU)
          document.getElementById('resultado').textContent = "VOCÊ PERDEU!"
        
        } else if (jogador == 3 && cpu == 2) { 
          containerPlayer.appendChild(divPedraClone);
          containerCpu.appendChild(divTesouraCloneCPU)
          document.getElementById('resultado').textContent = "VOCÊ GANHOU!"
       
        } else if (jogador == 3 && cpu == 3) { 
          containerPlayer.appendChild(divPedraClone);
          containerCpu.appendChild(divPedraCloneCPU)
          document.getElementById('resultado').textContent = "EMPATE!"
        } 

   if(document.getElementById('resultado').textContent == "VOCÊ GANHOU!"){
      pontos++
      } else if (document.getElementById('resultado').textContent == "VOCÊ PERDEU!"){
          pontos--
        } else if (document.getElementById('resultado').textContent == "EMPATE!"){
          pontos = pontos + 0
        }
    
        document.getElementById('ponto').textContent = pontos
}

function playAgain() {
  
    let contest = document.querySelector(".contest");
    contest.style.display = "none";
      let hands = document.querySelector(".hands");
      hands.style.display = "flex";

      let containerPlayer = document.querySelector(".container-player");
      containerPlayer.removeChild(containerPlayer.firstChild)
  
      let containerCpu = document.querySelector(".container-cpu")
      containerCpu	.removeChild(containerCpu.firstChild)
}
