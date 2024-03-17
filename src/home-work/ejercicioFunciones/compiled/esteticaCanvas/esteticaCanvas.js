export class EsteticaCanvas {
    constructor() {
        this.canvas = document.getElementById('miCanvas');
        this.contexto = this.canvas.getContext('2d') || new CanvasRenderingContext2D();
        this.centroX = this.canvas.width / 2;
        this.centroY = this.canvas.height / 2;
        this.escala = 40;
        this.dibujarFondoCuadriculas();
        this.dibujarEjes();
    }
    dibujarFondoCuadriculas() {
        this.contexto.strokeStyle = 'grey';
        // El primer valor indica la longitud de la línea, el segundo valor indica la longitud del espacio
        this.contexto.setLineDash([5, 5]);
        this.dibujarLineasDiscontinuasHorizontales();
        this.dibujarLineasDiscontinuasVerticales();
        this.contexto.setLineDash([]);
    }
    dibujarLineasDiscontinuasHorizontales() {
        let desplazaminetoEjeY = this.escala;
        while (desplazaminetoEjeY < this.canvas.height) {
            this.contexto.beginPath();
            this.contexto.moveTo(0, desplazaminetoEjeY);
            this.contexto.lineTo(this.canvas.width, desplazaminetoEjeY);
            this.contexto.stroke();
            desplazaminetoEjeY += this.escala;
        }
    }
    dibujarLineasDiscontinuasVerticales() {
        let desplazaminetoEjeX = this.escala;
        while (desplazaminetoEjeX < this.canvas.width) {
            this.contexto.beginPath();
            this.contexto.moveTo(desplazaminetoEjeX, 0);
            this.contexto.lineTo(desplazaminetoEjeX, this.canvas.height);
            this.contexto.stroke();
            desplazaminetoEjeX += this.escala;
        }
    }
    dibujarEjes() {
        // Dibujar ejes X e Y
        this.contexto.beginPath();
        this.contexto.moveTo(0, this.centroY);
        this.contexto.lineTo(this.canvas.width, this.centroY);
        this.contexto.moveTo(this.centroX, 0);
        this.contexto.lineTo(this.centroX, this.canvas.height);
        this.contexto.strokeStyle = 'black';
        this.contexto.lineWidth = 2;
        this.contexto.stroke();
        // Flecha en el eje X
        this.contexto.moveTo(this.centroX, this.centroY - (this.canvas.height / 2));
        this.contexto.lineTo(this.centroX - 10, 10);
        this.contexto.moveTo(this.centroX, this.centroY - (this.canvas.height / 2));
        this.contexto.lineTo(this.centroX + 10, 10);
        // Flecha en el eje Y
        this.contexto.moveTo(this.canvas.width, this.centroY);
        this.contexto.lineTo(this.canvas.width - 10, this.centroY - 10);
        this.contexto.moveTo(this.canvas.width, this.centroY);
        this.contexto.lineTo(this.canvas.width - 10, this.centroY + 10);
        // Dibujar marcas en los ejes X e Y
        this.contexto.font = '18px Arial';
        this.contexto.textAlign = 'center';
        this.contexto.textBaseline = 'top';
        this.contexto.fillStyle = 'black';
        // Marcas en el eje X
        this.dibujarMarcasEnEjeX();
        // Marcas en el eje Y
        this.dibujarMarcasEnEjeY();
        this.contexto.stroke();
    }
    dibujarMarcasEnEjeX() {
        const DESPLAZAMIENTO_MARCA_HACIA_ABAJO = 5;
        const DESPLAZAMIENTO_NUMERO_DE_LA_MARCA = DESPLAZAMIENTO_MARCA_HACIA_ABAJO + 2;
        const DISTANCIA_MARCAS = this.escala * 2;
        for (let x = DISTANCIA_MARCAS; x < this.canvas.width; x += DISTANCIA_MARCAS) {
            if (x === this.centroX)
                continue;
            this.contexto.moveTo(x, this.centroY);
            this.contexto.lineTo(x, this.centroY + DESPLAZAMIENTO_MARCA_HACIA_ABAJO);
            this.contexto.fillText(((2 * (x - this.centroX)) / DISTANCIA_MARCAS).toString(), // Texto
            x, this.centroY + DESPLAZAMIENTO_NUMERO_DE_LA_MARCA // Posición
            );
        }
        this.contexto.fillText('0', this.centroX - 15, this.centroY + DESPLAZAMIENTO_NUMERO_DE_LA_MARCA);
    }
    dibujarMarcasEnEjeY() {
        const DESPLAZAMIENTO_MARCA_HACIA_IZQUIERDA = 20;
        const POSICION_X_NUMEROS = this.centroX - DESPLAZAMIENTO_MARCA_HACIA_IZQUIERDA;
        const DISTANCIA_MARCAS = this.escala * 2;
        for (let y = this.centroY - DISTANCIA_MARCAS; y >= 0; y -= DISTANCIA_MARCAS) {
            this.contexto.moveTo(this.centroX, y);
            this.contexto.lineTo(this.centroX - 5, y);
            this.contexto.fillText(((this.centroY - y) / this.escala).toString(), // Texto
            POSICION_X_NUMEROS, y // Posición
            );
            const POS_Y_NEGATIVOS = this.centroY + (this.centroY - y);
            this.contexto.moveTo(this.centroX, POS_Y_NEGATIVOS);
            this.contexto.lineTo(this.centroX - 5, POS_Y_NEGATIVOS);
            this.contexto.fillText(((this.centroY - POS_Y_NEGATIVOS) / this.escala).toString(), // Texto
            POSICION_X_NUMEROS, POS_Y_NEGATIVOS // Posición
            );
        }
    }
}
//# sourceMappingURL=esteticaCanvas.js.map