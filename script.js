document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('dataForm');
    const keyInput = document.getElementById('key');
    const valueInput = document.getElementById('value');
    const list = document.getElementById('list');
    const clearButton = document.getElementById('clearStorage');

    function displayData() {
        list.innerHTML = '';
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = JSON.parse(localStorage.getItem(key));
            const li = document.createElement('li');
            li.textContent = `${key}: ${value}`;
            list.appendChild(li);
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const key = keyInput.value.trim();
        const value = valueInput.value.trim();
        if (key && value) {
            localStorage.setItem(key, JSON.stringify(value));
            keyInput.value = '';
            valueInput.value = '';
            displayData();
        }
    });

    clearButton.addEventListener('click', () => {
        localStorage.clear();
        displayData();
    });

    displayData(); // Initial display of stored data
});
