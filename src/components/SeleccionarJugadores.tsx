import React, { useState } from 'react';

interface SeleccionarJugadoresProps {
  onPlay: (players: number) => void;
}

const SeleccionarJugadores: React.FC<SeleccionarJugadoresProps> = ({ onPlay }) => {
  const [numberOfPlayers, setNumberOfPlayers] = useState(3);

  const handlePlayerChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setNumberOfPlayers(Number(event.target.value));
  };

  const handlePlayClick = () => {
    onPlay(numberOfPlayers);
  };

  return (
    <div className="player-selection">
      <h2>¿Cuántos jugadores?</h2>
      <div className="selector-container">
        <select
          className="player-selector"
          value={numberOfPlayers}
          onChange={handlePlayerChange}
          title="Número de jugadores"
        >
          {[3, 4, 5, 6, 7].map((num) => (
            <option key={num} value={num}>
              {num} jugadores
            </option>
          ))}
        </select>
      </div>
      <button className="play-button" onClick={handlePlayClick}>
        JUGAR
      </button>
    </div>
  );
};

export default SeleccionarJugadores;