const question = document.getElementById("question");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const buttons = document.getElementById("buttons");
const finalMessage = document.getElementById("finalMessage");
const heartRain = document.getElementById("heartRain");
const background = document.querySelector(".background");

const funnyResponses = [
  "Aneee. But I brought flowers 🌹🥺",
  "You're hurting my cupcake heart againn 🧁💔",
  "Even teddy is crying 🧸😢",
  "I'll dance for you! 💃",
  "Okay but… what if I bring PIZZA? 🍕",
  "Alright… I’ll just hug my pillow as usual 😭"
];

let noClickCount = 0;

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 2 + "s";
  heartRain.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);

noBtn.addEventListener("click", () => {
  if (noClickCount < funnyResponses.length) {
    question.innerText = funnyResponses[noClickCount];
    noClickCount++;

    // Set sad background
    background.style.background = "linear-gradient(to right, #b0bec5, #90a4ae)";
    document.body.style.color = "#ffffff";
  } else {
    noBtn.style.display = "none";
  }
});

yesBtn.addEventListener("click", () => {
  buttons.style.display = "none";
  question.style.display = "none";
  finalMessage.classList.remove("hidden");

  // Set happy romantic background
  background.style.background = "linear-gradient(to right, #ffe6f0, #ffd1dc, #ffc1e3)";
  document.body.style.color = "#ff1493";
});