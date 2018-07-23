import { initializeEditPage, generateLastEdited } from './views'
import { updateNote, removeNote } from './notes'

const noteId = location.hash.substring(1)
const titleElement = document.querySelector('#note-title') 
const bodyElement = document.querySelector('#note-body')
const lastEditedElement = document.querySelector('#last-edited')
const removeElement = document.querySelector('#remove-note')

initializeEditPage(noteId)

titleElement.addEventListener('input', (e) => {
    const note = updateNote(noteId, {
        title: e.target.value,
    })
    lastEditedElement.textContent = generateLastEdited(note.lastUpdated)
})

bodyElement.addEventListener('input', (e) => {
    const note = updateNote(noteId, {
        body: e.target.value,
    })
    lastEditedElement.textContent = generateLastEdited(note.lastUpdated)
})

removeElement.addEventListener('click', () => {
    removeNote(noteId)
    location.assign('/index.html')
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        initializeEditPage(noteId)
    }
})