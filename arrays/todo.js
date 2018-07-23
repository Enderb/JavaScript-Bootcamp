const todos = [{
    text: 'Order cat food',
    completed: true
}, {
    text: 'Clean kitchen',
    completed: false
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]

const deleteTodo = function(todos, text) {
    const index = todos.findIndex(function(todo,index) {
        return todo.text.toLowerCase() === text.toLowerCase()
    })

    if(index > -1){
        todos.splice(index,1)
    }
}

const getThingsTodo = function(todos) {
    return todos.filter(function(todo, index) {
        return !todo.completed
    })
}

//console.log(getThingsTodo(todos))

const sortTodos = function(todos) {
    todos.sort(function(a, b) {
        if(!a.completed && b.completed){
            return -1
        } else if (a.completed && !b.completed) {
            return 1
        } else {
            return 0
        }
    })
}

sortTodos(todos)
console.log(todos)

/* deleteTodo(todos, 'buy food')
console.log(todos) */