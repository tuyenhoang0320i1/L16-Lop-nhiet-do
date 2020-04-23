function Temperature(celsius) {
    this.celsius = celsius;
    this.getFahrenheit = function () {
        return F = (1.8 * celsius) + 32;
    };
    this.getCelsius = function () {
        return (F - 32)/1.8
    }
}

let myTemperature = new Temperature(25);
let fahrenheit = myTemperature.getFahrenheit();
let celsius = myTemperature.getCelsius();
alert("Fahrenheit is: " + fahrenheit + " oF" + "; " + "Celsius is: " + celsius +" oC");
