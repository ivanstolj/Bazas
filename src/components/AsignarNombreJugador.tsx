import React, { useState, useEffect } from 'react';

interface AsignarNombreJugadorProps {
  playerNumber: number; // Número del jugador actual (1, 2, 3, etc.)
  onNext: (name: string) => void; // Función para pasar al siguiente jugador
}

const AsignarNombreJugador: React.FC<AsignarNombreJugadorProps> = ({ playerNumber, onNext }) => {
  const [name, setName] = useState('');
  
  // Vaciar el campo de texto después de asignar un nombre
  useEffect(() => {
    setName('');
  }, [playerNumber]);

  // Manejar la tecla "Enter"
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleNext();
    }
  };

  const handleNext = () => {
    if (name.trim() && name.length === 3) {
      onNext(name);
    }  
    else {
      alert('Por favor, ingresa un nombre válido y de 3 letras.');
    }
  };

  return (
    <div className="name-assignment">
      <h2>Jugador {playerNumber}</h2>
      <input
        type="text"
        placeholder="Nombre (3 letras)"
        value={name.toUpperCase()} // Convertir el nombre a mayúsculas 
        onChange={(e) => setName(e.target.value)}
        onKeyPress={handleKeyPress} // Escuchar la tecla "Enter"
        className="name-input"
      />
      <button className="next-button" onClick={handleNext}>
        Siguiente
      </button>
    </div>
  );
};

export default AsignarNombreJugador;