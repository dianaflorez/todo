import React from 'react';
import { TodoContext  } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI() {
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

      <TodoContext.Consumer>
        { ({ 
          error, 
          loading, 
          searchedTodos, 
          completeTodo, 
          deleteTodo}) => (
          <TodoList>
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
          </TodoList>
        )
        }
      </TodoContext.Consumer>

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

      <CreateTodoButton />
    </React.Fragment>

  )
}

export { AppUI };