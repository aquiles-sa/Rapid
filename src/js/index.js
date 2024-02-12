let daysText = document.querySelector("#days");
let hoursText = document.querySelector("#hours");
let minutesText = document.querySelector("#minutes");
let secondsText = document.querySelector("#seconds");

let endTime = new Date("2024-02-16T00:00:00").getTime();

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

let countdownTimer = setInterval(() => {
  let currentTime = new Date(endTime).getTime();
  let countdown = new Date().getTime();
  let difference = currentTime - countdown;

  let daysCountdown = Math.floor(difference / (1000 * 60 * 60 * 24));

  let hoursCountdown = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  let minutesCountdown = Math.floor(
    (difference % (1000 * 60 * 60)) / (1000 * 60)
  );
  let secondsCountdown = Math.floor((difference % (1000 * 60)) / 1000);

  daysText.innerHTML = formatTime(daysCountdown);
  hoursText.textContent = formatTime(hoursCountdown);
  minutesText.textContent = formatTime(minutesCountdown);
  secondsText.textContent = formatTime(secondsCountdown);

  if (difference <= 0) {
    clearInterval(x);
    daysText.textContent = 0;
    hoursText.textContent = 0;
    minutesText.textContent = 0;
    secondsText.textContent = 0;
  }
}, 1000);
