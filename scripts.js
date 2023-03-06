function playSound(e) {
    const drumTrigger = document.querySelector(`div[data-key="${e.keyCode}"]`)
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if(sound==true)return;
    
    drumTrigger.classList.add("playing")
    sound.currentTime=0;
    sound.play();
    drumTrigger.addEventListener("transitionend", removeBorder)
}
function removeBorder(e){
  
    e.target.classList.remove('playing');
}
window.addEventListener('keydown', playSound)
