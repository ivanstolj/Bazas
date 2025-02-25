import React from 'react';
import { Jugador } from '../types';

interface TablaProps {
  jugadores: Jugador[];
  onPedir: () => void;
  onCumplir: () => void;
  estadoJuego: 'pedir' | 'cumplir';
  manoActual: number;
}

const Tabla: React.FC<TablaProps> = ({ jugadores, onPedir, onCumplir, estadoJuego }) => {
  // Calcular el número máximo de manos jugadas
  const manosJugadas = jugadores.reduce((max, jugador) => {
    const manosConPuntos = jugador.manos.filter(mano => mano.puntosObtenidos !== 0).length;
    return Math.max(max, manosConPuntos);
  }, 0);

  // Calcular los totales de puntos por jugador
  const calcularTotales = (jugador: Jugador) => {
    return jugador.manos.reduce((total, mano) => total + mano.puntosObtenidos, 0);
  };

  return (
    <div className="tabla-container">
      <h2>Tabla de Puntuaciones</h2>
      <table className="tabla">
        {/* Fila de nombres de jugadores */}
        <thead>
          <tr>
            <th></th>{/* Celda vacía para la esquina superior izquierda */}
            {jugadores.map((jugador, index) => (
              <th key={index}>{jugador.nombre}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Filas de manos */}
          {Array.from({ length: manosJugadas }).map((_, manoIndex) => (
            <tr key={manoIndex}>
              <td>{manoIndex + 1}</td>
              {jugadores.map((jugador, jugadorIndex) => (
                <td key={jugadorIndex}>{jugador.manos[manoIndex].puntosObtenidos}</td>
              ))}
            </tr>
          ))}
          {/* Fila de totales */}
          <tr>
            <td>Total</td>
            {jugadores.map((jugador, index) => (
              <td key={index}>{calcularTotales(jugador)}</td>
            ))}
          </tr>
        </tbody>
      </table>

      {/* Botón para Pedir o Cumplir */}
      <button
        className="action-button"
        onClick={estadoJuego === 'pedir' ? onPedir : onCumplir}
      >
        {estadoJuego === 'pedir' ? 'Pedir' : 'Cumplir'}
      </button>
    </div>
  );
};

export default Tabla;