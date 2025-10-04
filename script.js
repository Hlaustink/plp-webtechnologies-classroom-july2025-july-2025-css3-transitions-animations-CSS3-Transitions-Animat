// Global message
const globalMessage = "Tactical Data Processed";

// Area calc
function calculateArea() {
  const width = parseFloat(document.getElementById('width').value);
  const height = parseFloat(document.getElementById('height').value);

  if (isNaN(width) || isNaN(height)) {
    document.getElementById('area-result').textContent = "Invalid input.";
    return;
  }

  const area = width * height;
  document.getElementById('area-result').textContent = `Area: ${area} m² — ${globalMessage}`;
}

// Text transformer
function transformText(type) {
  const input = document.getElementById('text-input').value;
  let result;

  switch (type) {
    case 'upper': result = input.toUpperCase(); break;
    case 'lower': result = input.toLowerCase(); break;
    case 'reverse': result = input.split('').reverse().join(''); break;
    default: result = "Error";
  }

  document.getElementById('text-result').textContent = result;
}

// Box animation
function animateBox() {
  document.getElementById('animated-box').classList.add('animated');
}

function resetBox() {
  document.getElementById('animated-box').classList.remove('animated');
}

// Card flip
function flipCard() {
  document.querySelector('.card-container').classList.toggle('flipped');
}

// Modal
function openModal() {
  document.getElementById('modal').classList.add('show');
}

function closeModal() {
  document.getElementById('modal').classList.remove('show');
}
