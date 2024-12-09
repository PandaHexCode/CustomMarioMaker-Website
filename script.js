const currentMonth = new Date().getMonth();
const logoElement = document.getElementById('logo');

if (currentMonth === 11) {
    logoElement.src = 'logoWinter.png';
}