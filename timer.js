let releaseDate = new Date("2023-11-12T00:00:00");

function updateTimer() {
  let today = new Date();
  let diffDate = releaseDate - today;

  if (diffDate <= 0) {
    clearInterval(x);
    window.location.href = "file:///D:/November12th/kofiee.html"; // Add the URL of the redirect page here
    return;
  }

  let total_seconds_left = Math.floor(diffDate / 1000);

  let day_left = Math.floor(total_seconds_left / 60 / 60 / 24);
  total_seconds_left -= day_left * 24 * 60 * 60;

  let hours_left = Math.floor(total_seconds_left / 60 / 60);
  total_seconds_left -= hours_left * 60 * 60;

  let minutes_left = Math.floor(total_seconds_left / 60);
  total_seconds_left -= minutes_left * 60;

  let seconds_left = total_seconds_left;

  document.getElementById("days").innerHTML = preceedZero(day_left, 2);
  document.getElementById("days-bottom").innerHTML = preceedZero(day_left, 2);

  document.getElementById("hours").innerHTML = preceedZero(hours_left, 2);
  document.getElementById("hours-bottom").innerHTML = preceedZero(hours_left, 2);

  document.getElementById("minutes").innerHTML = preceedZero(minutes_left, 2);
  document.getElementById("minutes-bottom").innerHTML = preceedZero(minutes_left, 2);

  document.getElementById("seconds").innerHTML = preceedZero(seconds_left, 2);
  document.getElementById("seconds-bottom").innerHTML = preceedZero(seconds_left, 2);

}

let x = setInterval(updateTimer, 200);

function preceedZero(number, upto) {
  let place = 10;
  const MAX = Math.pow(10, upto);
  let str = "";
  while (place < MAX) {
    str += (number < place) ? "0" : "";
    place *= 10;
  }
  return str + number;
}
