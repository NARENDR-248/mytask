function toggleBox(boxNumber) {
    document.querySelectorAll('.box').forEach((box, index) => {
        const options = document.getElementById(`options${index + 1}`);
        if (options) {
            options.style.display = (index + 1 === boxNumber) ? 'block' : 'none';
        }
        box.classList.toggle('selected', index + 1 === boxNumber);
    });
}