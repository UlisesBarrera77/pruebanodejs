import React from 'react';

const Boton = ({ texto, color = 'blue', onClick }) => {
  const estilosBoton = {
    backgroundColor: color,
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <button style={estilosBoton} onClick={onClick}>
      {texto}
    </button>
  );
};

export default Boton;
