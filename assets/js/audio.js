const audio = document.getElementById("ambience");
const button = document.getElementById("sound-toggle");

const soundOn = localStorage.getItem("soundOn") === "true";

if (soundOn) {
    audio.play().catch(() => {});
    button.textContent = "🔊 Sound On";
}

button.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        localStorage.setItem("soundOn", "true");
        button.textContent = "🔊 Sound On";
    } else {
        audio.pause();
        localStorage.setItem("soundOn", "false");
        button.textContent = "🔇 Sound Off";
    }
});