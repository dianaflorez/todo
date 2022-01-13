import React from 'react';
import './TodoCounter.css';

const estilos = {
  color: 'pink',
  backgroundColor: 'yellow'
}

//function TodoCounter(props) {
  function TodoCounter({total, completed}) {
  return (
    <h2 style={estilos} className="TodoCounter">Has completado {completed} de {total} TODOs</h2>
  );
}

export { TodoCounter };