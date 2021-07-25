import React, { ChangeEvent } from 'react';

interface NewNoteInputProps {
    addNote(note: string): void; 
}

export const NewNoteInput = ({addNote}: NewNoteInputProps) => {

    const [note, setNote] = React.useState(''); 
    
    const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
        setNote(event.target.value);
    }

    const handleClick = () => {
        addNote(note);
        setNote("");
    }

    return (
      <div>
        <input value={note} onChange={updateNote} type="text" name="note" placeholder="note"/>
        <button onClick={handleClick} type="submit">Add note</button>
      </div>
    )
}