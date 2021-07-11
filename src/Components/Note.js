import React from "react";

const Note =({text,note, notes, setNotes})=>{
    //Events
    const deleteHandler=()=> {
        setNotes(notes.filter((el) =>el.id !== note.id));
    }
    const completeHandler=()=> {
        setNotes(notes.map((item)=>{
            if(item.id === note.id){
                return{
                    ...item,completed: !item.completed
                }
                
            }
            return item;
        }));
    }
    return(
        <div className="todo">
            <li className={`todo-item ${note.completed ? 'completed' : ''}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}
export default Note;