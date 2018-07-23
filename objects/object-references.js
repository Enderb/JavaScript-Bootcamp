let myAccount = {
    name: 'Ender Barillas',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {

    account.expenses += amount
    //console.log(account)
}

let addIncome = function (account, amount) {
    account.income += amount
}

let resetAccount = function(account) {
    account.expenses = 0
    account.income = 0
}

let getAccountSummary = function(account) {
    let balance = account.income - account.expenses
    console.log(`Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`)
}

addIncome(myAccount, 50)
addExpense(myAccount, 70)
addExpense(myAccount, 60)
getAccountSummary(myAccount)
resetAccount(myAccount)
getAccountSummary(myAccount)
