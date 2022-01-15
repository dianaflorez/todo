import React from 'react';
import { TodoContext  } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

import { TodoError } from '../TodoError';
import { TodoLoading } from '../TodoLoading';
import { EmptyTodos } from '../EmptyTodos';

function AppUI() {
  const { 
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
  }  = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter
        // YA NO SE NECESITAN POR EL TODOCONTEXT 
        // total={totalTodos}
        // completed={completedTodos}
      />
      <TodoSearch
        // searchValue={searchValue}
        // setSearchValue={setSearchValue}
      />

      
      <TodoList>
        {error && <TodoError error= { error } />}
        {loading && <TodoLoading />}
        {(!loading && !searchedTodos.length) && <EmptyTodos />}
        {searchedTodos.map(todo => (
          <TodoItem
            key = {todo.text}
            text = {todo.text}
            completed = {todo.completed}
            onComplete = {() => completeTodo(todo.text)}
            onDelete = {() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
    
      {!!openModal  && (
        <Modal>
          <TodoForm />
        </Modal>
      )
      }
      

      {/* <TodoList>
        {error && <p>Desespera</p>}
        {loading && <p>Estamos cargando...</p>}
        {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO</p>}
        {searchedTodos.map(todo => (
          <TodoItem
            key = {todo.text}
            text = {todo.text}
            completed = {todo.completed}
            onComplete = {() => completeTodo(todo.text)}
            onDelete = {() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList> */}

      <CreateTodoButton 
        setOpenModal = { setOpenModal }
      />
    </React.Fragment>

  )
}

export { AppUI };