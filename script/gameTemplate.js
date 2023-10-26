
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
                <button class="closeGame">x</button>
            </header>
            <div class="points">
                <strong>Pontos</strong>
                <div>
                    <strong>Player 1 = <span class="player1"> 0 </span></strong>
                    <strong>Player 2 = <span class="player2"> 0 </span></strong>
                </div>
            </div>
            <div class="container">

                <div class="main">
                   ${gamePosition}
                    <div class="winLine"></div>
                </div>
            </div>
            <button class="clearGame">Reiniciar o game</button>
            
            <div id="audioButton">
                <img class="music"  src="./assets/icons/musicOn.jpg">
                <img class="audio"  src="./assets/icons/audioOn.jpg">
            </div>
        </section>
    `

    const renderGameTemplate = document.querySelector("#appWrapper");
    return renderGameTemplate.innerHTML = gameTemplate;
}
gameTemplate();
handleWithAllGameLifeCycle();


