let input = document.querySelector("input");
let score = document.querySelector(".score");
let display = document.querySelector("#display");
let btn = document.querySelector("button");
let speakerToggle = document.querySelector("#speaker-toggle");

let isSpeakerOn = false;

let count = 0;

let random = Math.floor(Math.random() * 100) + 1;
let inputValue;
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    inputValue = input.value;
    check(inputValue);
  }
});

speakerToggle.addEventListener("change", () => {
  isSpeakerOn = speakerToggle.checked;
});

const check = (inputValue) => {
  if (inputValue == random) {
    if (isSpeakerOn) {
      const sound = document.querySelector("#sound");
      sound.play().catch((error) => {
        console.error("Audio playback failed:", error);
      });
    }

    display.innerText = "You won!";
    display.classList.add("correct");
    setTimeout(() => {
      display.classList.remove("correct");
    }, 500);

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
    // display.style.color = randomColor();
    score.innerText = `Your score is ${count}`;
  } else if (inputValue > random) {
    display.innerText = "too high";
    // display.style.color = randomColor();
    display.classList.add("wrong");
    setTimeout(() => {
      display.classList.remove("wrong");
    }, 500);
    // display.style.backgroundColor = "black";
    count++;
  } else if (inputValue < random) {
    display.innerText = "too low";
    display.classList.add("wrong");
    setTimeout(() => {
      display.classList.remove("wrong");
    }, 500);
    // display.style.color = randomColor();
    // display.style.backgroundColor = "black";
    count++;
  }
  //refresh the input bar after each check
  input.value = "";
};

//create function to generate random light colours
const randomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};

btn.addEventListener("click", () => {
  location.reload();
});
