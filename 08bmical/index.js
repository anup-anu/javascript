const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const fill = document.querySelector('#bmi-fill');
  const label = document.querySelector('#bmi-label');

  if (height <= 0 || isNaN(height)) {
    results.innerHTML = `❗ Please enter a valid height.`;
    fill.style.width = '0%';
    label.textContent = '';
    return;
  }

  if (weight <= 0 || isNaN(weight)) {
    results.innerHTML = `❗ Please enter a valid weight.`;
    fill.style.width = '0%';
    label.textContent = '';
    return;
  }

  const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
  let message = '';
  let color = '';
  let percentage = Math.min((bmi / 40) * 100, 100); // Max fill cap at BMI 40+

  if (bmi < 18.6) {
    message = `Your BMI is ${bmi}. You are underweight.`;
    color = '#ff6b6b'; // red
  } else if (bmi >= 18.6 && bmi < 24.9) {
    message = `Your BMI is ${bmi}. You are in normal range.`;
    color = '#2ecc71'; // green
  } else if (bmi >= 24.9 && bmi < 30) {
    message = `Your BMI is ${bmi}. You are overweight.`;
    color = '#f39c12'; // orange
  } else {
    message = `Your BMI is ${bmi}. You are obese.`;
    color = '#e74c3c'; // dark red
  }

  results.innerHTML = message;
  fill.style.width = `${percentage}%`;
  fill.style.backgroundColor = color;
  label.textContent = `BMI: ${bmi}`;
  label.style.color = color;
});
const themeToggle = document.querySelector('#theme-toggle');
const body = document.body;

// Load theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  themeToggle.checked = true;
}

// Toggle theme on click
themeToggle.addEventListener('change', () => {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
