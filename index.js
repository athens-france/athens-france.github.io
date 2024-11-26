let score = 0; 
let garbagecount = 0; 
let garbagecost = 20; 
let evenmore = 0;
let evencost = 50;
let eveneven = 0;
let ecost = 150;
let toomuch = 0;
let toocost = 450;
let zenith = 0;
let zencost = 900;
let singularity = 0;
let sincost = 2500;
let jeff = 0;
let jeffcost = 5000;
let jeffdad = 0;
let dadcost = 11000;
let jeffmom = 0;
let momcost = 150000;

const reddot = document.getElementById("red-dot");
const scoredisplay = document.getElementById("score");
const garbagebutton = document.getElementById("garbage-button");
const garbagecounter = document.getElementById("garbage-counter");
const evenbutton = document.getElementById("g-button2");
const evencounter = document.getElementById("button2-counter");
const eebutton = document.getElementById("g-button3");
const eecounter = document.getElementById("button3-counter");
const toobutton = document.getElementById("g-button4");
const toocounter = document.getElementById("button4-counter");
const zenithbutton = document.getElementById("g-button5");
const zenithcounter = document.getElementById("button5-counter");
const sinbutton = document.getElementById("g-button6");
const sincounter = document.getElementById("button6-counter");
const jeffbutton = document.getElementById("g-button7");
const jeffcounter = document.getElementById("button7-counter");
const dadbutton = document.getElementById("g-button8");
const dadcounter = document.getElementById("button8-counter");
const mombutton = document.getElementById("g-button9");
const momcounter = document.getElementById("button9-counter");

reddot.addEventListener("click", () => {
  score++;
  scoredisplay.textContent = score;

  const randomX = Math.random() * (window.innerWidth - reddot.offsetWidth);
  const randomY = Math.random() * (window.innerHeight - reddot.offsetHeight);
  reddot.style.left = `${randomX}px`;
  reddot.style.top = `${randomY}px`;
});

garbagebutton.addEventListener("click", () => {
  if (score >= garbagecost) {
    score -= garbagecost;
    scoredisplay.textContent = score;

    garbagecount++;
    garbagecounter.textContent = `garbages: ${garbagecount}`;

    garbagecost = Math.floor(garbagecost * 1.5 );
    garbagebutton.textContent = `more garbage (cost: ${garbagecost})`;


    setInterval(() => {
      score++;
      scoredisplay.textContent = score;
    }, 2000);
  } else {
    alert(`dude you need like ${garbagecost - score} more points to buy this thing`);
  }
});

evenbutton.addEventListener("click", () => {
    if (score >= evencost) {
      score -= evencost;
      scoredisplay.textContent = score;
  
      evenmore++;
      evencounter.textContent = `even more garbages: ${evenmore}`;
  
      evencost = Math.floor(evencost * 1.5 );
      evenbutton.textContent = `even more garbage (cost: ${evencost})`;
  
  
      setInterval(() => {
        score = score + 5;
        scoredisplay.textContent = score;
      }, 4000);
    } else {
      alert(`dude you need like ${evencost - score} more points to buy this thing`);
    }
  });

  eebutton.addEventListener("click", () => {
    if (score >= ecost) {
      score -= ecost;
      scoredisplay.textContent = score;
  
      eveneven++;
      eecounter.textContent = `even even more garbages: ${eveneven}`;
  
      ecost = Math.floor(ecost * 1.5 );
      eebutton.textContent = `even even more garbage (cost: ${ecost})`;
  
  
      setInterval(() => {
        score = score + 15;
        scoredisplay.textContent = score;
      }, 3000);
    } else {
      alert(`dude you need like ${ecost - score} more points to buy this thing`);
    }
  });

  toobutton.addEventListener("click", () => {
    if (score >= toocost) {
      score -= toocost;
      scoredisplay.textContent = score;
  
      toomuch++;
      toocounter.textContent = `too much garbages: ${toomuch}`;
  
      toocost = Math.floor(toocost * 1.5 );
      toobutton.textContent = `too much garbage (cost: ${toocost})`;
  
  
      setInterval(() => {
        score = score + 45;
        scoredisplay.textContent = score;
      }, 4000);
    } else {
      alert(`dude you need like ${toocost - score} more points to buy this thing`);
    }
  });

  zenithbutton.addEventListener("click", () => {
    if (score >= zencost) {
      score -= zencost;
      scoredisplay.textContent = score;
  
      zenith++;
      zenithcounter.textContent = `garbage zeniths: ${zenith}`;
  
      zencost = Math.floor(zencost * 1.5 );
      zenithbutton.textContent = `garbage zenith (cost: ${zencost})`;
  
  
      setInterval(() => {
        score = score + 80;
        scoredisplay.textContent = score;
      }, 4000);
    } else {
      alert(`dude you need like ${zencost - score} more points to buy this thing`);
    }
  });

  sinbutton.addEventListener("click", () => {
    if (score >= sincost) {
      score -= sincost;
      scoredisplay.textContent = score;
  
      singularity++;
      sincounter.textContent = `garbage singularities: ${singularity}`;
  
      sincost = Math.floor(sincost * 1.5 );
      sinbutton.textContent = `garbage singularity (cost: ${sincost})`;
  
  
      setInterval(() => {
        score = score + 120;
        scoredisplay.textContent = score;
      }, 2000);
    } else {
      alert(`dude you need like ${sincost - score} more points to buy this thing`);
    }
  });

  jeffbutton.addEventListener("click", () => {
    if (score >= jeffcost) {
      score -= jeffcost;
      scoredisplay.textContent = score;
  
      jeff++;
      jeffcounter.textContent = `jeff the garbage collectors: ${jeff}`;
  
      jeffcost = Math.floor(jeffcost * 1.5 );
      jeffbutton.textContent = `jeff the garbage collector (cost: ${jeffcost})`;
  
  
      setInterval(() => {
        score = score + 300;
        scoredisplay.textContent = score;
      }, 4000);
    } else {
      alert(`dude you need like ${jeffcost - score} more points to buy this thing`);
    }
  });

  dadbutton.addEventListener("click", () => {
    if (score >= dadcost) {
      score -= dadcost;
      scoredisplay.textContent = score;
  
      jeffdad++;
      dadcounter.textContent = `jeff dads: ${jeffdad}`;
  
      dadcost = Math.floor(dadcost * 1.5 );
      dadbutton.textContent = `jeff dad (cost: ${jeffcost})`;
  
  
      setInterval(() => {
        score = score + 600;
        scoredisplay.textContent = score;
      }, 2000);
    } else {
      alert(`dude you need like ${dadcost - score} more points to buy this thing`);
    }
  });

  mombutton.addEventListener("click", () => {
    if (score >= momcost) {
      score -= momcost;
      scoredisplay.textContent = score;
  
      jeffmom++;
      momcounter.textContent = `jeff mom: ${jeffmom}`;
  
      momcost = Math.floor(momcost * 1.5 );
      mombutton.textContent = `jeff moms (cost: ${momcost})`;
  
  
      setInterval(() => {
        score = score + 123456789;
        scoredisplay.textContent = score;
      }, 5);
    } else {
      alert(`dude you need like ${momcost - score} more points to buy this thing`);
    }
  });
