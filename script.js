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

  // @todo speak event

  main.appendChild(box);
}
