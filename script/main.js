import { playAudio } from "./gameAudio.js";

/**
 * Handle with all game lifecycle
 * @param {Boolean} key - control the clicks interval between players
 * @param {Boolean} isGameFinished - used to confirm the game finished
 * @param {Interger} number - control the times clicked on the elements field (circle - cross )
 */

export function handleWithAllGameLifeCycle(key, isGameFinished, number = 0) {

    localStorage.setItem("pontos-player-1", 0);
    localStorage.setItem("pontos-player-2", 0);

    const winLine = document.querySelector(".winLine");
    const playerCircle = document.querySelector(".player1");
    const playerCross = document.querySelector(".player2");

    const elementsButton = document.querySelectorAll(".main span");

    elementsButton.forEach(elementButton => {

        // circle elements and props
        let circle = document.createElement("span");
        circle.setAttribute("class", "circle");
        circle.setAttribute("data-key", "circle");
        const circleDataKey = circle.getAttribute("data-key");


        // cross elements and props
        let cross = document.createElement("span");
        cross.setAttribute("class", "cross");
        cross.setAttribute("data-key", "cross");
        const crossDataKey = cross.getAttribute("data-key")

        const setLocalstorageItemPosition = `position-${elementButton.getAttribute("data-key")}`;


        // create elements (circle - cross) on screen 
        elementButton.addEventListener("click", () => {
            
            playAudio("click");
            
            // prevent add new Element if player wins
            if (isGameFinished) {
                return
            }
            // prevent add new element if already exists
            if (elementButton.childNodes.length > 0) {
                return
            }

            // insert items on screen and update localStorage
            number++;
                        
            if (number <= 9) {

                if (!key) {
                    key = true;
                    elementButton.appendChild(circle);
                    localStorage.setItem(setLocalstorageItemPosition, circleDataKey);
                } else {
                    key = false;
                    elementButton.appendChild(cross);
                    localStorage.setItem(setLocalstorageItemPosition, crossDataKey);
                }

            }

            // select items position in localStorage 
            const isPosition = {
                p1: localStorage.getItem("position-item-1"),
                p2: localStorage.getItem("position-item-2"),
                p3: localStorage.getItem("position-item-3"),
                p4: localStorage.getItem("position-item-4"),
                p5: localStorage.getItem("position-item-5"),
                p6: localStorage.getItem("position-item-6"),
                p7: localStorage.getItem("position-item-7"),
                p8: localStorage.getItem("position-item-8"),
                p9: localStorage.getItem("position-item-9"),
            }

            // handles with logical data set in localStorage
            if (number <= 9 &&  number >= 4) {
                //if (number <= 9 ||  number >= 5) {
                
                const isRow1Circle = isPosition.p1 === "circle" && isPosition.p2 === "circle" && isPosition.p3 === "circle";
                const isRow2Circle = isPosition.p4 === "circle" && isPosition.p5 === "circle" && isPosition.p6 === "circle";
                const isRow3Circle = isPosition.p7 === "circle" && isPosition.p8 === "circle" && isPosition.p9 === "circle";

                const isCol1Circle = isPosition.p1 === "circle" && isPosition.p4 === "circle" && isPosition.p7 === "circle";
                const isCol2Circle = isPosition.p2 === "circle" && isPosition.p5 === "circle" && isPosition.p8 === "circle";
                const isCol3Circle = isPosition.p3 === "circle" && isPosition.p6 === "circle" && isPosition.p9 === "circle";

                const isdiagonal1Circle = isPosition.p1 === "circle" && isPosition.p5 === "circle" && isPosition.p9 === "circle";
                const isdiagonal2Circle = isPosition.p3 === "circle" && isPosition.p5 === "circle" && isPosition.p7 === "circle";

                const isRow1Cross = isPosition.p1 === "cross" && isPosition.p2 === "cross" && isPosition.p3 === "cross";
                const isRow2Cross = isPosition.p4 === "cross" && isPosition.p5 === "cross" && isPosition.p6 === "cross";
                const isRow3Cross = isPosition.p7 === "cross" && isPosition.p8 === "cross" && isPosition.p9 === "cross";

                const isCol1Cross = isPosition.p1 === "cross" && isPosition.p4 === "cross" && isPosition.p7 === "cross";
                const isCol2Cross = isPosition.p2 === "cross" && isPosition.p5 === "cross" && isPosition.p8 === "cross";
                const isCol3Cross = isPosition.p3 === "cross" && isPosition.p6 === "cross" && isPosition.p9 === "cross";

                const isdiagonal1Cross = isPosition.p1 === "cross" && isPosition.p5 === "cross" && isPosition.p9 === "cross";
                const isdiagonal2Cross = isPosition.p3 === "cross" && isPosition.p5 === "cross" && isPosition.p7 === "cross";


                /**
                 * handles with  the logical life cycle of the game result 
                 */

                if (isRow1Circle === true || isRow1Cross === true) {
                    isGameFinished = true;
                    number = 0;
                    setWinlineStyle("", 16, null, null)
                    handleWithPlayersPoints(isRow1Circle);
                    showWinnerModal(isRow1Circle);                    
                    return
                }

                if (isRow2Circle === true || isRow2Cross === true) {
                    isGameFinished = true;
                    number = 0;
                    setWinlineStyle("", null, null, null)
                    handleWithPlayersPoints(isRow2Circle);
                    showWinnerModal(isRow2Circle);

                    return
                }

                if (isRow3Circle === true || isRow3Cross === true) {
                    isGameFinished = true;
                    number = 0;
                    setWinlineStyle("", 83, null, null)
                    handleWithPlayersPoints(isRow3Circle)
                    showWinnerModal(isRow3Circle);

                    return
                }

                if (isCol1Circle === true || isCol1Cross === true) {
                    isGameFinished = true;
                    number = 0;
                    setWinlineStyle("", null, 34, 90)
                    handleWithPlayersPoints(isCol1Circle)
                    showWinnerModal(isCol1Circle);

                    return
                }
                if (isCol2Circle === true || isCol2Cross === true) {
                    isGameFinished = true;
                    number = 0;
                    setWinlineStyle("", null, null, 90)
                    handleWithPlayersPoints(isCol2Circle)
                    showWinnerModal(isCol2Circle);

                    return
                }
                if (isCol3Circle === true || isCol3Cross === true) {
                    isGameFinished = true;
                    number = 0;
                    setWinlineStyle("", null, -34, 90)
                    handleWithPlayersPoints(isCol3Circle)
                    showWinnerModal(isCol3Circle);

                    return
                }
                if (isdiagonal1Circle === true || isdiagonal1Cross === true) {
                    isGameFinished = true;
                    number = 0;
                    setWinlineStyle("", null, null, 43)
                    handleWithPlayersPoints(isdiagonal1Circle)
                    showWinnerModal(isdiagonal1Circle);

                    return
                }
                if (isdiagonal2Circle === true || isdiagonal2Cross === true) {
                    isGameFinished = true;
                    number = 0;
                    setWinlineStyle("", null, null, 136)
                    handleWithPlayersPoints(isdiagonal2Circle)
                    showWinnerModal(isdiagonal2Circle);

                    return
                }

                // handles with no players winner
                if (number === 9 && isGameFinished === false) {
                    showWinnerModal(isdiagonal2Circle);
                    number = 0;
                    return;
                }
            }

        })
    })

    /**
     * update players points  
     * @param {Boolean} winner 
     */
    function handleWithPlayersPoints(winner) {

        // select player 1 points
        const selectPlayer1Points = () => {
            const player1 = localStorage.getItem("pontos-player-1")
            return player1;
        }

        // select player 2 points
        const selectPlayer2Points = () => {
            const player2 = localStorage.getItem("pontos-player-2")
            return player2;
        }


        // update players points
        const updatePlayersPoints = () => {
            winner === true
                ? localStorage.setItem("pontos-player-1", parseInt(selectPlayer1Points()) + 1)
                : localStorage.setItem("pontos-player-2", parseInt(selectPlayer2Points()) + 1)
        }
        updatePlayersPoints();


        // show player points on screen
        const renderPlayersPoints = () => {
            playerCircle.textContent = selectPlayer1Points();
            playerCross.textContent = selectPlayer2Points();
            playAudio("earnedPoints");
        }
        renderPlayersPoints();
    }


    /**
     * Handle with winline css style positions
     * 
     * @param {String} display - wait "unset" or " "; 
     * @param {Interger} positionTop - wait null or number between 0 to 83
     * @param {Interger} positionRight - wait null or number between 0 to 34
     * @param {Interger} rotate - wait null or number between 0 to +/-360
     */
    function setWinlineStyle(display, positionTop, positionRight, rotate) {
        winLine.style.display = display === "" ? "unset" : display;
        winLine.style.top = `${positionTop === null ? 49 : positionTop}%`;
        winLine.style.right = `${positionRight === null ? 0 : positionRight}%`;
        winLine.style.transform = `rotate(${rotate === null ? 0 : rotate}deg)`;
    }

    /**
     * clear screen and localstorage results
     */
    function clearResult() {
        const cross = document.querySelectorAll(".cross");
        const circle = document.querySelectorAll(".circle");

        cross.forEach((el) => {
            el.remove(el)
        })
        circle.forEach((el) => {
            el.remove(el)
        })

        for (let i = 1; i <= 9; i++) {
            localStorage.removeItem(`position-item-${i}`);
        }
        setWinlineStyle("none", null, null, null);
        isGameFinished = false;
        number = 0;
    }

    /**
     * handle with resset game button
     */
    function ressetGame() {
        const button = document.querySelector(".clearGame");
        button.addEventListener("click", () => {
            clearResult();
            playAudio("buttons");
        })
    } ressetGame();


    /**
    * handle with close the game cleaning all data storage.
    */
    function closeGame() {
        const closeButton = document.querySelector("button.closeGame");

        closeButton.addEventListener("click", () => {
            playAudio("click");
            clearResult();
            localStorage.setItem("pontos-player-1", 0);
            localStorage.setItem("pontos-player-2", 0);
            playerCircle.textContent = "0";
            playerCross.textContent = "0";
        });

    } closeGame();



    /**
     * create modal with player winner
     * @param {*} positionName 
     * @returns 
     */

    function showWinnerModal(positionName) {

        const playerWinner = positionName === true ? "player 1" : "player 2";

        const showWinnerModal = document.querySelector("#modal");

        showWinnerModal.classList.add("show");
        showWinnerModal.style.opacity = "1"
        showWinnerModal.style.transform = "translateY(0px)";

        const closeModal = () => {
            const closeModalButton = document.querySelector(".closeModal");
            const getElementsModal = document.querySelector("#modal div");
            closeModalButton.addEventListener("click", () => {

                showWinnerModal.classList.remove("show");
                showWinnerModal.style.opacity = "0"
                showWinnerModal.style.transform = "translateY(500px)";
                getElementsModal.remove();
                clearResult();
                playAudio("buttons");
            });
        }

        const component = `
            <div>
            ${isGameFinished === true
                ? `<h3>Vencedor da Partida!</h3><h4>${playerWinner}</h4>`
                : `<h3>Ninguem Venceu a Partida!</h3>`
            }                              
                <button class="closeModal">Jogar Novamente</button>
            </div>
        `
        isGameFinished === true ? playAudio("wins") : playAudio("noWins")

        setTimeout(closeModal, 100);

        return showWinnerModal.innerHTML = component;
    }
        
}



