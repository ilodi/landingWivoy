// SCROL

let l = document
  .getElementsByClassName('fa-angle-left')[0]
  .addEventListener('click', scroolLeft);
let r = document
  .getElementsByClassName('fa-angle-right')[0]
  .addEventListener('click', scroolRight);
let box = document.getElementsByClassName('cartasScroll')[0];

function scroolLeft() {
  box.scrollLeft -= 630;
}
function scroolRight() {
  box.scrollLeft += 630;
}
