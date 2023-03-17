document.addEventListener('DOMContentLoaded',updateParagraph);

function updateParagraph(){
  const paragraph = document.getElementById('text');
  paragraph.textContent = 'This is really cool!';
}