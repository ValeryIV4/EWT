let selectedElement = null;
let isDragging = false;
let startPosition = { x: 0, y: 0 };
let offset = { x: 0, y: 0 };

function handleMouseDown(event) {
if (event.target.classList.contains('target')) {
selectedElement = event.target;
selectedElement.classList.add('selected');

startPosition.x = event.clientX;
startPosition.y = event.clientY;

offset.x = selectedElement.offsetLeft;
offset.y = selectedElement.offsetTop;

isDragging = true;
}
}

function handleMouseMove(event) {
if (isDragging) {
const dx = event.clientX - startPosition.x;
const dy = event.clientY - startPosition.y;

selectedElement.style.left = offset.x + dx + 'px';
selectedElement.style.top = offset.y + dy + 'px';
}
}

function handleMouseUp(event) {
if (isDragging) {
selectedElement.classList.remove('selected');
selectedElement = null;
isDragging = false;
}
}

function handleDoubleClick(event) {
if (event.target.classList.contains('target')) {
selectedElement = event.target;
selectedElement.classList.add('dragging');
startPosition.x = event.clientX;
startPosition.y = event.clientY;

document.addEventListener('mousemove', handleDrag);
document.addEventListener('mouseup', handleDrop);
}
}

function handleDrag(event) {
const dx = event.clientX - startPosition.x;
const dy = event.clientY - startPosition.y;

selectedElement.style.left = offset.x + dx + 'px';
selectedElement.style.top = offset.y + dy + 'px';
}

function handleDrop(event) {
selectedElement.classList.remove('dragging');
selectedElement = null;

document.removeEventListener('mousemove', handleDrag);
document.removeEventListener('mouseup', handleDrop);
}

function handleKeyDown(event) {
if (event.key === 'Escape' && selectedElement !== null) {
selectedElement.style.left = offset.x + 'px';
selectedElement.style.top = offset.y + 'px';
selectedElement.classList.remove('selected');
selectedElement.classList.remove('dragging');
selectedElement = null;
isDragging = false;
}
}

document.addEventListener('mousedown', handleMouseDown);
document.addEventListener('mousemove', handleMouseMove);
document.addEventListener('mouseup', handleMouseUp);
document.addEventListener('dblclick', handleDoubleClick);
document.addEventListener('keydown', handleKeyDown);