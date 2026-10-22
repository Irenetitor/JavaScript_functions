export function consola() {
  console.log("Hola mundo!");
}

export default function idioma() {
  console.log("castellano");
}

export function cambioTexto() {
  return "lo que sea";
}

export function parametros(holi, fulano) {
  return holi + " " + fulano;
}

const flecha = () => {
  console.log("funcion de flecha");
};

export { flecha };

function noExportada() {
  console.log("esta es la funcion que se ejecuta antes de su declaracion");
}
