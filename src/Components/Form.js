import React from "react";

const Form = ({inputText, setInputText, notes, setNotes, setStatus}) => {
  const inputTextHandler = ( e ) =>{
    setInputText(e.target.value);
  }
  const submitTodoHandler = ( e ) =>{
    //THIS FUNCTION PREVENT REACT FROM REFRESHING THE PAGE EACH TIME WE CLICLK SUBMIT
    e.preventDefault();
    //THIS FUNCTION UPDATES THE VALUE OF THE NOTE AND SEND IT BACK FOR US TO RETRIEVE DATA
    setNotes([
      ...notes,{
        id: Math.random() *1000,
        text: inputText,
        completed: false
        
      }
    ]);
    //THIS SET THE STATE BACK TO 0
    setInputText("");


  }
  const statusHandler=(e)=>{
    setStatus(e.target.value);
  }
  return (
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="notes" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};
export default Form;
