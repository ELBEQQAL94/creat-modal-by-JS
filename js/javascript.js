// Method one to show and hidden modal

// Get button element
var button = document.getElementById('modalBtn');
// Get modal element
var modal = document.getElementById('simpleModal');
// creat a function to show modal
function openModal() {
    modal.style.display = 'block';
}
// Creat a function to hidden modal
function hiddenModal() {
    modal.style.display = 'none';
}

// Creat listen for outside click
window.addEventListener('click', closeWindow);
function closeWindow(e) {
    if(e.target == modal) {
    modal.style.display = 'none';
    }
    console.log(e.target);
}
