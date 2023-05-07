let selectedElement = null;
let touchX = 0;     //to count element move distance
let touchY = 0;

let initialX = 0;
let initialY = 0;

let lastTap = 0;    //ms


document.querySelectorAll('.target').forEach(target => {
    target.addEventListener('touchstart', onTouchStart);
});

document.querySelectorAll(".target").forEach(target => {
    target.addEventListener('touchend', onTouchEnd)
});

document.addEventListener('touchmove', onTouchMove);

document.querySelectorAll(".target").forEach(target => {
    target.addEventListener('touchend', onDoubleTouch)
});

document.addEventListener('touchstart', onUndoAction);

function onTouchStart(e) {
    const touch = e.touches[0];
    touchX = touch.clientX;
    touchY = touch.clientY;

    if (!selectedElement || selectedElement === e.target) {
        selectedElement = e.target;
        selectedElement.style.zIndex = '1000';
        selectedElement.style.background = 'green';

        initialX = selectedElement.style.left;
        initialY = selectedElement.style.top;
    }
}

function onTouchEnd() {
    if (selectedElement) {
        selectedElement.style.zIndex = 'auto';
        selectedElement.style.background = 'red';
        selectedElement = null;
    }
}

function onTouchMove(e) {
    if (selectedElement) {
        const touch = e.touches[0];
        const deltaX = touch.clientX - touchX;
        const deltaY = touch.clientY - touchY;
        selectedElement.style.left = `${selectedElement.offsetLeft + deltaX}px`;
        selectedElement.style.top = `${selectedElement.offsetTop + deltaY}px`;

        touchX = touch.clientX;
        touchY = touch.clientY;
    }
}

function onDoubleTouch(e) {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;
    if (tapLength < 500 && tapLength > 0 && !selectedElement) {
        selectedElement = e.target;
        selectedElement.style.background = 'purple';
        selectedElement.style.zIndex = '1000';
    }
    lastTap = currentTime;
}

function onUndoAction(e) {
    if (selectedElement && e.touches.length > 1) {
        selectedElement.style.left = initialX;
        selectedElement.style.top = initialY;
        selectedElement.style.background = 'red';
        selectedElement = null;
    }
}