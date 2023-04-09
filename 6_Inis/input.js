var element = document.getElementById('dragElement');
var isDragging = false;
var isFollowing = false;
var lastTouch = null;

element.addEventListener('touchstart', function(event) {
  if (event.touches.length === 2) {
    isFollowing = true;
    return;
  }

  isDragging = true;
  lastTouch = event.touches[0];
});

element.addEventListener('touchmove', function(event) {
  if (isFollowing) {
    element.style.left = event.touches[0].pageX + 'px';
    element.style.top = event.touches[0].pageY + 'px';
    event.preventDefault();
  }

  if (isDragging && event.touches.length === 1) {
    var touch = event.touches[0];
    element.style.left = (element.offsetLeft + touch.pageX - lastTouch.pageX) + 'px';
    element.style.top = (element.offsetTop + touch.pageY - lastTouch.pageY) + 'px';
    lastTouch = touch;
  }
});

element.addEventListener('touchend', function(event) {
  if (isFollowing) {
    isFollowing = false;
    return;
  }

  isDragging = false;
  lastTouch = null;
});

element.addEventListener('touchcancel', function(event) {
  isDragging = false;
  element.style.left = '';
  element.style.top = '';
});
