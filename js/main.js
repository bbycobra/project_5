
baguetteBox.run('.grid');

const search = new Filter('search', 'data-caption');

const gridElement = document.querySelector('#search');

gridElement.addEventListener('keyup', (event) => {
    console.log("hey");
});
