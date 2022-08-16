//Log in

//let name = prompt("Bitte Store ID eingeben");
//if (name == 20696) {
//    console.log("holz");
//}
//alert(txt);

//Logo

function weiterOderNein() {
    let result = confirm("Seite verlassen ?");
    if (result == false) {
        event.preventDefault();
    }
}

// Feedback

function feedbackGeben() {
    alert("Bitte Feedback senden am plamenpetroww@gmail.com")
}

//Login

function validate() {

    let username = document.getElementById("txt__txt").value;
    localStorage.setItem("textvalue", username);
    return false;

}

// Lieferung buttons

function berechnenAutomatic() {
    alert("So kann Oma auch");
}
//Salat Bestellung

function berechnenEier() {
    let a = document.getElementById("verbrauch__eier").value;
    let b = document.getElementById("verbrauch__eier__pro__tag").value;
    let c = document.getElementById("tage__eier").value;
    let d = document.getElementById("lage__eier").value;
    let e = ((((a / (b - 1)) * c) - (d * 24)) / 24) * 1.2;
    document.getElementById("brauche__eier").value = Math.ceil(e);
}

function berechnenApfel() {
    let a = document.getElementById("verbrauch__apfel").value;
    let b = document.getElementById("verbrauch__apfel__pro__tag").value;
    let c = document.getElementById("tage__apfel").value;
    let d = document.getElementById("lage__tuete").value;
    let e = ((((a / (b - 1)) * c) - (d * 12)) / 12) * 1.2;
    document.getElementById("brauche__apfel").value = Math.ceil(e);
}

function berechnenZwiebeln() {
    let a = document.getElementById("verbrauch__zwiebeln").value;
    let b = document.getElementById("verbrauch__zwiebeln__pro__tag").value;
    let c = document.getElementById("tage__zwiebeln").value;
    let d = document.getElementById("lage__zwiebeln").value;
    let e = ((((a / (b - 1)) * c) - (d * 0.6)) / 0.6) * 1.2;
    document.getElementById("brauche__zwiebeln").value = Math.ceil(e);
}

function berechnenTomaten() {
    let a = document.getElementById("verbrauch__tomaten").value;
    let b = document.getElementById("verbrauch__tomaten__pro__tag").value;
    let c = document.getElementById("tage__tomaten").value;
    let d = document.getElementById("lage__tomaten").value;
    let e = ((((a / (b - 1)) * c) - (d * 6)) / 6) * 1.2;
    document.getElementById("brauche__tomaten").value = Math.ceil(e);
}

function berechnenLollo() {
    let a = document.getElementById("verbrauch__lollo").value;
    let b = document.getElementById("verbrauch__lollo__pro__tag").value;
    let c = document.getElementById("tage__lollo").value;
    let d = document.getElementById("lage__lollo").value;
    let e = ((((a / (b - 1)) * c) - (d * 0.3)) / 0.3) * 1.2;
    document.getElementById("brauche__lollo").value = Math.ceil(e);
}

function berechnenEisberg() {
    let a = document.getElementById("verbrauch__eisberg").value;
    let b = document.getElementById("verbrauch__eisberg__pro__tag").value;
    let c = document.getElementById("tage__eisberg").value;
    let d = document.getElementById("lage__eisberg").value;
    let e = ((((a / (b - 1)) * c) - (d * 8)) / 8) * 1.2;
    document.getElementById("brauche__eisberg").value = Math.ceil(e);
}

function berechnenMisch() {
    let a = document.getElementById("verbrauch__misch").value;
    let b = document.getElementById("verbrauch__misch__pro__tag").value;
    let c = document.getElementById("tage__misch").value;
    let d = document.getElementById("lage__misch").value;
    let e = ((((a / (b - 1)) * c) - (d * 0.7)) / 0.7) * 1.2;
    document.getElementById("brauche__misch").value = Math.ceil(e);
}

//Haupt Bestellung

function berechnenHbPatty() {
    let a = document.getElementById("verbrauch__hb__patty").value;
    let b = document.getElementById("verbrauch__hb__patty__pro__tag").value;
    let c = document.getElementById("tage__hb__patty").value;
    let d = document.getElementById("lage__hb__patty").value;
    let e = ((((a / (b - 1)) * c) - (d * 276)) / 276) * 1.2;
    document.getElementById("brauche__hb__patty").value = Math.ceil(e);
}

function berechnenHrPatty() {
    let a = document.getElementById("verbrauch__hr__patty").value;
    let b = document.getElementById("verbrauch__hr__patty__pro__tag").value;
    let c = document.getElementById("tage__hr__patty").value;
    let d = document.getElementById("lage__hr__patty").value;
    let e = ((((a / (b - 1)) * c) - (d * 99)) / 99) * 1.2;
    document.getElementById("brauche__hr__patty").value = Math.ceil(e);
}

function berechnenHrPattyGross() {
    let a = document.getElementById("verbrauch__hr__patty__gross").value;
    let b = document.getElementById("verbrauch__hr__patty__gross__pro__tag").value;
    let c = document.getElementById("tage__hr__patty__gross").value;
    let d = document.getElementById("lage__hr__patty__gross").value;
    let e = ((((a / (b - 1)) * c) - (d * 69)) / 69) * 1.2;
    document.getElementById("brauche__hr__patty__gross").value = Math.ceil(e);
}

function berechnenMcrib() {
    let a = document.getElementById("verbrauch__mcrib").value;
    let b = document.getElementById("verbrauch__mcrib__pro__tag").value;
    let c = document.getElementById("tage__mcrib").value;
    let d = document.getElementById("lage__mcrib").value;
    let e = ((((a / (b - 1)) * c) - (d * 75)) / 75) * 1.2;
    document.getElementById("brauche__mcrib").value = Math.ceil(e);
}

function berechnenNuggets() {
    let a = document.getElementById("verbrauch__nuggets").value;
    let b = document.getElementById("verbrauch__nuggets__pro__tag").value;
    let c = document.getElementById("tage__nuggets").value;
    let d = document.getElementById("lage__nuggets").value;
    let e = ((((a / (b - 1)) * c) - (d * 750)) / 750) * 1.2;
    document.getElementById("brauche__nuggets").value = Math.ceil(e);
}

function berechnenValue() {
    let a = document.getElementById("verbrauch__value").value;
    let b = document.getElementById("verbrauch__value__pro__tag").value;
    let c = document.getElementById("tage__value").value;
    let d = document.getElementById("lage__value").value;
    let e = ((((a / (b - 1)) * c) - (d * 256)) / 256) * 1.2;
    document.getElementById("brauche__value").value = Math.ceil(e);
}

function berechnenClassic() {
    let a = document.getElementById("verbrauch__classic").value;
    let b = document.getElementById("verbrauch__classic__pro__tag").value;
    let c = document.getElementById("tage__classic").value;
    let d = document.getElementById("lage__classic").value;
    let e = ((((a / (b - 1)) * c) - (d * 168)) / 168) * 1.2;
    document.getElementById("brauche__classic").value = Math.ceil(e);
}

function berechnenButtermilch() {
    let a = document.getElementById("verbrauch__buttermilch").value;
    let b = document.getElementById("verbrauch__buttermilch__pro__tag").value;
    let c = document.getElementById("tage__buttermilch").value;
    let d = document.getElementById("lage__buttermilch").value;
    let e = ((((a / (b - 1)) * c) - (d * 96)) / 96) * 1.2;
    document.getElementById("brauche__buttermilch").value = Math.ceil(e);
}

function berechnenVegan() {
    let a = document.getElementById("verbrauch__vegan").value;
    let b = document.getElementById("verbrauch__vegan__pro__tag").value;
    let c = document.getElementById("tage__vegan").value;
    let d = document.getElementById("lage__vegan").value;
    let e = ((((a / (b - 1)) * c) - (d * 63)) / 63) * 1.2;
    document.getElementById("brauche__vegan").value = Math.ceil(e);
}


