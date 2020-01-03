import React, { useState, useEffect } from 'react'
import Notes from './Notes'
import Note from './Note'

export default function Crud() {
    const [notes, setNotes] = useState([])
    // const [form, setForm] = useState({ content: '' })

    // загрузка 
    const loadNotes = () => {
        console.log("Запрос отправляется...")
        fetch("http://localhost:7777/notes")
            .then(response => response.json())
            .then(data => console.log(data))
            .then(data => setNotes(data))
    }

    useEffect(() => {
        loadNotes()
    }, []);


    return (
        <div>
            <div>
                <h2>Notes</h2>
                <button type="button" onClick={loadNotes}>Update</button>
            </div>
            <div onLoad={loadNotes}>
                {/* {notes ? <Notes notes={notes} handleDelete={null} /> : null} */}
                {notes && notes.map(note => {
                                return <Note key={note.id} content={note.content} handleDelete={null}/>;
                        })}
            </div>
            <form onSubmit={null}>
                <textarea onChange={null}/>
                <button>Send</button>
            </form>
        </div>
    )


} 