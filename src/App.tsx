import React, { useState } from 'react';
import Inicio from './components/Inicio';
import SeleccionarJugadores from './components/SeleccionarJugadores';
import AsignarNombreJugador from './components/AsignarNombreJugador';
import Tabla from './components/Tabla';
import Pedir from './components/Pedir';
import Cumplio from './components/Cumplio';
import { Jugador } from './types';
import './App.css';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [assigningNames, setAssigningNames] = useState(false);
  const [numberOfPlayers, setNumberOfPlayers] = useState(3);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [playerNames, setPlayerNames] = useState<string[]>([]);
  const [jugadores, setJugadores] = useState<Jugador[]>([]);
  const [manosTotales, setManosTotales] = useState(0);
  const [showTabla, setShowTabla] = useState(false);
  const [estadoJuego, setEstadoJuego] = useState<'pedir' | 'cumplir'>('pedir');
  const [manoActual, setManoActual] = useState(1);
  const [cartasPedidas, setCartasPedidas] = useState<number[]>([]);
  const [showPedir, setShowPedir] = useState(false);
  const [showCumplio, setShowCumplio] = useState(false);

  const handleStart = () => {
    setGameStarted(true);
  };

  const handlePlay = (players: number) => {
    setNumberOfPlayers(players);
    setAssigningNames(true);

    // Calcular la cantidad de manos
    const manos = (Math.floor(52 / players)) * 2;
    setManosTotales(manos);
  };

  const handleNextPlayer = (name: string) => {
    const updatedNames = [...playerNames, name];
    setPlayerNames(updatedNames);

    if (currentPlayer < numberOfPlayers) {
      setCurrentPlayer((prev) => prev + 1);
    } else {
      // Todos los nombres han sido asignados
      const jugadoresInicializados = updatedNames.map((nombre, index) => ({
        nombre,
        orden: index + 1,
        puntuacionTotal: 0,
        manos: Array(manosTotales).fill({ cartasPedidas: 0, puntosObtenidos: 0 }),
      }));

      setJugadores(jugadoresInicializados);
      setAssigningNames(false);
      setShowTabla(true); // Mostrar la tabla
    }
  };

  const handlePedir = () => {
    setShowPedir(true); // Mostrar Pedir
    setShowTabla(false); // Ocultar Tabla
    setShowCumplio(false); // Ocultar Cumplio
  };

  const handleFinalizarPedido = (cartas: number[]) => {
    setCartasPedidas(cartas);
    setShowPedir(false); // Ocultar Pedir
    setShowCumplio(true); // Mostrar Cumplio
  };

  const handleCumplir = () => {
    setShowCumplio(true); // Mostrar Cumplio
    setShowTabla(false); // Ocultar Tabla
    setShowPedir(false); // Ocultar Pedir
  };

  const handleFinalizarCumplio = (puntos: number[]) => {
    const nuevosJugadores = jugadores.map((jugador, index) => ({
      ...jugador,
      manos: jugador.manos.map((mano, i) =>
        i === manoActual - 1 ? { ...mano, puntosObtenidos: puntos[index] } : mano
      ),
    }));

    setJugadores(nuevosJugadores);
    setShowCumplio(false); // Ocultar Cumplio
    setShowTabla(true); // Mostrar Tabla
    setManoActual(manoActual + 1); // Pasar a la siguiente mano

    if (manoActual < manosTotales) {
      setEstadoJuego('pedir'); // Cambiar a estado "pedir" para la siguiente mano
    } else {
      alert('¡Juego terminado!');
    }
  };

  return (
    <div className="mobile-container">
      {!gameStarted ? (
        <Inicio onStart={handleStart} />
      ) : assigningNames ? (
        <AsignarNombreJugador
          playerNumber={currentPlayer}
          onNext={handleNextPlayer}
        />
      ) : showPedir ? (
        <Pedir
          jugadores={jugadores}
          manoActual={manoActual}
          totalManos={manosTotales} // Pasar el total de manos
          onFinalizarPedido={handleFinalizarPedido}
        />
      ) : showCumplio ? (
        <Cumplio
          jugadores={jugadores}
          manoActual={manoActual}
          cartasPedidas={cartasPedidas}
          onFinalizarCumplio={handleFinalizarCumplio}
        />
      ) : showTabla ? (
        <Tabla
          jugadores={jugadores}
          onPedir={handlePedir}
          onCumplir={handleCumplir}
          estadoJuego={estadoJuego}
          manoActual={manoActual}
        />
      ) : (
        <SeleccionarJugadores onPlay={handlePlay} />
      )}
    </div>
  );
}

export default App;