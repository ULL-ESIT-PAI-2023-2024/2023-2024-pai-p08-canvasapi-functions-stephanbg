import {FuncionesGraficas} from '../interfaces/funcionesGraficas.js'
import {DibujarFuncion} from '../interfaces/dibujarFuncion.js'

export class Seno implements FuncionesGraficas, DibujarFuncion {
  
  constructor(private valor: number) {
    this.valor = valor;
  }

  public evaluar(): number {
    return Math.sin(this.valor);
  }

  public dibujarFuncion(
    canvas: HTMLCanvasElement,
    contexto: CanvasRenderingContext2D,
    color: string = 'black',
    anchoLinea: number = 1
  ): void {
    
  }
}