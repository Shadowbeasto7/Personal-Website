for (let i = 0; i < 100; i++) {
    let raindrop = document.createElement("div");
    raindrop.classList.add("raindrop");
    raindrop.style.left = Math.random() * window.innerWidth + "px";
    raindrop.style.top = Math.random() * -window.innerHeight + "px";
    raindrop.style.animationDelay = Math.random() * 10 + "s";
    document.body.appendChild(raindrop);
  }
  
  for (let i = 0; i < 50; i++) {
    let raindrop = document.createElement("div");
    raindrop.classList.add("raindrop");
    raindrop.style.left = Math.random() * window.innerWidth + "px";
    raindrop.style.top = Math.random() * -window.innerHeight + "px";
    raindrop.style.animationDelay = Math.random() * 10 + "s";
    document.body.appendChild(raindrop);
  }
  