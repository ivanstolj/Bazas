import React from 'react';

interface InicioProps {
  onStart: () => void;
}

const Inicio: React.FC<InicioProps> = ({ onStart }) => {
  return (
    <>
      <header className="header">
        <h1>Bazas</h1>
      </header>
      <div className="content">

        <button className="start-button" onClick={onStart}>
          EMPEZAR
        </button>
      </div>
    </>
  );
};

export default Inicio;