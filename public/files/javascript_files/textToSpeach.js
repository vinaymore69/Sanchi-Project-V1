document.getElementById('textForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const fileInput = document.getElementById('textFile');
    const file = fileInput.files[0];

    if (file && file.type === 'text/plain') {
        const text = await file.text();

        // Display the text on the page
        document.getElementById('textDisplay').innerText = text;

        // Fetch available voices
        const voices = await new Promise(resolve => {
            let synth = window.speechSynthesis;
            let id;

            id = setInterval(() => {
                if (synth.getVoices().length !== 0) {
                    resolve(synth.getVoices());
                    clearInterval(id);
                }
            }, 10);
        });

        // Select a female voice
        const femaleVoice = voices.find(voice => voice.name.includes('Female') || voice.name.includes('Google UK English Female') || voice.gender === 'female');

        const utterance = new SpeechSynthesisUtterance(text);
        if (femaleVoice) {
            utterance.voice = femaleVoice;
        } else {
            console.warn('No female voice found. Using default voice.');
        }

        // Play the speech using the browser's speech synthesis
        speechSynthesis.speak(utterance);

        // Enable the audio player and download button
        const audioPlayer = document.getElementById('audioPlayer');
        const downloadBtn = document.getElementById('downloadBtn');
        audioPlayer.style.display = 'block';
        downloadBtn.style.display = 'block';

        // Provide an MP3 file for download (you can replace this with a real generated URL later)
        const audioURL = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'; // Example MP3

        audioPlayer.src = audioURL;

        // Download Button Logic
        downloadBtn.onclick = function() {
            const a = document.createElement('a');
            a.href = audioURL;
            a.download = 'output.mp3';  // You can change the name here
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        };
    } else {
        alert('Please upload a valid .txt file.');
    }
});
