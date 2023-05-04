var element = document.getElementById('mydiv');
var initialX, initialY;
var currentX, currentY;
var xOffset = 0, yOffset = 0;
var isDragging = false;
var isFollowing = false;

element.addEventListener('touchstart', function(e) {
  if (e.touches.length == 1) {
    initialX = e.touches[0].clientX - xOffset;
    initialY = e.touches[0].clientY - yOffset;
    isDragging = true;
  } else if (e.touches.length == 2) {
    isFollowing = true;
  }
});

element.addEventListener('touchmove', function(e) {
  if (isFollowing) {
    var touch = e.touches[0];
    element.style.left = touch.pageX + 'px';
    element.style.top = touch.pageY + 'px';
  } else if (isDragging) {
    currentX = e.touches[0].clientX - initialX;
    currentY = e.touches[0].clientY - initialY;

    xOffset = currentX;
    yOffset = currentY;

    setTranslate(currentX, currentY, element);
  }
});

element.addEventListener('touchend', function(e) {
  initialX = currentX;
  initialY = currentY;

  isDragging = false;
  isFollowing = false;
});

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}
