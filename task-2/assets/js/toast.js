function showToast(message) {
    var toastContainer = document.getElementById('toast-container');
    var toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toastContainer.appendChild(toast);

    setTimeout(function() {
        toast.classList.add('show');
    }, 100);

    setTimeout(function() {
        toast.classList.remove('show');
        setTimeout(function() {
        toastContainer.removeChild(toast);
        }, 300);
    }, 3000);
}