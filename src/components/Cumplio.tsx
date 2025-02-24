import React, { useState } from 'react';
import { Jugador } from '../types';

interface CumplioProps {
  jugadores: Jugador[];
  manoActual: number;
  cartasPedidas: number[];
  onFinalizarCumplio: (puntos: number[]) => void;
}

const Cumplio: React.FC<CumplioProps> = ({ jugadores, manoActual, cartasPedidas, onFinalizarCumplio }) => {
  const [jugadorActual, setJugadorActual] = useState(0);
  const [puntos, setPuntos] = useState<number[]>(Array(jugadores.length).fill(0));

  const handleCumplio = (cumplio: boolean) => {
    const nuevosPuntos = [...puntos];
    const cartas = cartasPedidas[jugadorActual];
    nuevosPuntos[jugadorActual] = cumplio ? 10 + cartas * cartas : -10;
    setPuntos(nuevosPuntos);

    if (jugadorActual < jugadores.length - 1) {
      setJugadorActual(jugadorActual + 1);
    } else {
      onFinalizarCumplio(nuevosPuntos);
    }
  };

  return (
    <div className="cumplio-container">
      <h2>Mano {manoActual}</h2>
      <p>{jugadores[jugadorActual].nombre}, ¿cumpliste con {cartasPedidas[jugadorActual]} cartas?</p>
      <div className="opciones">
        <button onClick={() => handleCumplio(true)}>Sí</button>
        <button onClick={() => handleCumplio(false)}>No</button>
      </div>
    </div>
  );
};

export default Cumplio;