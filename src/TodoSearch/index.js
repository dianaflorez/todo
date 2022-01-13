import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch() {
  const { searchValue, setSearchValue} = React.useContext(TodoContext);
  // Lo pasamos al padre
  // const [searchValue, setSearchValue] = React.useState('');

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input 
    className="TodoSearch" 
    placeholder="Tomate"
    value={searchValue} 
    onChange = {onSearchValueChange}
    />
  );
}

export { TodoSearch };