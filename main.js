const square = document.getElementById('square');

square.addEventListener('click', function() {
  square.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
});