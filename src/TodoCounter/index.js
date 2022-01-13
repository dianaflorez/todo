import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

const estilos = {
  color: 'pink',
  backgroundColor: 'yellow'
}

//function TodoCounter(props) {
  function TodoCounter() {
    const {totalTodos, completedTodos} = React.useContext(TodoContext);
    return (
      <h2 style={estilos} className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
    );
}

export { TodoCounter };