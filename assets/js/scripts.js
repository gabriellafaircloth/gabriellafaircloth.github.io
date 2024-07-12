document.addEventListener('DOMContentLoaded', function() {
    const searchToggle = document.getElementById('search-toggle');
    const searchContent = document.querySelector('.search-content'); // Adjust selector based on your HTML

    searchToggle.addEventListener('click', function() {
        searchContent.classList.toggle('is--visible');
    });
});
