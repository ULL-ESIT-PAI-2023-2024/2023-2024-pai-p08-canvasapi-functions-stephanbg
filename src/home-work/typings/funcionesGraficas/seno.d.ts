import { FuncionesGraficas } from '../interfaces/funcionesGraficas.js';
import { DibujarFuncion } from '../interfaces/dibujarFuncion.js';
export declare class Seno implements FuncionesGraficas, DibujarFuncion {
    private valor;
    constructor(valor: number);
    evaluar(): number;
    dibujarFuncion(canvas: HTMLCanvasElement, contexto: CanvasRenderingContext2D, color?: string, anchoLinea?: number): void;
}
