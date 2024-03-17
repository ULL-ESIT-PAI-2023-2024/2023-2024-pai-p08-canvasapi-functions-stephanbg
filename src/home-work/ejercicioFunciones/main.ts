/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Stephan Brommer Gutiérrez
 * @since 10 de Marzo de 2024
 * @fileoverview main.ts
 * Se encarga de crear un objeto de la clase View para dibujar
 * en el canvas figuras geométricas
 * @see {@link https://github.com/ULL-ESIT-PAI-2023-2024/2023-2024-pai-p07-canvasapi-stephanbg.git}
 *
 */

import {EsteticaCanvasGrafica} from './esteticaCanvasGrafica/esteticaCanvasGrafica.js'

/**
 * Muestra un mensaje explicativo al usuario.
 */
function mostrarTextoExplicativo(): void {
  const TEXTO_INICIO: string =
    'Este programa le pedirá al usuario el número de figuras que desea dibujar.' +
    '\nPosteriormente se dibujarán figuras 2D aleatorias (cuadrados, rectángulos, triángulos y círculos)' +
    ' dentro del canvas.\n\n' +
    'Presiona "HOME" para volver a la pantalla del índice y "Dibujar figuras" para ejecutar el programa.\n';
  alert(TEXTO_INICIO);
}

/**
 * Función principal del programa.
 * Obtiene el canvas y su contexto, crea una instancia de la clase View
 * y dibuja las figuras en el canvas.
 */
function main(): void {
  const ESTETICA_CANVAS: EsteticaCanvasGrafica = new EsteticaCanvasGrafica;
  //const CANVAS: HTMLCanvasElement = document.getElementById('miCanvas') as HTMLCanvasElement;
  //const CONTEXTO: CanvasRenderingContext2D | null = CANVAS.getContext('2d');
  //const VISTA: View = new View(CANVAS, CONTEXTO);
  //VISTA.dibujarFiguras();
}

main();

// Evento que se ejecuta cuando el DOM ha sido completamente cargado
/*document.addEventListener('DOMContentLoaded', () => {
  const buttonGraficaFunciones: HTMLElement | null = document.getElementById('buttonGraficaFunciones');
  buttonGraficaFunciones?.addEventListener('click', main);
});*/

// Mostrar el texto explicativo al usuario al cargar la página
//mostrarTextoExplicativo();
