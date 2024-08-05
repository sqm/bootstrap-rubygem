//= require popper.js
//= require bootstrap5-sprockets

document.addEventListener('DOMContentLoaded', () => {
    for (const tooltipTriggerEl of document.querySelectorAll('[data-bs-toggle="tooltip"]')) {
        new bootstrap.Tooltip(tooltipTriggerEl)
    }
});
