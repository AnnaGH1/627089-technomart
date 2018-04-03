document.querySelector('.button-write-us').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('.modal-write-us').style.display = 'block';
});

document.querySelector('.modal-write-us .close').addEventListener('click', function() {
  document.querySelector('.modal-write-us').style.display = 'none';
});
