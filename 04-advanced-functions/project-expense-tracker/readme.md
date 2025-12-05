# Project 04: Expense Tracker 💰

## What You'll Build

A fully functional expense tracking application that can:
- ✅ Add expenses with category, amount, and description
- ✅ Track income and expenses separately
- ✅ Calculate total balance
- ✅ Filter expenses by category
- ✅ Sort expenses by date/amount
- ✅ Delete individual expenses
- ✅ View monthly statistics
- ✅ Beautiful, responsive design
- ✅ Data persistence using closures

---

## What You'll Learn

This project uses EVERYTHING from Module 04:
- ✅ **Higher-Order Functions** - map, filter, reduce for data processing
- ✅ **Callbacks** - Event handlers, custom callbacks
- ✅ **Closures** - Data privacy, state management
- ✅ **Arrow Functions** - Clean, concise syntax
- ✅ **Function Composition** - Data transformation pipelines
- ✅ **Currying** - Reusable filter/sort functions

---

## How It Works

### Data Structure:
```javascript
let expenses = [
    {
        id: 1,
        type: 'expense',  // or 'income'
        category: 'Food',
        amount: 50.00,
        description: 'Groceries',
        date: '2025-01-15'
    },
    // More transactions...
];
```

### User Flow:
1. Select transaction type (Income/Expense)
2. Choose category from dropdown
3. Enter amount and description
4. Click "Add Transaction"
5. View transaction in list
6. See updated balance/stats
7. Filter by category or type
8. Sort by date or amount
9. Delete unwanted transactions

---

## File Structure

```
project-expense-tracker/
├── index.html      ← App structure
├── style.css       ← Beautiful styling
├── script.js       ← Expense logic (using all Module 04 concepts!)
└── README.md       ← This file!
```

---

## Features Breakdown

### 1. Add Transaction
- Type selector (Income/Expense)
- Category dropdown
- Amount input (validated)
- Description input
- Date picker
- Add button

### 2. Transaction List
- All transactions displayed
- Color-coded (green=income, red=expense)
- Shows category, amount, description, date
- Delete button per transaction
- Empty state message

### 3. Balance Summary
- Total income (green)
- Total expenses (red)
- Current balance (color based on positive/negative)
- Update in real-time

### 4. Filtering
- Filter by transaction type (All/Income/Expense)
- Filter by category
- Combine multiple filters

### 5. Sorting
- Sort by date (newest/oldest)
- Sort by amount (highest/lowest)
- Toggle sort direction

### 6. Statistics
- Monthly spending by category
- Biggest expenses
- Average transaction amount
- Visual indicators

---

## Code Breakdown

### Module 04 Concepts Used

#### **Higher-Order Functions:**
```javascript
// Filter expenses
const filterByType = (type) => (transactions) => 
    transactions.filter(t => t.type === type);

// Map to format
const formatCurrency = (transactions) =>
    transactions.map(t => ({
        ...t,
        formattedAmount: `$${t.amount.toFixed(2)}`
    }));

// Reduce for totals
const calculateTotal = (transactions) =>
    transactions.reduce((sum, t) => sum + t.amount, 0);
```

#### **Closures:**
```javascript
// Create expense manager with private data
function createExpenseManager() {
    let expenses = [];  // Private!
    let nextId = 1;
    
    return {
        addExpense(data) {
            const expense = { ...data, id: nextId++ };
            expenses.push(expense);
            return expense;
        },
        
        getExpenses() {
            return [...expenses];  // Return copy
        },
        
        deleteExpense(id) {
            expenses = expenses.filter(e => e.id !== id);
        }
    };
}
```

#### **Callbacks:**
```javascript
// Custom event system
function onExpenseAdded(callback) {
    // Store callback
    // Call it when expense is added
}

onExpenseAdded((expense) => {
    updateUI(expense);
    updateStats();
});
```

#### **Function Composition:**
```javascript
// Compose data pipeline
const processExpenses = pipe(
    filterByType('expense'),
    filterByCategory(category),
    sortByDate('desc'),
    formatForDisplay
);

const result = processExpenses(allTransactions);
```

#### **Currying:**
```javascript
// Curried filter
const filterBy = field => value => transaction => 
    transaction[field] === value;

const filterByCategory = filterBy('category');
const filterFood = filterByCategory('Food');
```

---

## Testing Your Expense Tracker

### Test 1: Add Income
- Select "Income"
- Category: "Salary"
- Amount: 5000
- Click Add
- Should see green transaction ✅
- Balance should increase ✅

### Test 2: Add Expense
- Select "Expense"
- Category: "Food"
- Amount: 50
- Click Add
- Should see red transaction ✅
- Balance should decrease ✅

### Test 3: Balance Calculation
- Add income: $1000
- Add expense: $250
- Balance should show $750 ✅

### Test 4: Filter by Type
- Add mixed transactions
- Click "Expenses" filter
- Should show only expenses ✅

### Test 5: Filter by Category
- Add multiple categories
- Select "Food" category
- Should show only food transactions ✅

### Test 6: Sort by Amount
- Add various amounts
- Click "Sort by Amount"
- Should sort highest to lowest ✅

### Test 7: Delete Transaction
- Click delete button
- Transaction should disappear ✅
- Balance should update ✅

### Test 8: Statistics
- Add multiple transactions
- Check stats display
- Should show category breakdown ✅

---

## How to Run

1. Open `index.html` in browser
2. Start adding transactions!
3. Try all features
4. Check console for debug info

---

## Customization Ideas

Once it's working, try:
1. **Add charts** - Pie chart for categories
2. **Add date range** - Filter by date range
3. **Add recurring expenses** - Auto-add monthly bills
4. **Add budget limits** - Warn when over budget
5. **Add export** - Download as CSV/PDF
6. **Add tags** - Multiple tags per transaction
7. **Add search** - Search by description
8. **Add currency converter** - Multiple currencies
9. **Add goals** - Saving goals tracker
10. **Add localStorage** - Save data between sessions

---

## Common Issues & Fixes

### Issue 1: Balance not updating
**Check:** Are you calling `updateBalance()` after adding?
**Fix:** Call update function after every add/delete

### Issue 2: Filters not working
**Check:** Is the filter function being called?
**Fix:** Ensure `renderTransactions()` uses filtered data

### Issue 3: Sort direction reversed
**Check:** Compare function logic
**Fix:** For descending: `b - a`, ascending: `a - b`

### Issue 4: Delete not working
**Check:** Is ID being passed correctly?
**Fix:** Ensure delete button has correct data-id attribute

### Issue 5: Categories not showing
**Check:** Are categories in the data array?
**Fix:** Add all categories to dropdown

---

## What You Learned

By building this expense tracker, you practiced:
- ✅ **Higher-Order Functions** - Transforming and filtering data
- ✅ **Callbacks** - Handling user events and custom events
- ✅ **Closures** - Creating private state for data management
- ✅ **Arrow Functions** - Clean, concise function syntax
- ✅ **Composition** - Building complex operations from simple ones
- ✅ **Currying** - Creating specialized functions from general ones
- ✅ **Functional Programming** - Declarative data transformations
- ✅ **State Management** - Managing application state functionally

---

## Module 04 Concepts Demonstrated

### Higher-Order Functions:
```javascript
// Array methods as HOFs
transactions.map(formatTransaction)
transactions.filter(isExpense)
transactions.reduce(sumAmounts, 0)

// Custom HOFs
const createFilter = (predicate) => (array) => 
    array.filter(predicate);
```

### Closures:
```javascript
// Private data
function createManager() {
    let data = [];  // Private!
    return {
        add(item) { data.push(item); },
        getAll() { return [...data]; }
    };
}
```

### Callbacks:
```javascript
// Event handlers
button.addEventListener('click', () => addExpense());

// Custom callbacks
onUpdate((newData) => renderUI(newData));
```

### Composition:
```javascript
// Pipeline
const process = pipe(
    filterExpenses,
    sortByDate,
    formatCurrency
);
```

---

## Next Steps

After completing this expense tracker:
1. ✅ Test all features thoroughly
2. ✅ Add your own transactions
3. ✅ Try the customization ideas
4. ✅ Show it off to friends!
5. ✅ Move to Module 05: Async JavaScript

---

## Congratulations! 🎉

You just built a real expense tracker using advanced functional programming concepts!

This demonstrates you understand:
- How to work with higher-order functions
- How closures provide data privacy
- How to compose complex operations
- How to think functionally
- How to build maintainable applications

**This is a portfolio-worthy project!**

---

## 🎯 Bonus Challenges

### Challenge 1: Category Management
Add ability to:
- Create custom categories
- Edit category names
- Delete categories
- Category icons/colors

### Challenge 2: Data Export/Import
Add functionality to:
- Export transactions as JSON
- Import from JSON file
- Export as CSV for Excel
- Download PDF reports

### Challenge 3: Advanced Filters
Implement:
- Date range picker
- Amount range filter
- Multi-category filter
- Custom filter builder

### Challenge 4: Budgets
Create budget system:
- Set monthly budgets per category
- Show progress bars
- Alert when over budget
- Budget vs actual comparison

---

**Ready for Module 05?** We'll dive into Async JavaScript, Promises, and Async/Await!

**Keep building!** 💪