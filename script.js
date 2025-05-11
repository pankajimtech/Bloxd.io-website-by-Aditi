// Simple wellness chatbot responses
const responses = {
  hello: "Hello! 😊",
  hi: "Hello! 😊",
  "do you want to play bloxd": "yes!!!!!!!",
  "how are you":
    "I'm just a bot, but I'm doing great! How are you feeling today?",
  "feel sad":
    "I'm really sorry you're feeling this way. Remember, you're not alone. Take a deep breath, everything will be okay. 💚",
  happy: "great! 💚",
  "thank you": "You're very welcome! I'm here for you anytime. 💖",
  bye: "Goodbye! Take care and be kind to yourself. 🌟",
};

function sendMessage() {
  const inputField = document.getElementById("user-input");
  const userMessage = inputField.value.trim();

  if (userMessage === "") {
    return;
  }

  // Display user message
  appendMessage(userMessage, "user");

  // Clear input field
  inputField.value = "";

  // Generate bot response
  const botMessage = getBotResponse(userMessage);
  appendMessage(botMessage, "bot");
}

function appendMessage(message, sender) {
  const chatBox = document.getElementById("chat-box");

  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", `${sender}-message`);
  messageDiv.textContent = message;

  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight; // Auto scroll to the latest message
}

function getBotResponse(userMessage) {
  // Check for specific responses or default to a general one
  const normalizedMessage = userMessage.toLowerCase();

  if (responses[normalizedMessage]) {
    return responses[normalizedMessage];
  } else {
    return "yeah :)";
  }
}

// async function getBotResponse(userMessage) {
//   const response = await fetch("YOUR_API_URL", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer YOUR_API_KEY`,
//     },
//     body: JSON.stringify({ prompt: userMessage, max_tokens: 100 }),
//   });

//   const data = await response.json();
//   return data.choices[0].text.trim();
// }

// BELUGA// BELUGA// BELUGA// BELUGA// BELUGA// BELUGA// BELUGA// BELUGA// BELUGA// BELUGA// BELUGA// BELUGA// BELUGA

let p1,
  p2,
  p1score = 0,
  p2score = 0,
  p1destroys = 0,
  p2destroys = 0;
let turn = 1;
let shipPosition;
let totalTurns = 0; // Track total turns
const maxTurns = 10; // 5 rounds = 10 turns

const messageEl = document.getElementById("message");
const p1scoreboard = document.getElementById("p1scoreboard");
const p2scoreboard = document.getElementById("p2scoreboard");
const fireBtn = document.getElementById("fire-btn");

document.getElementById("start-btn").addEventListener("click", () => {
  p1 = document.getElementById("p1name").value;
  p2 = document.getElementById("p2name").value;

  if (!p1 || !p2) {
    alert("Please enter names for both players!");
    return;
  }

  messageEl.textContent = `${p1}, it's your turn! Throw the Net to capture Beluga`;
  shipPosition = Math.floor(Math.random() * 51);
  document.getElementById("inputs").style.display = "none";
  document.getElementById("game-controls").style.display = "block";

  updateScoreboard();
});

fireBtn.addEventListener("click", () => {
  if (totalTurns >= maxTurns) {
    messageEl.textContent = "Time over! Restart to play again.";
    fireBtn.disabled = true; // Disable the fire button
    return;
  }

  const shot = parseInt(document.getElementById("shot").value);
  if (isNaN(shot) || shot < 0 || shot > 50) {
    alert("Please enter a valid coordinate (0-50)!");
    return;
  }

  let player = turn === 1 ? p1 : p2;
  let score,
    destroy = false;

  if (shot >= shipPosition - 5 && shot <= shipPosition + 5) {
    messageEl.textContent = `😺Beluga Captured! Congrats, ${player}, you captured Beluga!`;
    score = 5;
    destroy = true;
  } else if (shot >= shipPosition - 10 && shot <= shipPosition + 10) {
    messageEl.textContent = `You captured a 🐀 Rat instead of Beluga, but you are getting some credit for catching something! Great job, ${player}!`;
    score = 3;
  } else if (shot >= shipPosition - 15 && shot <= shipPosition + 15) {
    messageEl.textContent = `You almost captured Beluga. Nice job, ${player}!`;
    score = 1;
  } else {
    messageEl.textContent = `You missed! Better luck next time, ${player}.`;
    score = 0;
  }

  if (turn === 1) {
    p1score += score;
    if (destroy) p1destroys++;
  } else {
    p2score += score;
    if (destroy) p2destroys++;
  }

  if (destroy) {
    shipPosition = Math.floor(Math.random() * 51);
  }

  turn = turn === 1 ? 2 : 1;
  totalTurns++; // Increment the turn counter

  if (totalTurns < maxTurns) {
    messageEl.textContent += ` Now it's ${turn === 1 ? p1 : p2}'s turn.`;
  } else {
    determineWinner(); // End the game
  }

  updateScoreboard();
});

function updateScoreboard() {
  p1scoreboard.textContent = `${p1}: $${p1score}, ${p1destroys} times captured Beluga.`;
  p2scoreboard.textContent = `${p2}: $${p2score}, ${p2destroys} times captured Beluga.`;
}

function determineWinner() {
  if (p1score > p2score) {
    messageEl.textContent = `Time over! ${p1} wins with $${p1score}!`;
  } else if (p2score > p1score) {
    messageEl.textContent = `Time over! ${p2} wins with $${p2score}!`;
  } else {
    messageEl.textContent = `Time over! No one won!`;
  }
  fireBtn.disabled = true; // Disable further inputs
}
