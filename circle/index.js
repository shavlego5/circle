let circle = document.getElementsByClassName("circle");

for (let i = 0; i < circle.length; i++) {
  let h = circle[i].offsetWidth;
  let radius = h / 2;
  let circleLength = Math.floor(2 * Math.PI * radius);
  for (let j = 0; j < circleLength * 2; j++) {
    let div = document.createElement("div");
    div.classList.add("part");
    div.style.left = Math.cos(j) * radius + "px";
    div.style.top = Math.sin(j) * radius + "px";
    circle[i].appendChild(div);
  }
}
