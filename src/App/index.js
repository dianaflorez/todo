import React from 'react';
import { AppUI } from './AppUI';

import { TodoProvider } from '../TodoContext';

// const defaultTodos = [
//   { text: 'Cortar tomate', completed: true },
//   { text: 'Tomar el cursso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: true },
//   { text: 'LALALALAA', completed: false },
// ];


function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;