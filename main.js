// Elements 
const cursor = document.querySelector('.cursor');

// Event listener/Function
window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
})

window.addEventListener( 'click', () => {
    if(cursor.classList.contains('click')) {
        cursor.classList.remove('click');
        void cursor.offsetWidth;
        cursor.classList.add('click');
    } else {
        cursor.classList.add('click');
    }
})