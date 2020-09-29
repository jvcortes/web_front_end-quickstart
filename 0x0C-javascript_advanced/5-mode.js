function changeMode(size, weight, transform, background, color) {
  return function () {
    document.querySelector('body').style.fontSize = size;
    document.querySelector('body').style.fontWeight = weight;
    document.querySelector('body').style.textTransform = transform;
    document.querySelector('body').style.backgroundColor = background;
    document.querySelector('body').style.color = color;
  };
}

function main() {
  let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

  document.querySelector('body').innerHTML = 
    `<p>Welcome Holberton!</p>
    <button id='spooky'>Spooky!</button>
    <button id='dark-mode'>Dark mode!</button>
    <button id='scream-mode'>Scream mode!</button>
    `

  document.getElementById('spooky').onclick = spooky;
  document.getElementById('dark-mode').onclick = darkMode;
  document.getElementById('scream-mode').onclick = screamMode;
}

main()
