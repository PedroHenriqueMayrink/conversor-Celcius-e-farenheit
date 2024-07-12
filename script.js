function converter() {
    let celsius = document.getElementById("celsius").value;
    let fahrenheit = document.getElementById("fahrenheit").value;
  
    if (celsius !== "") {
      fahrenheit = (celsius * 9/5) + 32;
      document.getElementById("resultado").innerHTML = `${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
    } else if (fahrenheit !== "") {
      celsius = (fahrenheit - 32) * 5/9;
      document.getElementById("resultado").innerHTML = `${fahrenheit}°F = ${celsius.toFixed(2)}°C`;
    } else {
      alert("Por favor, insira um valor em Celsius ou Fahrenheit.");
    }
  
  document.getElementById("celsius").value = "";
  document.getElementById("fahrenheit").value = "";
}  