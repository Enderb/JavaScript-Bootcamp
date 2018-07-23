import { getTodos, saveTodos } from './todos'
import { getFilters } from './filters'

// renderTodos
// Arguments: none
// Return value: none
const renderTodos = () => {
    const todos = getTodos()
    const filters = getFilters()
    
    const filteredTodos = todos.filter((todo) => {
        return filters.hideCompleted ? (todo.text.toLowerCase().includes(filters.searchQuery.toLowerCase()) & !todo.completed) : todo.text.toLowerCase().includes(filters.searchQuery.toLowerCase())
    })

    const todosEl = document.querySelector('#todos')

    todosEl.innerHTML = ''

    if(filteredTodos.length === 0){
        const noneEl = document.createElement('p')
        noneEl.classList.add('empty-message')
        noneEl.textContent = 'There are no to-dos to show'
        todosEl.appendChild(noneEl)
    } else {
        let leftNumber = 0
    
        filteredTodos.forEach(function (todo) {
            if(!todo.completed){
                leftNumber++
            }
        })
    
        todosEl.appendChild(generateSummaryDOM(leftNumber))

        filteredTodos.forEach((todo) => {
            todosEl.appendChild(generateTodoDOM(todo))
        })
    }

}

// generateTodoDOM
// Arguments: todo
// Return value: the todo element
const generateTodoDOM = (todo) => {
    const filteredTodoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const checkboxEl = document.createElement('input')
    const textEl = document.createElement('span')
    const deleteEl = document.createElement('button')

    //Set up checkbox
    checkboxEl.setAttribute('type', 'checkbox')
    containerEl.appendChild(checkboxEl)
    // Check if already completed
    if (todo.completed){
        checkboxEl.checked = true
    }
    checkboxEl.addEventListener('change', () => {
        todo.completed = checkboxEl.checked
        saveTodos()
        renderTodos()
    })

    //Set up text element
    textEl.textContent = todo.text
    containerEl.appendChild(textEl)

    // Set up container
    filteredTodoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    filteredTodoEl.appendChild(containerEl)

    //Set up delete button
    deleteEl.textContent = 'remove'
    deleteEl.classList.add('button', 'button--text')
    filteredTodoEl.appendChild(deleteEl)

    deleteEl.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodos()
        renderTodos()
    })

   

    return filteredTodoEl
}

// generateSummaryDOM
// Arguments: incompletedTodos
// Return value: the summary element
const generateSummaryDOM = (leftNumber) => {
    const left = document.createElement('h2')
    left.classList.add('list-title')
    left.textContent = `You have ${leftNumber} todo${leftNumber !== 1 ? 's' : ''} left`
    return left
}

// Make sure to set up the exports
export { renderTodos, generateTodoDOM, generateSummaryDOM }