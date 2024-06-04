//versie 5: Random functie aangepast met queryselectorAll
console.log("linked")
//const voor de knoppen omdat deze niet veranderen
const tomaatKnop = document.querySelector('#tomaatknop');
const komkommerKnop = document.querySelector('#komkommerknop');
const champignonknop = document.querySelector('#champignonknop');
const randomknop = document.querySelector('#randomknop');
const resetKnop = document.querySelector('#resetknop');
//boolean die toont of een ingredient al geplaatst is
let tomaatZichtbaar = false;
let komkommerZichtbaar = false;
let champignonZichtbaar = false;
let randomGebruikt = false;

//functie die de de gedrukte knop identicficeerd en het juiste ingredient plaatst/verwijderd
//met parameter het event van de eventlistener om de gebruikte knop in een variabele te gebruiken
function showIngredient(event) {
    let knop = event.target.id //tijdelijke variabele die de gedrukte knop opslaat
    if (knop == 'tomaatknop' && !tomaatZichtbaar) {
        document.querySelector('#tomaat').style.opacity = '100%';
        //bron: https://www.w3schools.com/js/js_htmldom_css.asp
        tomaatZichtbaar = true;
        console.log('tomaat toegevoegd');
    } else if (knop == 'tomaatknop') {
        document.querySelector('#tomaat').style.opacity = '0%';
        tomaatZichtbaar = false;
        console.log('tomaat verwijderd');
    } else if (knop == 'komkommerknop' && !komkommerZichtbaar) {
        document.querySelector('#komkommer').style.opacity = '100%';
        komkommerZichtbaar = true;
        console.log('komkommer toegevoegd');
    } else if (knop == 'komkommerknop') {
        document.querySelector('#komkommer').style.opacity = '0%';
        komkommerZichtbaar = false;
        console.log('komkommer verwijderd');
    } else if (knop == 'champignonknop' && !champignonZichtbaar) {
        document.querySelector('#champignon').style.opacity = '100%';
        champignonZichtbaar = true;
        console.log('champignon toegevoegd');
    } else if (knop == 'champignonknop') {
        document.querySelector('#champignon').style.opacity = '0%';
        champignonZichtbaar = false;
        console.log('champignon verwijderd');
    }
}

//functie die een random ingredient uit een array selecteerd en een click op de knop voor het ingredient simuleert
function showRandom() {
    if (!randomGebruikt && !tomaatZichtbaar && !komkommerZichtbaar && !champignonZichtbaar) {
        //let ingredienten = ['#tomaatknop', '#komkommerknop', '#champignonknop'];
        let ingredienten = [...document.querySelectorAll("div.knoppen p")].map(item => item.id);  
        //bron: https://stackoverflow.com/questions/65403321/query-selector-to-array
        //bron: https://stackoverflow.com/questions/55476368/queryselectorall-that-only-returns-id-names 
        let randomKeuze = Math.random() * 2;
        randomKeuze = Math.round(randomKeuze);
        let keuzeIndex ='#' + ingredienten[randomKeuze];
        document.querySelector(keuzeIndex).click(); //simuleert click event op de ingredientknop
        //bron: https://stackoverflow.com/questions/2705583/how-to-simulate-a-click-with-javascript
        randomGebruikt = true
    } else if (randomGebruikt == true) {
        randomknop.textContent = "Je hebt de knop al gebruikt";
        randomknop.style.color = 'red';

        //timeout die na 2 seconden de tekst herstelt
        setTimeout(function () {
            randomknop.textContent = "Random";
            randomknop.style.color = 'white';
        }, 2000);
        //bron: https://stackoverflow.com/questions/37594636/how-to-display-message-for-3-seconds-in-javascript 
    } else {
        randomknop.textContent = "Je hebt al ingredienten gebruikt";
        randomknop.style.color = 'red';

        //timeout die na 2 seconden de tekst herstelt
        setTimeout(function () {
            randomknop.textContent = "Random";
            randomknop.style.color = 'white';
        }, 2000);
        //bron: https://stackoverflow.com/questions/37594636/how-to-display-message-for-3-seconds-in-javascript 
    }
}

//functie die alle ingredienten verwijderd
function resetSalade() {
    document.querySelector('#komkommer').style.opacity = '0%';
    document.querySelector('#tomaat').style.opacity = '0%';
    document.querySelector('#champignon').style.opacity = '0%';
    tomaatZichtbaar = false;
    komkommerZichtbaar = false;
    champignonZichtbaar = false;
    randomGebruikt = false;
    console.clear();
    console.log('salade is gereset');
}

//eventlisteners voor de knoppen die de bijbehorende functie aanroepen als er een knop geklikt wordt
tomaatKnop.addEventListener('click', showIngredient);
komkommerKnop.addEventListener('click', showIngredient);
champignonknop.addEventListener('click', showIngredient);
randomknop.addEventListener('click', showRandom);
resetKnop.addEventListener('click', resetSalade);