var draggable = document.getElementById('draggable');
var initialX, initialY;
var currentX, currentY;
var xOffset = 0, yOffset = 0;
var isDragging = false;

draggable.addEventListener('touchstart', dragStart);
draggable.addEventListener('touchmove', drag);
draggable.addEventListener('touchend', dragEnd);

function dragStart(e) {
  initialX = e.touches[0].clientX - xOffset;
  initialY = e.touches[0].clientY - yOffset;

  if (e.target === draggable) {
    isDragging = true;
  }
}

function drag(e) {
  if (isDragging) {
    e.preventDefault();

    currentX = e.touches[0].clientX - initialX;
    currentY = e.touches[0].clientY - initialY;

    xOffset = currentX;
    yOffset = currentY;

    setTranslate(currentX, currentY, draggable);
  }
}

function dragEnd(e) {
  initialX = currentX;
  initialY = currentY;

  isDragging = false;
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}

