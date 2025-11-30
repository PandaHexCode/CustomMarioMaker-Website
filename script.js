const currentMonth = new Date().getMonth();
const logoElement = document.getElementById('logo');

if (currentMonth === 11) {
    logoElement.src = 'logoWinter.png';
}

fetch('currentCMMVersion.txt?')
    .then(response => response.text())
    .then(version => {
        const downloadLink = document.getElementById('downloadLink');
        downloadLink.innerHTML = `Download Alpha - ${version} (BUGGY, I'm working on a reloaded Version currently, complete new code base)`;
    })
    .catch(error => {
        console.error('Error fetching version file:', error);
    });

const acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
};
