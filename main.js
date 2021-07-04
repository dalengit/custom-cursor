// Elements 
const cursor = document.querySelector('.cursor');

// Event listener/Function
window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
})
