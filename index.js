const people = ["Amit", "Rahul", "Sanjay"];

const expenses = new Map(); 

function randomPayer(parties) {
    return people[Math.floor(Math.random() * people.length)];
}

for (let i = 1; i <= 10; i++) {
    const expense = new Map();
    const totalExpense = Math.floor(Math.random() * 1000) + 100; // random amt possible is 100 to 1000
    const payer = randomPayer(people);
    for (const party of people) {
        expense.set(party, totalExpense / people.length);
    }
    expenses.set(`Expense ${i}`, { payer, expense });
    // console.log(expense);
}

for (const [expenseName, { payer, expense }] of expenses) {
    console.log(`${expenseName} - Payer: ${payer}`,);
    for (const [party, share] of expense) {
        console.log(`  ${party}: ${share}`,);
    }
    console.log('\n');
}