/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const formaKgKonvertavimui = document.querySelector("form");

formaKgKonvertavimui.addEventListener("submit", function (event){
    event.preventDefault();
    const kgToLb = search.value * 2.2046;
    const kgToG = search.value / 0.0010000;
    const kgToOz = search.value * 35.274;
    const output = document.querySelector("#output");

    output.textContent = `Svarai: ${kgToLb}, Gramai: ${kgToG}, Uncijos: ${kgToOz}`;
});