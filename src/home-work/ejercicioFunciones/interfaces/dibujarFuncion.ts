export interface DibujarFuncion {
  dibujarFuncion(
    canvas: HTMLCanvasElement,
    contexto: CanvasRenderingContext2D,
    color?: string,
    anchoLinea?: number
  ): void
}