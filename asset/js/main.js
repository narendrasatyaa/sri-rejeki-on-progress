const input = document.querySelector('.search-container input');
const kartuBunga = document.querySelectorAll('.kartu-bunga');

input.addEventListener('input', function() {
    const filter = input.value.toLowerCase();
    kartuBunga.forEach(kartu => {
        const namaBunga = kartu.dataset.nama.toLowerCase();
        kartu.style.display = namaBunga.includes(filter) ? 'block' : 'none';
    });
});