const duplicateInvestment = (anualRate) => {
    yearsToDouble = 72/anualRate;
    yearsToDouble = Math.round(yearsToDouble);
    return yearsToDouble;
}
const calculate = () => {
    const rate = document.getElementsByClassName("calc-input")[0].value;
    let quantity = document.getElementsByClassName("calc-input")[1].value;
    quantity = quantity * 2;
    document.getElementsByTagName("STRONG")[2].innerHTML = `${duplicateInvestment(rate)}`; 
    document.getElementsByTagName("STRONG")[3].innerHTML = `${quantity}`;
}
