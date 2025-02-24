export interface Mano {
    cartasPedidas: number;
    puntosObtenidos: number;
  }
  
  export interface Jugador {
    nombre: string;
    orden: number;
    puntuacionTotal: number;
    manos: Mano[];
  }