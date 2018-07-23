import moment from 'moment'
import { sortNotes, getNotes } from './notes'
import { getFilters } from './filters'

// Generate DOM structure for a note
const generateNoteDOM = function (note) {
    const noteEl = document.createElement('a')
    const textEl = document.createElement('p')
    const statusEl = document.createElement('p')

    // Set up the note title text
    note.title.length > 0 ? textEl.textContent = note.title : textEl.textContent = 'Unnamed Note'

    textEl.classList.add('list-item__title')
    noteEl.appendChild(textEl)

    // Set up the link
    noteEl.setAttribute('href', `/edit.html#${note.id}`)
    noteEl.classList.add('list-item')

    // Set up the status messages
    statusEl.textContent = generateLastEdited(note.updatedAt)
    statusEl.classList.add('list-item__subtitle')
    noteEl.appendChild(statusEl)

    return noteEl
}

// Render the existing notes
const renderNotes = () => {
    const notesEl = document.querySelector('#notes')
    const filters = getFilters()
    const notes = sortNotes(filters.sortBy)
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    notesEl.innerHTML = ''

    if(filteredNotes.length > 0){
        filteredNotes.forEach((note) => {
            const noteEl = generateNoteDOM(note)
                notesEl.appendChild(noteEl)
            })
    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = 'No notes to show'
        emptyMessage.classList.add('empty-message')
        notesEl.appendChild(emptyMessage)
    }

    
}

// Generate the last edited message
const generateLastEdited = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`

// Initialize the edit page
const initializeEditPage = (noteId) => {
    const titleElement = document.querySelector('#note-title') 
    const bodyElement = document.querySelector('#note-body')
    const lastEditedElement = document.querySelector('#last-edited')

    const notes = getNotes()
    const note = notes.find((note) => note.id === noteId)

    if(!note){
        location.assign('/index.html')
    }

    titleElement.value = note.title
    bodyElement.value = note.body
    lastEditedElement.textContent = generateLastEdited(note.lastUpdated)
    }


export { generateNoteDOM, renderNotes, generateLastEdited, initializeEditPage }