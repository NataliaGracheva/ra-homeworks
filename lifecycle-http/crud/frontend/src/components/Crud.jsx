import React, { Component } from 'react'
import Note from './Note'

export default class Crud extends Component {
    state = {
        notes: [],
        currentNote: '',
    }

    loadNotes = () => {
        console.log("Заметки загружаются...")
        fetch("http://localhost:7777/notes")
            .then(res => res.json())
            .then(notes => {
                console.log(notes)
                this.setState({
                    notes: notes
                })
            })
    }

    componentDidMount() {
        this.loadNotes();
    }

    onChange = (event) => {
        console.log("Ввод новой заметки...")
        const value = event.target.value;
        this.setState({currentNote: value});
    }

    sendNote = (e) => {
        console.log("Отправка новой заметки...")
        e.preventDefault();
        fetch('http://localhost:7777/notes', {
            headers: {  
                "Content-type": "application/x-www-form-urlencoded"  
            }, 
            method: 'POST',
            body: `content=${this.state.currentNote}`
           
        })
            .then(res => this.loadNotes())
            .then(() => {
                this.setState({ currentNote: '' });
            });
    }

    deleteNote = (id) => () => {
        console.log("Удаление заметки...")
        fetch(`http://localhost:7777/notes/${id}`, {
            method: 'DELETE',
        })
            .then(res => this.loadNotes())
    }

    render() {
        const {notes, currentNote} = this.state;
        return (
            <div className="container">
                <div>
                    <h2>Notes</h2>
                    <button type="button" onClick={this.loadNotes}>Update</button>
                </div>
                <div>
                    {notes && notes.map(note => {
                        return <Note key={note.id} content={note.content} handleDelete={this.deleteNote(note.id)} />;
                    })}
                </div>
                <form onSubmit={this.sendNote}>
                    <textarea value={currentNote} onChange={this.onChange} rows="5" cols="50" />
                    <button className="send-btn">Send</button>
                </form>
            </div>
        )
    }


} 