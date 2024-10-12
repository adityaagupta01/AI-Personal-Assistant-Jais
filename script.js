let btn = document.querySelector("#btn");
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;

    
    const voices = window.speechSynthesis.getVoices();
    console.log("Available voices:", voices); 

    
    const indianFemaleVoice = voices.find(voice => voice.lang === "en-IN" && voice.name==="Microsoft Heera - English (India)");

    if (indianFemaleVoice) {
        text_speak.voice = indianFemaleVoice;
    } else {
        console.warn("Indian female voice not found. Using default voice.");
    }

    window.speechSynthesis.speak(text_speak);
}

function wishme() {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 0 && hours < 12) {
        speak("Hello Sir, Good Morning");
    } else if (hours >= 12 && hours < 17) {
        speak("Hello Sir, Good Afternoon");
    } else {
        speak("Hello Sir, Good Evening");
    }
}

// window.addEventListener('load', () => {
//     speechSynthesis.onvoiceschanged = () => {
//         wishme();
//     };
// });
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript)
}
btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
function takeCommand(message) {
    btn.style.display="flex"
    voice.style.display="none"
    message = message.toLowerCase(); 

    
    if (message.includes("hello") || message.includes("hey")) {
        speak("Hello Sir, I am Jais, your personal assistant. How can I assist you today?");
    } 
    else if (message.includes("how are you")) {
        speak("I am just a program, but thank you for asking. How can I assist you today?");
    }
    else if (message.includes("good morning")) {
        speak("good morning sir");
    }
    else if (message.includes("good afternoon")) {
        speak("good afternoon sir");
    }
    else if (message.includes("good evening")) {
        speak("good evening sir");
    }
    else if (message.includes("good night")) {
        speak("good night sir");
    }
    
    else if (message.includes("what is the time") || message.includes("current time")) {
        let currentTime = new Date().toLocaleTimeString();
        speak(`The current time is ${currentTime}`);
    }
    
    
    else if (message.includes("what is the date") || message.includes("today's date")) {
        let currentDate = new Date().toDateString();
        speak(`Today's date is ${currentDate}`);
    }
    
   
    else if (message.includes("what is the weather")) {
        
        speak("The weather today is sunny with a high of 30 degrees Celsius.");
    }
    
  
    else if (message.includes("what day is it")) {
        let currentDay = new Date().toLocaleDateString(undefined, { weekday: 'long' });
        speak(`Today is ${currentDay}`);
    }

 
    else if (message.includes("calculate")) {
        try {
            let expression = message.replace("calculate", "").trim();
            let result = eval(expression);
            speak(`The result of ${expression} is ${result}`);
        } catch (error) {
            speak("Sorry, I couldn't perform the calculation. Please try again.");
        }
    }

  
    else if (message.includes("tell me a joke")) {
        let jokes = [
            "Why don’t scientists trust atoms? Because they make up everything!",
            "Why did the math book look sad? Because it had too many problems.",
            "Why can't you give Elsa a balloon? Because she will let it go!"
        ];
        let randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        speak(randomJoke);
    }

   
    else if (message.includes("tell me a quote") || message.includes("inspire me")) {
        let quotes = [
            "The only way to do great work is to love what you do. - Steve Jobs",
            "Success is not the key to happiness. Happiness is the key to success.",
            "Your time is limited, don’t waste it living someone else’s life."
        ];
        let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        speak(randomQuote);
    }

   
    else if (message.includes("remind me to")) {
        let reminder = message.replace("remind me to", "").trim();
        speak(`I will remind you to ${reminder}.`);
        
    }

    
    else if (message.includes("open") && message.includes("google")) {
        speak("Opening Google.");
        window.open("https://www.google.com");
    } 
    else if (message.includes("open") && message.includes("youtube")) {
        speak("Opening YouTube.");
        window.open("https://www.youtube.com");
    }

   
    else if (message.includes("goodbye") || message.includes("exit")) {
        speak("Goodbye Sir, have a great day!");
    }
    else if (message.includes("who made you") || message.includes("who created you")) {
        speak("I was created by Aditya Raj Sir, also known as Aadi Sir.");
        speak("Aditya Sir Social Media Links are here")
        window.open("https://linktr.ee/adityaagupta01")

    }
    else if (message.includes("what is your name?") || message.includes("What is your name?")) {
        speak("I'm Jais, Your Personal Assistant");   
    } 
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp")
        window.open("whatsapp://")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator")
        window.open("calculator://")
    }
    else if(message.includes("open linkedin")){
        speak("opening linkedin")
        window.open("linkedin://")
    }
    else if(message.includes("open file explorer")){
        speak("opening file explorer");
        window.open("explorer://");
    }
    else if(message.includes("open notepad")){
        speak("opening notepad");
        window.open("notepad://");
    }
    else if(message.includes("open calculator")){
        speak("opening calculator");
        window.open("calculator://");
    }
    else if(message.includes("open instagram")){
        speak("opening instagram");
        window.open("http://www.instagram.com");
    }
    else if(message.includes("open paint")){
        speak("opening paint");
        window.open("mspaint://");
    }
    else if(message.includes("open command prompt")){
        speak("opening command prompt");
        window.open("cmd://");
    }
    else if(message.includes("open powershell")){
        speak("opening powershell");
        window.open("powershell://");
    }
    else if(message.includes("open task manager")){
        speak("opening task manager");
        window.open("taskmgr://");
    }
    else if(message.includes("open control panel")){
        speak("opening control panel");
        window.open("control://");
    }
    else if(message.includes("open settings")){
        speak("opening settings");
        window.open("ms-settings://");
    }
    else if(message.includes("open snipping tool")){
        speak("opening snipping tool");
        window.open("ms-snippingtool://");
    }
    else if(message.includes("open bluetooth settings")){
        speak("opening bluetooth settings");
        window.open("ms-settings:bluetooth");
    }
    else if(message.includes("open network settings")){
        speak("opening network settings");
        window.open("ms-settings:network-status");
    }
    else if(message.includes("open windows security") || message.includes("open windows defender")){
        speak("opening windows security");
        window.open("windowsdefender://");
    }           
    else {
        speak("I'm not sure about that. Let me search it on Google for you.");
        let query = message.replace("search", "").trim();
        window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`);
    
    }
}
