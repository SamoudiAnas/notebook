import React from 'react';
import Note from './Note';
const Notes =({filteredNotes, notes, setNotes})=>{
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredNotes.map(note =>(
                    <Note
                        text={note.text}
                        key={note.id}
                        note={note}
                        notes={notes}
                        setNotes={setNotes}
                        />
                ))}
            </ul>
        </div>
    );
}
export default Notes;