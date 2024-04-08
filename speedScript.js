// JavaScript
const pointerElement = document.querySelector('#pointer');
const h1Element = document.getElementById('pointerValue');
let rotationAngle = -30;
let targetSpeed = 0;
let currentSpeed = 0;

function updateSpeed() {
  h1Element.textContent = Math.round(currentSpeed);
}

function animatePointer() {
  const speedDifference = targetSpeed - currentSpeed;
  const easingFactor = 0.1; // Adjust the easing factor for different behaviors

  currentSpeed += speedDifference * easingFactor;

  rotationAngle = -80 + (currentSpeed / 100) * 160;
  pointerElement.style.transform = `rotate(${rotationAngle}deg)`;

  if (Math.abs(speedDifference) < 0.1) {
    targetSpeed = getRandomSpeed(); // Generate a new random speed
  }

  requestAnimationFrame(animatePointer);
}

function getRandomSpeed() {
  return Math.round(Math.random() * 100); // Generate a random whole number between 0 and 100
}

// Initialize targetSpeed with a random value
targetSpeed = getRandomSpeed();

// Initialize currentSpeed with the same random value
currentSpeed = targetSpeed;

// Start the pointer rotation
animatePointer();

// Start the interval to update the speed value continuously
setInterval(updateSpeed, 100); // Update speed every 100 milliseconds

// ------------for second----------------
const pointerElement1 = document.querySelector('#pointer1');
const h1Element1 = document.getElementById('pointerValue1'); // Change variable name here
let rotationAngle1 = -30;
let targetSpeed1 = 0;
let currentSpeed1 = 0;

function updateSpeed1() { // Rename the function here
  h1Element1.textContent = Math.round(currentSpeed1);
}

function animatePointer1() {
  const speedDifference = targetSpeed1 - currentSpeed1;
  const easingFactor = 0.1; // Adjust the easing factor for different behaviors

  currentSpeed1 += speedDifference * easingFactor;

  rotationAngle1 = -80 + (currentSpeed1 / 100) * 160;
  pointerElement1.style.transform = `rotate(${rotationAngle1}deg)`;

  if (Math.abs(speedDifference) < 0.1) {
    targetSpeed1 = getRandomSpeed(); // Generate a new random speed
  }

  requestAnimationFrame(animatePointer1);
}

// Initialize targetSpeed1 with a random value
targetSpeed1 = getRandomSpeed();

// Initialize currentSpeed with the same random value
currentSpeed1 = targetSpeed1;

// Start the pointer rotation
animatePointer1();

// Start the interval to update the speed value continuously
setInterval(updateSpeed1, 100); // Update speed every 100 milliseconds

// ------------for third----------------
const pointerElement2 = document.querySelector('#pointer2');
const h1Element2 = document.getElementById('pointerValue2'); // Change variable name here
let rotationAngle2 = -30;
let targetSpeed2 = 0;
let currentSpeed2 = 0;

function updateSpeed2() { // Rename the function here
  h1Element2.textContent = Math.round(currentSpeed2);
}

function animatePointer2() {
  const speedDifference = targetSpeed2 - currentSpeed2;
  const easingFactor = 0.1; // Adjust the easing factor for different behaviors

  currentSpeed2 += speedDifference * easingFactor;

  rotationAngle2 = -80 + (currentSpeed2 / 100) * 160;
  pointerElement2.style.transform = `rotate(${rotationAngle2}deg)`; // Fix the variable name here

  if (Math.abs(speedDifference) < 0.1) {
    targetSpeed2 = getRandomSpeed(); // Generate a new random speed
  }

  requestAnimationFrame(animatePointer2);
}

// Initialize targetSpeed2 with a random value
targetSpeed2 = getRandomSpeed();

// Initialize currentSpeed with the same random value
currentSpeed2 = targetSpeed2;

// Start the pointer rotation
animatePointer2();

// Start the interval to update the speed value continuously
setInterval(updateSpeed2, 100); // Update speed every 100 milliseconds

// ------------------------for .meter-level------------------------//

function updateMeterLevel() {
  const meterLevel = document.querySelector(".meter-level");
  const randomHeight = Math.floor(Math.random() * 180);
  meterLevel.style.height = randomHeight + "px";
  document.getElementById("verValue").textContent = randomHeight;

  // Change the color based on height
  if (randomHeight < 51) {
      meterLevel.style.backgroundColor = "red"; // Red
  } else if (randomHeight < 100) {
      meterLevel.style.backgroundColor = "yellow"; // Yellow
  } else {
      meterLevel.style.backgroundColor = "green"; // Green
  }
}

setInterval(updateMeterLevel, 1000);

// ------------------------for .meter-level1------------------------//

function updateMeterLevel1() {
  const meterLevel1 = document.querySelector(".meter-level1");
  const randomHeight1 = Math.floor(Math.random() * 180);
  meterLevel1.style.height = randomHeight1 + "px";
  document.getElementById("verValue1").textContent = randomHeight1;

  // Change the color based on height
  if (randomHeight1 < 45) {
      meterLevel1.style.backgroundColor = "red"; // Red
  } else if (randomHeight1 < 99) {
      meterLevel1.style.backgroundColor = "yellow"; // Yellow
  } else {
      meterLevel1.style.backgroundColor = "green"; // Green
  }
}

setInterval(updateMeterLevel1, 1000);

// ------------------------for .meter-level2------------------------//

function updateMeterLevel2() {
  const meterLevel2 = document.querySelector(".meter-level2");
  const randomHeight2 = Math.floor(Math.random() * 180);
  meterLevel2.style.height = randomHeight2 + "px";
  document.getElementById("verValue2").textContent = randomHeight2;

  // Change the color based on height
  if (randomHeight2 < 45) {
      meterLevel2.style.backgroundColor = "red"; // Red
  } else if (randomHeight2 < 99) {
      meterLevel2.style.backgroundColor = "yellow"; // Yellow
  } else {
      meterLevel2.style.backgroundColor = "green"; // Green
  }
}

setInterval(updateMeterLevel2, 1000);

// ------------------------for .meter-level3------------------------//

function updateMeterLevel3() {
  const meterLevel3 = document.querySelector(".meter-level3");
  const randomHeight3 = Math.floor(Math.random() * 180);
  meterLevel3.style.height = randomHeight3 + "px";
  document.getElementById("verValue3").textContent = randomHeight3;

  // Change the color based on height
  if (randomHeight3 < 45) {
      meterLevel3.style.backgroundColor = "red"; // Red
  } else if (randomHeight3 < 99) {
      meterLevel3.style.backgroundColor = "yellow"; // Yellow
  } else {
      meterLevel3.style.backgroundColor = "green"; // Green
  }
}

setInterval(updateMeterLevel3, 1000);

// ------------------------for .meter-level4------------------------//

function updateMeterLevel4() {
  const meterLevel4 = document.querySelector(".meter-level4");
  const randomHeight4 = Math.floor(Math.random() * 180);
  meterLevel4.style.height = randomHeight4 + "px";
  document.getElementById("verValue4").textContent = randomHeight4;

  // Change the color based on height
  if (randomHeight4 < 45) {
      meterLevel4.style.backgroundColor = "red"; // Red
  } else if (randomHeight4 < 99) {
      meterLevel4.style.backgroundColor = "yellow"; // Yellow
  } else {
      meterLevel4.style.backgroundColor = "green"; // Green
  }
}

setInterval(updateMeterLevel4, 1000);

// ------------------------for .meter-level5------------------------//

function updateMeterLevel5() {
  const meterLevel5 = document.querySelector(".meter-level5");
  const randomHeight5 = Math.floor(Math.random() * 180);
  meterLevel5.style.height = randomHeight5 + "px";
  document.getElementById("verValue5").textContent = randomHeight5;

  
  if (randomHeight5 < 45) {
      meterLevel5.style.backgroundColor = "red"; 
  } else if (randomHeight5 < 99) {
      meterLevel5.style.backgroundColor = "yellow"; 
  } else {
      meterLevel5.style.backgroundColor = "green"; 
}
}

setInterval(updateMeterLevel5, 1000);

// ------------------------for .meter-level6------------------------//

function updateMeterLevel6() {
  const meterLevel6 = document.querySelector(".meter-level6");
  const randomHeight6 = Math.floor(Math.random() * 180);
  meterLevel6.style.height = randomHeight6 + "px";
  document.getElementById("verValue6").textContent = randomHeight6;

  
  if (randomHeight6 < 45) {
      meterLevel6.style.backgroundColor = "red"; 
  } else if (randomHeight6 < 99) {
      meterLevel6.style.backgroundColor = "yellow"; 
  } else {
      meterLevel6.style.backgroundColor = "green"; 
}
}

setInterval(updateMeterLevel6, 1000);

// ------------------------for .meter-level7------------------------//

function updateMeterLevel7() {
  const meterLevel7 = document.querySelector(".meter-level7");
  const randomHeight7 = Math.floor(Math.random() * 180);
  meterLevel7.style.height = randomHeight7 + "px";
  document.getElementById("verValue7").textContent = randomHeight7;

  // Change the color based on height
  if (randomHeight7 < 45) {
      meterLevel7.style.backgroundColor = "red"; // Red
  } else if (randomHeight7 < 99) {
      meterLevel7.style.backgroundColor = "yellow"; // Yellow
  } else {
      meterLevel7.style.backgroundColor = "green"; // Green
  }
}

setInterval(updateMeterLevel7, 1000);

// ------------------------for .meter-level8------------------------//

function updateMeterLevel8() {
  const meterLevel8 = document.querySelector(".meter-level8");
  const randomHeight8 = Math.floor(Math.random() * 180);
  meterLevel8.style.height = randomHeight8 + "px";
  document.getElementById("verValue8").textContent = randomHeight8;

  // Change the color based on height
  if (randomHeight8 < 45) {
      meterLevel8.style.backgroundColor = "red"; // Red
  } else if (randomHeight8 < 99) {
      meterLevel8.style.backgroundColor = "yellow"; // Yellow
  } else {
      meterLevel8.style.backgroundColor = "green"; // Green
  }
}

setInterval(updateMeterLevel8, 1000);

// ------------------------for .meter-level------------------------//

function updateMeterLevel9() {
  const meterLevel9 = document.querySelector(".meter-level9");
  const randomHeight9 = Math.floor(Math.random() * 180);
  meterLevel9.style.height = randomHeight9 + "px";
  document.getElementById("verValue9").textContent = randomHeight9;

  // Change the color based on height
  if (randomHeight9 < 45) {
      meterLevel9.style.backgroundColor = "red"; // Red
  } else if (randomHeight9 < 99) {
      meterLevel9.style.backgroundColor = "yellow"; // Yellow
  } else {
      meterLevel9.style.backgroundColor = "green"; // Green
  }
}

setInterval(updateMeterLevel9, 1000);

// ------------------------for .meter-level------------------------//

function updateMeterLevel10() {
  const meterLevel10 = document.querySelector(".meter-level10");
  const randomHeight10 = Math.floor(Math.random() * 180);
  meterLevel10.style.height = randomHeight10 + "px";
  document.getElementById("verValue10").textContent = randomHeight10;

  // Change the color based on height
  if (randomHeight10 < 45) {
      meterLevel10.style.backgroundColor = "red"; // Red
  } else if (randomHeight10 < 99) {
      meterLevel10.style.backgroundColor = "yellow"; // Yellow
  } else {
      meterLevel10.style.backgroundColor = "green"; // Green
  }
}

setInterval(updateMeterLevel10, 1000);

// ------------------------for .meter-level------------------------//

function updateMeterLevel11() {
  const meterLevel11 = document.querySelector(".meter-level11");
  const randomHeight11 = Math.floor(Math.random() * 180);
  meterLevel11.style.height = randomHeight11 + "px";
  document.getElementById("verValue11").textContent = randomHeight11;

  // Change the color based on height
  if (randomHeight11 < 45) {
      meterLevel11.style.backgroundColor = "red"; // Red
  } else if (randomHeight11 < 99) {
      meterLevel11.style.backgroundColor = "yellow"; // Yellow
  } else {
      meterLevel11.style.backgroundColor = "green"; // Green
  }
}

setInterval(updateMeterLevel11, 1000);

// ------------------------for .meter-level------------------------//

function updateMeterLevel12() {
  const meterLevel12 = document.querySelector(".meter-level12");
  const randomHeight12 = Math.floor(Math.random() * 180);
  meterLevel12.style.height = randomHeight12 + "px";
  document.getElementById("verValue12").textContent = randomHeight12;

  // Change the color based on height
  if (randomHeight12 < 45) {
      meterLevel12.style.backgroundColor = "red"; // Red
  } else if (randomHeight12 < 99) {
      meterLevel12.style.backgroundColor = "yellow"; // Yellow
  } else {
      meterLevel12.style.backgroundColor = "green"; // Green
  }
}

setInterval(updateMeterLevel12, 1000);


// ------------------------for .meter-level------------------------//

function updateMeterLevel13() {
  const meterLevel13 = document.querySelector(".meter-level13");
  const randomHeight13 = Math.floor(Math.random() * 180);
  meterLevel13.style.height = randomHeight13 + "px";
  document.getElementById("verValue13").textContent = randomHeight13;

  // Change the color based on height
  if (randomHeight13 < 45) {
      meterLevel13.style.backgroundColor = "red"; // Red
  } else if (randomHeight13 < 99) {
      meterLevel13.style.backgroundColor = "yellow"; // Yellow
  } else {
      meterLevel13.style.backgroundColor = "green"; // Green
  }
}

setInterval(updateMeterLevel13, 1000);

// ------------------------for .meter-level------------------------//

function updateMeterLevel14() {
  const meterLevel14 = document.querySelector(".meter-level14");
  const randomHeight14 = Math.floor(Math.random() * 180);
  meterLevel14.style.height = randomHeight14 + "px";
  document.getElementById("verValue14").textContent = randomHeight14;

  // Change the color based on height
  if (randomHeight14 < 45) {
      meterLevel14.style.backgroundColor = "red"; // Red
  } else if (randomHeight14 < 99) {
      meterLevel14.style.backgroundColor = "yellow"; // Yellow
  } else {
      meterLevel14.style.backgroundColor = "green"; // Green
  }
}

setInterval(updateMeterLevel14, 1000);