let gradeCalculator = function(studentScore, totalPossible){
    
    if(typeof studentScore !== 'number' && typeof totalPossible !== 'number'){
        throw Error('Please provide numbers only')
    }

    let percent = (studentScore / totalPossible) * 100
    let letter
    if (percent >= 90){
        letter = 'A'
    } else if (percent >= 80) {
        letter = 'B'
    } else if (percent >= 70) {
        letter = 'C'
    } else if (percent >= 60) {
        letter = 'D'
    } else {
        letter = 'F'
    }

    return `You got a ${letter} (${percent}%)!`
}
try {
    console.log(gradeCalculator(15,20))
} catch (e) {
    console.log(e.message)
}
