const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
},{
    title: 'Habits to work on',
    body: 'Exercise'
},{
    title: 'Office modification',
    body: 'Get a new seat'
}]

/* console.log(notes.pop())
notes.push('My new note')

console.log(notes.shift())
notes.unshift('My first note') */

//notes.splice(1,1, 'This is the new second item')

// notes[2] = 'This is the new note 3'

// notes.forEach(function(item, index) {
//     //console.log(index)
//     console.log(item)
// })

/* console.log(notes.length)
console.log(notes)

const index = notes.findIndex(function (note, index) {
    console.log(note)
    return note.title === 'Habits to work on'
})

console.log(index) */

/* const findNote = function (notes, noteTitle) {
    const index = notes.findIndex(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
    return notes[index]
} */

const findNote = function (notes, noteTitle) {
    const note = notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
    return note
}

const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if(a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}
sortNotes(notes)

/* console.log(findNotes(notes, 'ne'))

const note = findNote (notes, 'some Office modification') */
console.log(notes)