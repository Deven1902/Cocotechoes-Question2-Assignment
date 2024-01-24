// Question 2

// expense split problem 

// Detailed problem explanation:- Split the expenses amongst multiple people - each expense will have one payer,
// and each expense will be equally shared amongst all parties. Different expenses can have different
// numbers of parties. For example “Tea and Snacks Expense” shared among parties Amit,
// Rahul, and Sanjay. Please note you need to create a list of say 10 expenses with the title “Expense 1”, 
// “Expense 2” etc. And randomly select one of the parties as a payer

// Hint: Use a map within a map. 

// var res; 

// const expenses = new Map([
//     ["Expense 1", new Map([["A", 100], ["B", 200], ["C", 300]])],
//     ["Expense 2", new Map([["D", 100], ["E", 200], ["F", 300]])],
    // ["Expense 3", new Map([["Amit", 100], ["Rahul", 200], ["Sanjay", 300]])],
    // ["Expense 4", new Map([["Amit", 100], ["Rahul", 200], ["Sanjay", 300]])],
    // ["Expense 5", new Map([["Amit", 100], ["Rahul", 200], ["Sanjay", 300]])],
    // ["Expense 6", new Map([["Amit", 100], ["Rahul", 200], ["Sanjay", 300]])],
    // ["Expense 7", new Map([["Amit", 100], ["Rahul", 200], ["Sanjay", 300]])],
    // ["Expense 8", new Map([["Amit", 100], ["Rahul", 200], ["Sanjay", 300]])],
    // ["Expense 9", new Map([["Amit", 100], ["Rahul", 200], ["Sanjay", 300]])],
    // ["Expense 10", new Map([["Amit", 100], ["Rahul", 200], ["Sanjay", 300]])
])
// function Split(amt, people) {
//     amt = 500; 
//     people =3;

//     res = amt/people;

    
    
//     return res; 
// }

// console.log(Split());  







// const parties = ["Amit", "Rahul", "Sanjay"];

// function getRandomPayer(parties) {
//     return parties[Math.floor(Math.random() * parties.length)];
// }

// const expenses = new Map();
// for (let i = 1; i <= 10; i++) {
//     const expense = new Map();
//     const totalExpense = Math.floor(Math.random() * 1000) + 100; // Random expense between 100 and 1000
//     const payer = getRandomPayer(parties);
//     for (const party of parties) {
//         expense.set(party, totalExpense / parties.length);
//     }
//     expenses.set(`Expense ${i}`, { payer, expense });
// }

// for (const [expenseName, { payer, expense }] of expenses) {
//     console.log(`${expenseName} - Payer: ${payer}`);
//     for (const [party, share] of expense) {
//         console.log(`  ${party}: ${share}`);
//     }
// }