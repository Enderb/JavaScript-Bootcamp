// Set up index.html to load the bundle
// Make sure to load uuid via an npm module when necessary

// --

// Add necessary imports
import { createTodo } from './todos'
import { setFilters } from './filters'
import { renderTodos } from './views'


// Render initial todos
renderTodos()

// Set up search text handler
document.querySelector('#filter').addEventListener('input', (e) => {
    setFilters({
        searchQuery: e.target.value
    }) 
    renderTodos()
 })

// Set up checkbox handler
document.querySelector('#hide-todos').addEventListener('change', (e) => {

    setFilters({
        hideCompleted: e.target.checked
    }) 
    renderTodos()
})

// Set up form submission handler
document.querySelector('#todo-form').addEventListener('submit', (e) => {
    e.preventDefault()
    const text = e.target.elements.newTodo.value.trim()
    if(text){
        createTodo(text)
        e.target.elements.newTodo.value = ''
        renderTodos()
    }
    
})

// Watcher for local storage
window.addEventListener('storage', (e) => {
    if (e.key === 'todos'){
        renderTodos()
    }
})