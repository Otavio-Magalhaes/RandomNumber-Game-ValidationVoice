const elementoChute = document.getElementById("chute");



window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;  

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br'
recognition.start()
recognition.addEventListener('result', onSpeak);

function onSpeak(event){
    const chute = event.results[0][0].transcript;

    exibeChute(chute);
}

function exibeChute(chute){
    elementoChute.innerHTML = `<div> Você Disse:</div>
    <span class='box'> ${chute} </span> 
    `
}