import React, { useState, useEffect } from 'react';
import { Jugador } from '../types';

interface PedirProps {
  jugadores: Jugador[];
  manoActual: number;
  totalManos: number;
  onFinalizarPedido: (cartasPedidas: number[]) => void;
}

// Función para calcular la cantidad de cartas por mano
const calcularCartasPorMano = (manoActual: number, totalManos: number): number => {
  const mitad = Math.ceil(totalManos / 2);
  if (manoActual <= mitad) {
    return manoActual; // Aumenta hasta la mitad
  } else {
    return totalManos - manoActual + 1; // Disminuye después de la mitad
  }
};

const Pedir: React.FC<PedirProps> = ({ jugadores, manoActual, totalManos, onFinalizarPedido }) => {
  const [cartasPedidas, setCartasPedidas] = useState<number[]>(Array(jugadores.length).fill(0));
  const [jugadorActual, setJugadorActual] = useState(0);
  const [cartasPedidasAnteriores, setCartasPedidasAnteriores] = useState<{ nombre: string; cartas: number }[]>([]);

  // Calcular la cantidad máxima de cartas que se pueden pedir en esta mano
  const maxCartas = calcularCartasPorMano(manoActual, totalManos);

  // Calcular el orden de pedido
  const ordenPedido = (manoActual - 1) % jugadores.length;
  const jugadorIndex = (ordenPedido + jugadorActual) % jugadores.length;

  // Calcular la suma de las cartas pedidas hasta el momento
  const sumaCartasPedidas = cartasPedidas.reduce((a, b) => a + b, 0);

  // Determinar si es el último jugador
  const esUltimoJugador = jugadorActual === jugadores.length - 1;

  // Calcular las opciones disponibles para el último jugador
  let opcionesDisponibles: number[] = [];
  if (esUltimoJugador) {
    for (let i = 0; i <= maxCartas; i++) {
      const sumaTotal = sumaCartasPedidas + i;
      console.log(`sumaTotal: ${sumaTotal}, maxCartas: ${maxCartas}`);
      // El último jugador no puede elegir un número que haga que la suma total sea igual a la cantidad de cartas en la mano
      if (sumaTotal !== maxCartas) {
        opcionesDisponibles.push(i);
      }
    }
  } else {
    opcionesDisponibles = Array.from({ length: maxCartas + 1 }, (_, i) => i);
  }

  console.log('Opciones disponibles:', opcionesDisponibles);

  // Actualizar las cartas pedidas por los jugadores anteriores en el orden correcto
  useEffect(() => {
    const nuevasCartasPedidasAnteriores = [];
    for (let i = 0; i < jugadorActual; i++) {
      const jugadorIndexAnterior = (ordenPedido + i) % jugadores.length;
      nuevasCartasPedidasAnteriores.push({
        nombre: jugadores[jugadorIndexAnterior].nombre,
        cartas: cartasPedidas[jugadorIndexAnterior],
      });
    }
    setCartasPedidasAnteriores(nuevasCartasPedidasAnteriores);
  }, [cartasPedidas, jugadorActual, jugadores, ordenPedido]);

  const handlePedir = (cartas: number) => {
    const nuevasCartasPedidas = [...cartasPedidas];
    nuevasCartasPedidas[jugadorIndex] = cartas;
    setCartasPedidas(nuevasCartasPedidas);

    if (jugadorActual < jugadores.length - 1) {
      setJugadorActual(jugadorActual + 1);
    } else {
      onFinalizarPedido(nuevasCartasPedidas);
    }
  };

  return (
    <div className="pedir-container">
      <h2>Mano {manoActual}</h2>
      <p>{jugadores[jugadorIndex].nombre}, ¿cuántas cartas vas a pedir? (Máximo: {maxCartas})</p>

      {/* Mostrar las cartas pedidas por los jugadores anteriores en el orden correcto */}
      {jugadorActual > 0 && (
        <div className="cartas-pedidas">
          <h3>Cartas pedidas por los jugadores anteriores:</h3>
          <ul>
            {cartasPedidasAnteriores.map((jugador, index) => (
              <li key={index}>
                {jugador.nombre}: {jugador.cartas} carta(s)
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Opciones para pedir cartas */}
      <div className="opciones">
        {opcionesDisponibles.map((i) => (
          <button key={i} onClick={() => handlePedir(i)}>
            {i}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pedir;