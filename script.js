const sourceLang = document.getElementById('sourceLang');
const targetLang = document.getElementById('targetLang');
const btn = document.getElementById('btn');
const inputText = document.getElementById('inputText');
const result = document.getElementById('text');
const voiceInput = document.getElementById('voiceInput');
const speakOutput = document.getElementById('speakOutput');
btn.addEventListener('click', () => {
    fetch(`https://api.mymemory.translated.net/get?q=${inputText.value}&langpair=${sourceLang.value}|${targetLang.value}`).then((res) => res.json()).then((data) => {
        console.log(data);
        
        result.innerText = data.responseData.translatedText
    })
})

voiceInput.addEventListener('click', () => {
    let skooch = new SpeechSynthesisUtterance();
    skooch.text = inputText.value;
    skooch.lang = targetLang.value;
    speechSynthesis.speak(skooch);
})

speakOutput.addEventListener('click', () => {
    let skooch = new SpeechSynthesisUtterance();
    skooch.text = result.innerText;
    skooch.lang = targetLang.value;
    speechSynthesis.speak(skooch);
})
