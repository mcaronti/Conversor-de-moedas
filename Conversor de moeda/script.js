function convert() {
    var amount = parseFloat(document.getElementById("amount").value);
    var toCurrency = document.getElementById("toCurrency").value;
    var result = document.getElementById("result");

    if (isNaN(amount) || amount <= 0) {
        result.innerHTML = "Digite uma quantia válida.";
        return;
    }

    var rates = {
        "USD": 0.19, 
        "GBP": 0.15,  
        "EUR": 0.18, 
        "ARS": 168.31, 
        "JPY": 30.30  
    };

    if (!(toCurrency in rates)) {
        result.innerHTML = "Moeda inválida!";
        return;
    }

    var toRate = rates[toCurrency];

    var convertedAmount = amount * toRate;
    result.innerHTML = amount.toFixed(2) + " BRL equivale a " + convertedAmount.toFixed(2) + " " + toCurrency;
}
