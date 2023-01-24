const main = document.querySelector('main');
const voicesSelect = document.getElementById('voices');
const textarea = document.getElementById('text');
const readBtn = document.getElementById('read');
const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');

const data = [
  {
    image: './img/drink.jpg',
    text: "I'm thirsty!"
  },
  {
    image: './img/food.jpg',
    text: "I'm hungry!"
  },
  {
    image: './img/angry.jpg',
    text: "I'm Angry!"
  },
  {
    image: './img/grandma.jpg',
    text: "I'm need grandma!"
  },
  {
    image: './img/happy.jpg',
    text: "I'm happy!"
  },
  {
    image: './img/home.jpg',
    text: "I want home!"
  },
  {
    image: './img/hurt.jpg',
    text: "I'm hurt!"
  },
  {
    image: './img/outside.jpg',
    text: "I wanna go outside!"
  },
  {
    image: './img/sad.jpg',
    text: "I'm feeling sad!"
  },
  {
    image: './img/scared.jpg',
    text: "I'm scared about spices!"
  },
  {
    image: './img/school.jpg',
    text: "I wanna go to school!"
  },
  {
    image: './img/tired.jpg',
    text: "I'm tired!"
  }
]

data.forEach(createBox);

// create speech boxes

function createBox(item) {
  const box = document.createElement('div');

  const { image, text } = item;

  box.classList.add('box');
  box.innerHTML = `
    <img src="${image}" alt="${text}" />
    <p class="info">${text}</p>
  `;

  box.addEventListener('click', () => {
    setTextMessage(text);
    speakText();

    //add active effect
    main.classList.add('active');
    setTimeout(() => box.classList.remove('active'), 800);
  })

  main.appendChild(box);
}

//Init Speech synth

const message = new SpeechSynthesisUtterance();

// store voices
let voices = [];

function getVoices() {
  voices = speechSynthesis.getVoices();

  voices.forEach(voice => {
    const option = document.createElement('option');

    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`;

    voicesSelect.appendChild(option);
  });
}

//set text
function setTextMessage(text) {
  message.text = text
}

//set voice 
function setVoice(e) {
  message.voice = voices.find(voice => voice.name === e.target.value);
}

// speak the text
function speakText() {
  speechSynthesis.speak(message);
}

speechSynthesis.addEventListener('voiceschanged', getVoices);

// toggle text box

toggleBtn.addEventListener('click', () => {
  document.getElementById('text-box').classList.toggle('show');
})


// Close button
closeBtn.addEventListener('click', () => {
  document.getElementById('text-box').classList.remove('show');
})

// change voice
voicesSelect.addEventListener('change', setVoice);

// tread text button
readBtn.addEventListener('click', () => {
  setTextMessage(textarea.value);
  speakText();
})

getVoices();
