const music = new Audio("./assets/audio/gameSound.ogg");
localStorage.setItem("isMusicOn", true);


localStorage.setItem("isAudioOn", true);


/**
 * turn audio on/off 
 * @param {Boolean} isOn 
 */
function turnAudiOnOff(isOn) {

    const gameSoundButton = document.querySelector("#audioButton img.audio");

    gameSoundButton?.addEventListener("click", () => {
        if (!isOn) {
            isOn = true;
            localStorage.setItem("isAudioOn", false);
            gameSoundButton.setAttribute("src", "./assets/icons/audioOff.jpg");            
        } else {
            isOn = false;
            localStorage.setItem("isAudioOn", true);
            gameSoundButton.setAttribute("src", "./assets/icons/audioOn.jpg");            
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

    const gameMusicButton = document.querySelector("#audioButton img.music");

    gameMusicButton?.addEventListener("click", () => {

        if (!isOn) {
            isOn = true;
            localStorage.setItem("isMusicOn", isOn);
            music.pause();
            gameMusicButton.setAttribute("src", "./assets/icons/musicOff.jpg");

        } else {
            isOn = false;
            localStorage.setItem("isMusicOn", isOn);
            music.play();
            gameMusicButton.setAttribute("src", "./assets/icons/musicOn.jpg");
        }
    });
}
setTimeout(turnMusicOn, 1000);
