let btn = document.querySelector('button');
let nouveauParagraphe = document.createElement('p');
let div = document.createElement('div');
document.body.append(div);
div.prepend(nouveauParagraphe);





btn.addEventListener('click', () => {
    function start() {
        if (btn.innerHTML === 'Cacher') {
            btn.innerHTML = 'Afficher';
            nouveauParagraphe.textContent = '';
        } else {
            btn.innerHTML = 'Cacher';
            nouveauParagraphe.textContent = 'Bravo ! tu as decouvert le texte cacher';
        }
    }
    start();
});