const music = new Audio("./assets/audio/gameSound.ogg");
localStorage.setItem("isMusicOn", true);


localStorage.setItem("isAudioOn", true);


/**
 * turn audio on/off 
 * @param {Boolean} isOn 
 */
function turnAudiOnOff(isOn) {

    const gameSoundButton = document.querySelector("#audioButton #audio");

    gameSoundButton?.addEventListener("click", () => {
        if (!isOn) {
            isOn = true;
            localStorage.setItem("isAudioOn", false);
            gameSoundButton.querySelector("img").setAttribute("src", "./assets/icons/audioOff.svg");
            gameSoundButton.classList.add('active') 

        } else {
            isOn = false;
            localStorage.setItem("isAudioOn", true);
            gameSoundButton.querySelector("img").setAttribute("src", "./assets/icons/audioOn.svg");     
            gameSoundButton.classList.remove('active')        
        }
    });

} setTimeout(turnAudiOnOff, 1000);

/**
 * handles with sound during user interaction
 * @param {String | undefined} audioName wait sound name - or null 
 */

export function playAudio(audioName) {
    const audioUri = `./assets/audio/${audioName}.ogg`;
    const audio = new Audio(audioUri);

    const isAudioOn = localStorage.getItem("isAudioOn");
    isAudioOn === "true" ? audio.play() : audio.pause();
}


/**
 * run only when game start
 */
function autoPlayMusicOnce() {
    const isMusicOn = localStorage.getItem("isMusicOn");
    isMusicOn === "true" ? music.play() : music.pause();
}
autoPlayMusicOnce();



/**
 * turn music on/off 
 * @param {Boolean} isMusicOn 
 */
function turnMusicOn(isOn) {

    const gameMusicButton = document.querySelector("#audioButton #music");

    gameMusicButton?.addEventListener("click", () => {

        if (!isOn) {
            isOn = true;
            localStorage.setItem("isMusicOn", isOn);
            music.pause();
            gameMusicButton.querySelector("img").setAttribute("src", "./assets/icons/musicOff.svg");
            gameMusicButton.classList.add('active')
        } else {
            isOn = false;
            localStorage.setItem("isMusicOn", isOn);
            music.play();
            gameMusicButton.querySelector("img").setAttribute("src", "./assets/icons/musicOn.svg");
            gameMusicButton.classList.remove('active')    ;       
        }
    });
}
setTimeout(turnMusicOn, 1000);
