setInterval(() => {
  const element = document.querySelector(".clock");
  const sound = document.querySelector("#sound");
  const awaaz = document.querySelector("i");
  const time = new Date();
  const option = {
    timezone: "Asia/kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  element.textContent = time.toLocaleTimeString("en-US", option);
  awaaz.addEventListener("click", () => {
    sound.play();
  });
}, 1000);
