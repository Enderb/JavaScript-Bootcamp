const account = {
    name: 'Ender Barillas',
    expenses: [],
    income: [],
    addIncome: function(title, amount) {
        this.income.push({
            description: title,
            amount: amount
        })
    },
    addExpense: function(title, expense) {
        this.expenses.push({
            description: title,
            amount: expense
        })
    },
    getAccountSummary: function() {
        let totalExpense = 0
        this.expenses.forEach(element => {
            totalExpense += element.amount
        });
        let totalIncome = 0
        this.income.forEach(element => {
            totalIncome += element.amount
        });

        return `${this.name} has a balance of $${totalIncome - totalExpense}. $${totalIncome} in income. $${totalExpense} in expenses`
    }
}

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())

