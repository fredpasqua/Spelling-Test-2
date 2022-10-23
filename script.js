var score = 100;
var wordList = [];
var misSpelledWordList = [];
let answers = [];
var wordCount = 0;
var grade4Words = [
  "photograph",
  "autograph",
  "paragraph",
  "graph",
  "automatic",
  "automobile",
  "photo",
  "telephone",
  "telegraph",
  "telescope",
  "television",
  "photogenic",
  "bankrupt",
  "disrupt",
  "interrupt",
  "abrupt",
  "heat",
  "base",
  "correct",
  "bed",
  "straight",
  "measure",
  "energy",
  "usually",
  "farm",
  "its",
  "country",
  "circle",
  "which",
  "written",
  "several",
  "faces",
  "whose",
  "listen",
  "single",
  "buy",
  "language",
  "their",
  "clear",
  "explain",
  "lost",
  "week",
  "grew",
  "fields",
  "bridge",
  "gravity",
  "hungry",
  "eclipse",
  "secret",
  "applaud",
  "laundry",
  "trouble",
  "attract",
  "twilight",
  "between",
  "describe",
  "snowflake",
  "freedom",
  "slimy",
  "glance",
  "burglar",
  "switch",
  "attach",
  "sandwich",
  "change",
  "watch",
  "singer",
  "slippery",
  "spring",
  "gather",
  "these",
  "thread",
  "athlete",
  "worth",
  "thirsty",
  "whisper",
  "whistle",
  "awhile",
  "nowhere",
  "fact",
  "began",
  "clutch",
  "rapid",
  "able",
  "later",
  "space",
  "stranger",
  "grade",
  "display",
  "mistake",
  "explain",
  "freight",
  "neighbor",
  "washtub",
  "veil",
  "awesome",
  "ankle",
  "dialogue",
  "expression",
  "importance",
  "voice",
  "signature",
  "relate",
  "mood",
  "jargon",
  "formulate",
  "exaggeration",
  "personification",
  "systemic",
  "subordinate",
  "resolution",
  "onomatopoeia",
  "literature",
  "imagery",
  "hyperbole",
  "idiom",
  "metaphor",
  "discuss",
  "editor",
  "genre",
  "interpret",
  "intonation",
  "myth",
  "progressive",
  "theme",
  "transition",
  "climax",
  "dishwasher",
  "playground",
  "teammate",
  "yardstick",
  "windshield",
  "fisherman",
  "saltwater",
  "weekend",
  "homesick",
  "mailbox",
  "cardboard",
  "downstairs",
  "fingerprint",
  "haircut",
  "lifeguard",
  "sandpaper",
  "sidewalk",
  "sunlight",
  "thunderstorm",
  "toothpaste",
  "anguish",
  "famine",
  "coax",
  "stubborn",
  "fortune",
  "impulsive",
  "reunite",
  "indignant",
  "twine",
  "village",
  "yard",
  "measurement",
  "length",
  "metric",
  "meter",
  "width",
  "centimeter",
  "kilometer",
  "inch",
  "foot",
  "climate",
  "urban",
  "coastline",
  "boundary",
  "temperature",
  "coastal",
  "planets",
  "suburban",
  "metropolitan",
  "agriculture",
  "rural",
  "microscope",
  "microchip",
  "astrology",
  "megaphone",
  "apathy",
  "sympathy",
  "hydrate",
  "dehydrate",
  "mega",
  "megabit",
  "megastar",
  "astrologist",
  "astronaut",
  "hydrologist",
  "hydroplane",
  "hydrometer",
  "search",
  "church",
  "branches",
  "speeches",
  "beach",
  "teach",
  "crouch",
  "touch",
  "watches",
  "fetches",
  "catches",
  "dispatch",
  "choke",
  "cheerful",
  "churn",
  "chosen",
];

function addWordCount() {
  let counter = document.getElementById("wordCountSelect");
  wordCount = counter.value;
  if (wordCount > 4 && wordCount < 31) {
    counterButton = document.getElementById("wordCount");
    voiceControls = document.getElementById("vControls");
    voiceControls.style.display = "none";
    counterButton.style.display = "none";
    generateRan();
    game();
  } else {
    alert("plese choose a number between 5 and 28!");
  }
}

//Function generates a random numnber without repetition from the length
//of the word list and passes the random numbers to the wordlist[].
function generateRan() {
  var max = grade4Words.length;
  var random = [];
  for (var i = 0; i < max; i++) {
    var temp = Math.floor(Math.random() * max);
    console.log(`test output of math random ${temp}`);
    if (random.indexOf(temp) == -1) {
      random.push(temp);
    } else i--;
  }
  let indexOfWord = random.slice(0, wordCount);
  indexOfWord.forEach(function (item, index) {
    wordList.push(grade4Words[item]);
  });
}

//CREATE THE INPUTS FOR THE TEST BASED ON THE WORDLIST
function game() {
  let submit = document.getElementById("submitButtonScore");
  submit.style.display = "inline-block";
  wordList.forEach(function (value, index) {
    let inputs = document.createElement("input");
    let btnSpeak = document.createElement("button");
    var t = document.createTextNode("Listen");
    btnSpeak.appendChild(t);
    inputs.setAttribute("id", index);
    btnSpeak.setAttribute("id", value);
    btnSpeak.classList.add("talkieBtn");
    inputs.classList.add("xxx");
    let inputsSection = document.getElementById("inputListSection");
    inputs.placeholder = index + 1;
    inputsSection.appendChild(btnSpeak);
    inputsSection.appendChild(inputs);
    btnSpeak.addEventListener("click", () => {
      var toSpeak = new SpeechSynthesisUtterance(btnSpeak.id);
      var selectedVoiceName =
        voiceList.selectedOptions[0].getAttribute("data-name");
      voices.forEach((voice) => {
        if (voice.name === selectedVoiceName) {
          toSpeak.voice = voice;
        }
      });
      synth.speak(toSpeak);
    });
  });
}
//SUBMIT FUNCTION: CHECK WORDS AGAINST LIST, SCORE AND RETURN SCORE
function submit() {
  let scoreBoard = document.getElementById("scoreBoard");
  scoreBoard.style.display = "flex";
  let submitButton = document.getElementById("submitButtonScore");
  submitButton.style.display = "none";
  for (i = 0; i < wordList.length; i++) {
    let decScore = 100 / parseInt(wordList.length);
    let box = document.getElementById(i);
    let outputSubmittedWords = box.value.toLowerCase();
    answers.push(outputSubmittedWords);

    if (answers[i] === wordList[i]) {
      let correctAnswer = document.getElementById(i);
      correctAnswer.classList.add("green");
    } else {
      let incorrectAnswer = document.getElementById(i);
      incorrectAnswer.classList.add("red");
      score = score - decScore;
      let box = document.getElementById(i);
      box.value = wordList[i].toUpperCase();
      console.log(wordList[i]);
    }
  }
  if (score === 100) {
    document.getElementById("scoreContainer").innerHTML =
      " " + Math.round(score);
    var unicorn = document.getElementById("magic");
    unicorn.style.display = "flex";
    var audio = document.getElementById("audio");
    audio.setAttribute("autoplay", true);
  } else {
    document.getElementById("scoreContainer").innerHTML =
      " " + Math.round(score);
  }
}
//CREATE A RESET BUTTON TO RESET THE PAGE BY RELOADING THE URL
const refreshButton = document.querySelector(".refresh-button");
const refreshPage = () => {
  location.reload();
};
refreshButton.addEventListener("click", refreshPage);

var txtInput = document.querySelector("#txtInput");
var voiceList = document.querySelector("#voiceList");
var btnSpeak = document.querySelector("#btnSpeak");
var wordPrompt = document.getElementsByClassName("wordPrompt");
var synth = window.speechSynthesis;
var voices = [];

PopulateVoices();
if (speechSynthesis !== undefined) {
  speechSynthesis.onvoiceschanged = PopulateVoices;
}

btnSpeak.addEventListener("click", () => {
  var toSpeak = new SpeechSynthesisUtterance(txtInput.value);
  var selectedVoiceName =
    voiceList.selectedOptions[0].getAttribute("data-name");
  voices.forEach((voice) => {
    if (voice.name === selectedVoiceName) {
      toSpeak.voice = voice;
    }
  });
  synth.speak(toSpeak);
});

function PopulateVoices() {
  // get the voices library from the local synthesizer
  voices = synth.getVoices();

  // create new variable for selected voices, male and female ('Alex and Samantha');
  const Voices = [];
  Voices.push(voices[0], voices[33]);
  console.log(Voices);
  var selectedIndex = voiceList.selectedIndex < 0 ? 0 : voiceList.selectedIndex;
  voiceList.innerHTML = "";
  Voices.forEach((voice) => {
    var listItem = document.createElement("option");
    listItem.textContent = voice.name;
    listItem.setAttribute("data-lang", voice.lang);
    listItem.setAttribute("data-name", voice.name);
    voiceList.appendChild(listItem);
  });

  voiceList.selectedIndex = selectedIndex;
}


