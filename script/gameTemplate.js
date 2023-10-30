
import { handleWithAllGameLifeCycle } from "./main.js"

/**
 * Create game template 
 * @returns html template
 */
function gameTemplate(gamePosition = "") {
  for (let i = 1; i <= 9; i++) {
    gamePosition += `<span class="item-${i}" data-key="item-${i}"></span>`;
  }
  const gameTemplate = `
        <div id="modal"></div>
        <section id="app">
            <header>
                <h1>tic tac candy</h1>                             
                <div>
                  <h3>Pontos</h3>
                  <div class="scoreBoard">
                      <strong>Player 1 = <span class="player1"> 0 </span></strong>
                      <strong>Player 2 = <span class="player2"> 0 </span></strong>
                      <img class="ressetPlayerPoints" src="./assets/icons/clear.svg">
                  </div>
              </div>            
            </header>
            
            <div class="container">

                <div class="main">
                  ${gamePosition}
                   
                  <div class="winLineContainer">
                    <div class="linePosition" data-position="default" >
                      <div class="winLinePosition">
                        <div class="winLineElement"></div>
                      </div>
                    </div>
                  </div>
                    
                </div>
            </div>

            <button class="clearGame">Reiniciar o game</button>
            
            <div id="audioButton">
                <button id="music" type="button"><img class="music"  src="./assets/icons/musicOn.svg"></button>
                <button id="audio" type="button"><img class="audio"  src="./assets/icons/audioOn.svg"></button>
            </div>
        </section>
    `

  const renderGameTemplate = document.querySelector("#appWrapper");
  return renderGameTemplate.innerHTML = gameTemplate;
}
gameTemplate();
handleWithAllGameLifeCycle();


