function convertToCelsius() {
   let fahrenheitInput = document.getElementById('fahrenheit').value;
   let celsiusResult = (fahrenheitInput - 32) * 5/9;
   document.getElementById('result').innerText = fahrenheitInput + ' Fahrenheit is ' + celsiusResult.toFixed(2) + ' Celsius';
 }

 function convertToFahrenheit() {
   let celsiusInput = document.getElementById('celsius').value;
   let fahrenheitResult = (celsiusInput * 9/5) + 32;
   document.getElementById('result').innerText = celsiusInput + ' Celsius is ' + fahrenheitResult.toFixed(2) + ' Fahrenheit';
 }