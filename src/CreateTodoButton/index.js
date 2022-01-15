import React from 'react';
import './CreateTodoButton.css';



function CreateTodoButton(props) {
  const onClickButton = (msg) => {
    //alert(msg);
    
    // props.setOpenModal(true);
    props.setOpenModal(prevState => !prevState);

  };

  return (
    <button 
    className="CreateTodoButton"
    //onClick={ () => onClickButton('Aqui deberia abrir modal') }
    onClick={ onClickButton }
    >+</button>
  );
}

export { CreateTodoButton };