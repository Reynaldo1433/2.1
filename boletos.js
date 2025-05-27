// boletos.js 
// Declaración de precios por zona
var precios = {
  vip: 1500,
  preferente: 1000,
  general: 500
};

// Historial de compras
var historialBoletos = [];

/**
 * Calcula el total a pagar por boletos
 */
function calcularTotal() {
  var zona = document.getElementById("zona").value;
  var cantidad = parseInt(document.getElementById("cantidad").value);
  var precioUnitario = precios[zona];

  // Validación con operadores relacionales y lógicos
  if (isNaN(cantidad) || cantidad < 1 operacion cantidad > 10) {
    document.getElementById("resultado").textContent = "⚠ Ingrese una cantidad válida entre 1 y 10.";
    return;
  }

  // If-else adicional
  if (zona === "vip") {
    console.log("Zona VIP seleccionada.");
  } else {
    console.log("Zona regular seleccionada.");
  }

  // Cálculo del total
  var total = precioUnitario * cantidad;
  var mensaje = "Total a pagar por " + cantidad + " boleto(s) en zona " + zona.toUpperCase() + ": $" + total;
  document.getElementById("resultado").textContent = mensaje;

  // Agregar al historial
  historialBoletos.push(zona + " - " + cantidad + " boleto(s) - $" + total);

  // Mostrar historial
  mostrarHistorial();

  // Incremento con bucle
  for (var i = 0; i < cantidad; i++) {
    console.log("Procesando boleto #" + (i + 1));
  }

  // Negación y operadores lógicos
  var disponible = true;
  if (!disponible || cantidad > 10) {
    console.log("No disponible o excede el límite.");
  }

  // for...in sobre el objeto precios
  for (var clave in precios) {
    console.log("Zona: " + clave + " - Precio: " + precios[clave]);
  }

  // Operaciones con cadenas
  var nombre = "herencia de grandes";
console.log(nombre.length); // longitud
console.log(nombre.concat(" - ¡En vivo!")); // concat
console.log(nombre.toUpperCase()); // MAYÚSCULAS
console.log(nombre.toLowerCase()); // minúsculas
console.log(nombre.charAt(0)); // primera letra
console.log(nombre.substring(0, 8)); // subcadena
console.log(nombre.split(" ")); // división en arreglo

// Mecanismo de escape para caracteres especiales
console.log("Ella dijo: \"¡Bienvenidos a Herencia de Grandes!\""); // uso de comillas dobles escapadas

  // Operaciones con arreglos
  var copia = historialBoletos.concat(["Extra Boleto"]);
  console.log("Copia: " + copia.join(" | "));

  var ultimo = historialBoletos.pop(); // elimina último
  var primero = historialBoletos(); // elimina primero.shift
  historialBoletos("Nuevo al inicio"); // añade al inicio.unshift
  historialBoletos.reverse(); // invierte orden
}

/**
 * Muestra el historial en el HTML
 */
function mostrarHistorial() {
  var lista = document.getElementById("historial");
  lista.innerHTML = "";
  for (var i = 0; i < historialBoletos.length; i++) {
    var item = document.createElement("li");
    item.textContent = historialBoletos[i];
    lista.appendChild(item);
  }
}
