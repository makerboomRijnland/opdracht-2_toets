/**
 *
 * OPDRACHT 1
 *
 * functions
 *
 */
function showWelcome() {
    document.getElementById("welkom").innerHTML =
        "Welkom bij de oefentoets<br> Programmeren - Periode 2";
}

showWelcome();

// Roep de functie `showWelcome` aan

/**
 *
 * OPDRACHT 2
 *
 * functions, variabelen, innerHTML
 *
 */

function showName() {
    let naam = "Marcel";
    // Maak een variable genaamd `naam` en geef deze jouw naam als waarde.
    document.getElementById("naam").innerHTML = naam;
    // Toon de variabele naam in de innerHTML van element met ID='naam'
}

showName();

//  Roep de functie `showName` aan

/**
 *
 * OPDRACHT 3a
 *
 *
 *
 */

function alertColor() {
    let kleur = document.getElementById("kleur").value;
    alert("De kleur is: " + kleur);
}

document.getElementById("kleur-show").addEventListener("click", alertColor);

//  Koppel de functie 'alertColor' aan het 'click' event van de button met ID=kleur-show

/**
 *
 * OPDRACHT 3b
 *
 */

function changeSectionBackground() {
    let kleur = document.getElementById("kleur").value;

    document.getElementById("kleur-section").style.backgroundColor = kleur;

    // Pas de backgroundColor aan van het element met ID='kleur-section'
    // naar de waarde van van de input met ID='kleur'
}

document.getElementById("kleur-show").addEventListener("click", changeSectionBackground);

//  Koppel de functie 'changeSectionBackground' aan het 'click' event van de button met ID=kleur-show

/**
 *
 * OPDRACHT 4 Party of niet
 *
 */

function showPartyForAge() {
    let leeftijd = document.getElementById("leeftijd").value;

    if (leeftijd < 18) {
        document.getElementById("leeftijd-party-nederland").innerHTML = "Nee";
        document.getElementById("leeftijd-party-japan").innerHTML = "Nee";
        document.getElementById("leeftijd-party-usa").innerHTML = "Nee";
    }
    if (leeftijd >= 18) {
        document.getElementById("leeftijd-party-nederland").innerHTML = "Ja";
        document.getElementById("leeftijd-party-japan").innerHTML = "Nee";
        document.getElementById("leeftijd-party-usa").innerHTML = "Nee";
    }
    if (leeftijd >= 20) {
        document.getElementById("leeftijd-party-nederland").innerHTML = "Ja";
        document.getElementById("leeftijd-party-japan").innerHTML = "Ja";
        document.getElementById("leeftijd-party-usa").innerHTML = "Nee";
    }
    if (leeftijd >= 21) {
        document.getElementById("leeftijd-party-nederland").innerHTML = "Ja";
        document.getElementById("leeftijd-party-japan").innerHTML = "Ja";
        document.getElementById("leeftijd-party-usa").innerHTML = "Ja";
    }
}

// Schrijf de functie genaamd: `showPartyForAge`, met hierin code die:
// de `value` van het element met ID='leeftijd' onthoud in een variabele genaamd: leeftijd

// Zorg ervoor dat afhankelijk van de waarde van de variabele 'leeftijd', er "Ja" of "Nee" komt in de
// elementen met IDs: leeftijd-party-nederland, leeftijd-party-usa, leeftijd-party-japan:
// Als leeftijd kleiner is dan 18, mag je nergens feesten
// Als leeftijd 18 jaar of ouder is, mag je in Nederland feesten
// Als leeftijd 20 jaar of ouder is, mag je in Japan feesten.
// Als leeftijd 21 jaar of ouder is, mag je in de USA feesten.

//  Koppel de functie 'showWorkForAge' aan het 'click' event van de button met ID='leeftijd-show'

document.getElementById("leeftijd-show").addEventListener("click", showPartyForAge);

/**
 *
 * OPDRACHT 5 Meervoud
 *
 */

// Schrijf de functie `maakMeervoud`, met 1 argument: `enkelvoud`, met hierin code die:
// Een variabele aanmaakt `meervoud`, waarin het enkelvoud wordt aangevuld met "en".
// (voorbeeld): Als enkelvoud = "drank", dan meervoud = "dranken".
// De variabele `meervoud` moet worden teruggegeven.

function maakMeervoud(enkelvoud) {
    let meervoud = enkelvoud + "en";
    return meervoud;
}

// Schrijf de functie `toonMeervoud`, die:
// De waarde van het element met ID='enkelvoud' onthoud in een variabele genaamd: `enkelvoud`
// De functie `maakMeervoud` aanroept met deze variabele, en de waarde die terugkomt opslaat in een variabele `meervoud`.
// Deze variabele toont in het element met ID='meervoud'

function toonMeervoud() {
    let enkelvoud = document.getElementById("enkelvoud").value;
    let meervoud = maakMeervoud(enkelvoud);
    document.getElementById("meervoud").innerHTML = meervoud;
}

document.getElementById("meervoud-show").addEventListener("click", toonMeervoud);
// Koppel de functie 'toonMeervoud' aan het click event van de button met ID='meervoud-show'

/**
 *
 * OPDRACHT 6 Naamdelen
 *
 */

function showNamesMe() {
    let naam = ["Marcel", null, "Akerboom"];
    // Maak een variabele genaamd `naam` met als waarde een array met jouw:
    //   - voornaam
    //   - tussenvoegsel (null als geen)
    //   - achternaam

    document.getElementById("mijn-voornaam").innerHTML = naam[0];
    document.getElementById("mijn-tussenvoegsel").innerHTML = naam[1];
    document.getElementById("mijn-achternaam").innerHTML = naam[2];

    // Toon de naamdelen uit de array 'naam' in de elementen met ID's:
    //   - mijn-voornaam
    //   - mijn-tussenvoegsel
    //   - mijn-achternaam

    document.getElementById("mijn-naam").innerHTML = naam[0] + " " + naam[2];
    // Toon jouw volledige naam (gebruikmakend met bovenstaande variabelen) in het element met ID=mijn-naam
}

showNamesMe();
// Roep de functie `showNamesMe` aan.

/**
 *
 * OPDRACHT 7. Kleur titels
 *
 */

function kleurTitels() {
    let titels = document.getElementsByTagName("h6");
    for (let index = 0; index < titels.length; index++) {
        titels[index].style.color = "brown";
    }
}

document.getElementById("kleur-titels").addEventListener("click", kleurTitels);

// Schrijf de functie genaamd: `kleurTitels`, met hierin code die:
// - de HTML elementen met de tag h6 opslaat in de variabele: `titels`
// - Voor elk element in die array:
// - Maak de tekstkleur bruin
//  Koppel de functie 'kleurTitels' aan het 'click' event van de button met ID='kleur-titels'

/**
 *
 * OPDRACHT 8
 *
 */

function changeBackgroundColor() {
    let color = document.body.style.backgroundColor;
    switch (color) {
        case "black":
            document.body.style.backgroundColor = "cyan";
            break;
        case "cyan":
            document.body.style.backgroundColor = "#86aa5b";
            break;
        case "#86aa5b":
            document.body.style.backgroundColor = "pink";
            break;
        default:
            document.body.style.backgroundColor = "black";
    }
}

//  Maak de functie changeBackgroundColor
//  Maak de variabel color, geef deze de waarde van de body background color
//  Schakel tussen de variabel color
//      Indien color 'black' is
//          Verander de body background color naar 'cyan'
//      Indien color 'cyan' is
//          Verander de body background color naar '#86aa5b'
//      Indien color '#86aa5b' is
//          Verander de body background color naar 'pink'
//      Indien het geen van de bovenstaande is
//          Verander de body background color naar 'black'
//
// Zorg ervoor dat de functie wordt aangeroepen bij een click op de knop ID=kleur-body

document
    .getElementById("kleur-body")
    .addEventListener("click", changeBackgroundColor);

/**
 *
 * OPDRACHT 9a
 *
 */

function eenBietjePadding() {
    let sections = document.getElementsByTagName("section");
    for (let index = 0; index < sections.length; index++) {
        sections[index].style.padding = "5px";
    }
}

document
    .getElementById("bietje-padding")
    .addEventListener("click", eenBietjePadding);

//  Maak de functie eenBietjePadding
// Maak een variabele genaamd: `sections`, en sla hier alle elementen met de tag "section" in op.
// Voor elk element in deze array (sections)
// Geef deze een padding van 5px.
// Zorg ervoor dat de functie wordt aangeroepen bij een click op de knop ID=bietje-padding

/**
 *
 * OPDRACHT 9b
 *
 */

function makeAbsolute() {
    let articles = document.getElementsByTagName("article");
    for (let index = 0; index < articles.length; index++) {
        articles[index].style.position = "absolute";
    }
}

document.getElementById("make-absolute").addEventListener("click", makeAbsolute);

//  Maak de functie makeAbsolute
// Maak een variabele genaamd: `articles`, en sla hier alle elementen met de tag "article" in op.
// Voor elk element in deze array (articles)
// zet de position op absolute
// Zorg ervoor dat de functie wordt aangeroepen bij een click op de knop ID=make-absolute

/**
 *
 * OPDRACHT 10 (bonus)
 *
 */

// Zorg dat alle event koppelingen gebeuren nadat de pagina volledig geladen is.
// Zorg ervoor dat alle code netjes staat uitgelijnd.
