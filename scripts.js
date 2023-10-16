let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector('select');

window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

voiceSelect.addEventListener('change', () =>{
    speech.voice = voices[voiceSelect.value]
})

document.querySelector('#play').addEventListener('click', () =>{
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);
});

document.querySelector('#pause').addEventListener('click', () =>{
    // speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.pause(speech);
});

document.querySelector('#again').addEventListener('click', () =>{
    // speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.resume(speech);
});
