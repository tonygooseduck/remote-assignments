var menu = document.querySelector('img.menu');
var triggermenu = document.querySelector('div.trigger');
var exit = document.querySelector('img.exit');

menu.addEventListener('click', () => {
  triggermenu.style.display = 'block';
})

exit.addEventListener('click', () => {
  triggermenu.style.display = 'none';
})
