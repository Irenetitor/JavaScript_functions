import saludo, {
  sumar,
  llamar,
  magic,
  texto,
  algo,
  first,
  second,
  nuevo,
  encen,
  apaga,
  empty,
  hidefault,
} from "./ejercicios.js";
import { suma, resta, multiplicacion } from "../calculadora.js";
import { nombre, sumarFlecha, llamarFlecha, textoFlecha } from "./textos.js";
import saludarPersonalizado from "./saludador.js";
import {
  sumarFlecha as sumarAgrupada,
  restarFlecha,
  multiplicarFlecha,
} from "./operaciones-flecha.js";
import "./hoisting.js";
//-------------1
const resultado = sumar(8, 3);
document.getElementById("sumar").textContent =
  `El resultado de la suma es ${resultado}`; //also document.querySelector("#suma").textContent = `El resultado es ${resultado}`;

//-----------2
const saludar = (document.getElementById("greetings").textContent = saludo());

//-----------3
const buton = document.getElementById("llamar");
buton.addEventListener("click", () => {
  console.log(llamar());
});

//-----------4
const botonMagia = document.getElementById("magi");
const textoMagia = document.getElementById("txt_magic");

botonMagia.addEventListener("click", () => {
  textoMagia.textContent = magic();
});

//-----------5
const botonPrint = document.getElementById("txt_input");
const inputTexto = document.getElementById("imprime");
const textoPrint = document.getElementById("in_text");

botonPrint.addEventListener("click", () => {
  textoPrint.textContent = texto(inputTexto.value);
});

//-----------6
const botonClean = document.getElementById("clean_input");
const cleanInput = document.getElementById("something");

botonClean.addEventListener("click", () => {
  cleanInput.value = "";
});

//-----------7
const botonSum = document.getElementById("sum");
const firstinput = document.getElementById("num1");
const secondinput = document.getElementById("num2");
const totalinput = document.getElementById("total_sum");

botonSum.addEventListener("click", () => {
  totalinput.textContent =
    Number(first(firstinput.value)) + Number(second(secondinput.value));
});

//-----------8
const botonCalcu = document.getElementById("suma");
const botonCalcul = document.getElementById("resta");
const botonCalcula = document.getElementById("multiplicacion");
const num_input1 = document.getElementById("nm1");
const num_input2 = document.getElementById("nm2");
const calcuinput = document.getElementById("total_cal");

botonCalcu.addEventListener("click", () => {
  calcuinput.textContent = suma(
    Number(num_input1.value),
    Number(num_input2.value),
  );
});

botonCalcul.addEventListener("click", () => {
  calcuinput.textContent = resta(
    Number(num_input1.value),
    Number(num_input2.value),
  );
});

botonCalcula.addEventListener("click", () => {
  calcuinput.textContent = multiplicacion(
    Number(num_input1.value),
    Number(num_input2.value),
  );
});

//-----------12
const nominput = document.getElementById("name");
const surinput = document.getElementById("surname");
const nomsurh = document.getElementById("presentacion");
const botonenvi = document.getElementById("yo");

botonenvi.addEventListener("click", () => {
  nomsurh.textContent = nuevo(nominput.value, surinput.value);
});

//-----------13
const botonluz = document.getElementById("luz");
const actualluz = document.getElementById("inluz");

botonluz.addEventListener("click", () => {
  if (actualluz.textContent == encen()) {
    actualluz.textContent = apaga();
  } else {
    actualluz.textContent = encen();
  }
});

//-----------14
const botonbo = document.getElementById("borrar");
const textborr = document.getElementById("text5");

botonbo.addEventListener("click", () => {
  textborr.textContent = empty();
});

//-----------15
const btncon = document.getElementById("convert");
const wrdin = document.getElementById("mayus");

btncon.addEventListener("click", () => {
  wrdin.value = wrdin.value.toUpperCase();
});

//-----------16 y 17
const inputSaludo = document.getElementById("inom");
const botonSaludo = document.getElementById("saludar-personalizado");
const resultadoSaludo = document.getElementById("saldef");

botonSaludo.addEventListener("click", () => {
  if (inputSaludo.value === "") {
    console.log("Por favor ingresa un nombre");
    return;
  }

  resultadoSaludo.textContent = saludarPersonalizado(inputSaludo.value);
});

//-----------18: la llamada y la declaración están en hoisting.js

//-----------19
console.log(sumarAgrupada(4, 2));
console.log(restarFlecha(4, 2));
console.log(multiplicarFlecha(4, 2));

//-----------20
const saludoBotonUno = document.getElementById("saludo-uno");
const saludoBotonDos = document.getElementById("saludo-dos");
const resultadoDobleSaludo = document.getElementById("resultado-doble-saludo");

saludoBotonUno.addEventListener("click", () => {
  resultadoDobleSaludo.textContent = saludarPersonalizado("Ana");
});

saludoBotonDos.addEventListener("click", () => {
  resultadoDobleSaludo.textContent = saludarPersonalizado("Luis");
});
