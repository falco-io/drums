function playsound(e){
  
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
      
        if(!audio) return; // stop function from running from playing
      
        key.classList.add('playing');
        audio.currentTime= 0;//rewind to the start
        audio.play();
        
}

function removeTransition(e){
    if(e.propertyName !== 'transition') return; // skip if it's not a transform
    e.target.classList.remove('playing');
}
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitioned', removeTransition));


window.addEventListener('keydown',playsound);