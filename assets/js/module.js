import defecto, {
  consola,
  cambioTexto,
  parametros,
  flecha,
} from "./funciones.js";

const boton = document.getElementById("consola");
const parrafo = document.getElementById("texto");

const saludo = document.getElementById("saludo");
const name = document.getElementById("name");

boton.addEventListener("click", () => {
  console.log("funcion nombrada");
  consola();

  console.log("funcion por defecto");
  defecto();

  parrafo.textContent = cambioTexto();

  saludo.textContent = parametros(saludo.textContent, name.value);

  flecha();
});

function noExportada() {
  console.log("esta es la funcion que se ejecuta antes de su declaracion");
}
