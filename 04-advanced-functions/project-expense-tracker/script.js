// ===================================
// EXPENSE TRACKER - MODULE 04 PROJECT
// Demonstrates: Higher-Order Functions, Closures, Callbacks, Composition, Currying
// ===================================

// ===================================
// CLOSURE: Private State Management
// ===================================

const createExpenseManager = () => {
    // Private variables (closure!)
    let transactions = [];
    let nextId = 1;
    let listeners = [];

    // Private helper functions
    const notifyListeners = () => {
        listeners.forEach(callback => callback(transactions));
    };

    // Public API
    return {
        // Add transaction
        add(transaction) {
            const newTransaction = {
                ...transaction,
                id: nextId++,
                timestamp: Date.now()
            };
            transactions.push(newTransaction);
            notifyListeners();
            return newTransaction;
        },

        // Remove transaction
        remove(id) {
            transactions = transactions.filter(t => t.id !== id);
            notifyListeners();
        },

        // Get all transactions (return copy for immutability)
        getAll() {
            return [...transactions];
        },

        // Subscribe to changes (callback pattern!)
        onChange(callback) {
            listeners.push(callback);
        }
    };
};

// Create manager instance
const expenseManager = createExpenseManager();

// ===================================
// HIGHER-ORDER FUNCTIONS & CURRYING
// ===================================

// Curried filter functions
const filterBy = field => value => transaction =>
    transaction[field] === value;

const filterByType = filterBy('type');
const filterByCategory = filterBy('category');

// Curried sort functions
const sortBy = field => direction => (a, b) => {
    const aVal = a[field];
    const bVal = b[field];
    
    if (direction === 'asc') {
        return aVal > bVal ? 1 : aVal < bVal ? -1 : 0;
    } else {
        return aVal < bVal ? 1 : aVal > bVal ? -1 : 0;
    }
};

const sortByDate = sortBy('date');
const sortByAmount = sortBy('amount');

// Higher-order function: calculate total
const calculateTotal = type => transactions =>
    transactions
        .filter(t => !type || t.type === type)
        .reduce((sum, t) => sum + t.amount, 0);

const calculateIncome = calculateTotal('income');
const calculateExpenses = calculateTotal('expense');
const calculateBalance = transactions => 
    calculateIncome(transactions) - calculateExpenses(transactions);

// ===================================
// FUNCTION COMPOSITION
// ===================================

// Compose function (right to left)
const compose = (...fns) => value =>
    fns.reduceRight((acc, fn) => fn(acc), value);

// Pipe function (left to right, more intuitive)
const pipe = (...fns) => value =>
    fns.reduce((acc, fn) => fn(acc), value);

// Formatting functions for composition
const formatCurrency = amount =>
    `$${Math.abs(amount).toFixed(2)}`;

const formatDate = dateString => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
};

// ===================================
// APPLICATION STATE & FILTERS
// ===================================

let currentFilter = 'all';
let currentCategoryFilter = 'all';
let currentSort = { field: 'date', direction: 'desc' };

// ===================================
// DOM ELEMENTS
// ===================================

const elements = {
    form: document.getElementById('transactionForm'),
    type: document.getElementById('type'),
    category: document.getElementById('category'),
    amount: document.getElementById('amount'),
    description: document.getElementById('description'),
    date: document.getElementById('date'),
    
    balance: document.getElementById('balance'),
    income: document.getElementById('income'),
    expenses: document.getElementById('expenses'),
    
    transactionsList: document.getElementById('transactionsList'),
    emptyState: document.getElementById('emptyState'),
    transactionCount: document.getElementById('transactionCount'),
    
    filterBtns: document.querySelectorAll('.filter-btn'),
    sortBy: document.getElementById('sortBy'),
    categoryFilter: document.getElementById('categoryFilter'),
    
    statTotal: document.getElementById('statTotal'),
    statAverage: document.getElementById('statAverage'),
    statHighest: document.getElementById('statHighest'),
    statCategory: document.getElementById('statCategory'),
    
    incomeCategories: document.getElementById('incomeCategories'),
    expenseCategories: document.getElementById('expenseCategories')
};

// ===================================
// DATA PROCESSING PIPELINE
// ===================================

// Create processing pipeline using composition
const createTransactionPipeline = (typeFilter, categoryFilter, sortConfig) => {
    const filters = [];
    
    // Add type filter
    if (typeFilter !== 'all') {
        filters.push(transactions => transactions.filter(filterByType(typeFilter)));
    }
    
    // Add category filter
    if (categoryFilter !== 'all') {
        filters.push(transactions => transactions.filter(filterByCategory(categoryFilter)));
    }
    
    // Add sorting
    const sortFn = sortConfig.field === 'date' ? sortByDate : sortByAmount;
    filters.push(transactions => [...transactions].sort(sortFn(sortConfig.direction)));
    
    // Compose all filters
    return pipe(...filters);
};

// ===================================
// UI UPDATE FUNCTIONS
// ===================================

const updateBalance = () => {
    const transactions = expenseManager.getAll();
    const income = calculateIncome(transactions);
    const expenses = calculateExpenses(transactions);
    const balance = calculateBalance(transactions);
    
    elements.income.textContent = formatCurrency(income);
    elements.expenses.textContent = formatCurrency(expenses);
    elements.balance.textContent = formatCurrency(balance);
    
    // Color code balance
    elements.balance.style.color = balance >= 0 ? '#51cf66' : '#ff6b6b';
};

const updateStatistics = () => {
    const transactions = expenseManager.getAll();
    
    // Total transactions
    elements.statTotal.textContent = transactions.length;
    
    // Average transaction
    const average = transactions.length > 0
        ? transactions.reduce((sum, t) => sum + t.amount, 0) / transactions.length
        : 0;
    elements.statAverage.textContent = formatCurrency(average);
    
    // Highest expense
    const expenses = transactions.filter(t => t.type === 'expense');
    const highest = expenses.length > 0
        ? Math.max(...expenses.map(t => t.amount))
        : 0;
    elements.statHighest.textContent = formatCurrency(highest);
    
    // Most used category
    if (transactions.length > 0) {
        const categoryCounts = transactions.reduce((acc, t) => {
            acc[t.category] = (acc[t.category] || 0) + 1;
            return acc;
        }, {});
        
        const mostUsed = Object.entries(categoryCounts)
            .sort((a, b) => b[1] - a[1])[0];
        
        elements.statCategory.textContent = mostUsed[0];
    } else {
        elements.statCategory.textContent = '-';
    }
};

const createTransactionElement = transaction => {
    const div = document.createElement('div');
    div.className = `transaction-item ${transaction.type}`;
    div.dataset.id = transaction.id;
    
    div.innerHTML = `
        <div class="transaction-info">
            <div class="transaction-header">
                <span class="transaction-description">${transaction.description}</span>
                <span class="transaction-category">${transaction.category}</span>
            </div>
            <div class="transaction-details">
                <span class="transaction-date">📅 ${formatDate(transaction.date)}</span>
            </div>
        </div>
        <div class="transaction-actions">
            <span class="transaction-amount ${transaction.type}">
                ${formatCurrency(transaction.amount)}
            </span>
            <button class="btn-delete" onclick="deleteTransaction(${transaction.id})">
                ×
            </button>
        </div>
    `;
    
    return div;
};

const renderTransactions = () => {
    const allTransactions = expenseManager.getAll();
    
    // Apply filters and sorting using pipeline
    const pipeline = createTransactionPipeline(
        currentFilter,
        currentCategoryFilter,
        currentSort
    );
    
    const filtered = pipeline(allTransactions);
    
    // Clear list
    elements.transactionsList.innerHTML = '';
    
    // Show/hide empty state
    if (filtered.length === 0) {
        elements.emptyState.classList.remove('hidden');
        elements.transactionsList.style.display = 'none';
    } else {
        elements.emptyState.classList.add('hidden');
        elements.transactionsList.style.display = 'flex';
        
        // Render transactions (using map - higher-order function!)
        filtered
            .map(createTransactionElement)
            .forEach(element => elements.transactionsList.appendChild(element));
    }
    
    // Update count
    elements.transactionCount.textContent = `(${filtered.length})`;
    
    // Update balance and stats
    updateBalance();
    updateStatistics();
};

// ===================================
// EVENT HANDLERS (CALLBACKS!)
// ===================================

const handleSubmit = e => {
    e.preventDefault();
    
    // Get form data
    const transaction = {
        type: elements.type.value,
        category: elements.category.value,
        amount: parseFloat(elements.amount.value),
        description: elements.description.value,
        date: elements.date.value
    };
    
    // Validate
    if (!transaction.amount || transaction.amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }
    
    // Add transaction
    expenseManager.add(transaction);
    
    // Reset form
    elements.form.reset();
    setTodayDate();
    
    console.log('✅ Transaction added:', transaction);
};

const handleFilterChange = e => {
    if (e.target.classList.contains('filter-btn')) {
        // Update active state
        elements.filterBtns.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        
        // Update filter
        currentFilter = e.target.dataset.filter;
        renderTransactions();
        
        console.log('🔍 Filter changed to:', currentFilter);
    }
};

const handleSortChange = () => {
    const value = elements.sortBy.value;
    const [field, direction] = value.split('-');
    
    currentSort = { field, direction };
    renderTransactions();
    
    console.log('🔄 Sort changed to:', currentSort);
};

const handleCategoryFilterChange = () => {
    currentCategoryFilter = elements.categoryFilter.value;
    renderTransactions();
    
    console.log('📂 Category filter:', currentCategoryFilter);
};

const handleTypeChange = () => {
    const type = elements.type.value;
    
    // Show/hide category groups
    if (type === 'income') {
        elements.incomeCategories.style.display = 'block';
        elements.expenseCategories.style.display = 'none';
        elements.category.value = 'Salary';
    } else {
        elements.incomeCategories.style.display = 'none';
        elements.expenseCategories.style.display = 'block';
        elements.category.value = 'Food';
    }
};

// Delete transaction (global for onclick)
window.deleteTransaction = id => {
    if (confirm('Are you sure you want to delete this transaction?')) {
        expenseManager.remove(id);
        console.log('🗑️ Transaction deleted:', id);
    }
};

// ===================================
// INITIALIZATION
// ===================================

const setTodayDate = () => {
    const today = new Date().toISOString().split('T')[0];
    elements.date.value = today;
};

const populateCategoryFilter = () => {
    // Get unique categories
    const allCategories = [
        'Salary', 'Freelance', 'Investment', 'Other Income',
        'Food', 'Transport', 'Entertainment', 'Shopping',
        'Bills', 'Health', 'Education', 'Other'
    ];
    
    // Clear existing options except "All"
    elements.categoryFilter.innerHTML = '<option value="all">All Categories</option>';
    
    // Add category options
    allCategories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        elements.categoryFilter.appendChild(option);
    });
};

const init = () => {
    // Set today's date
    setTodayDate();
    
    // Populate category filter
    populateCategoryFilter();
    
    // Set initial category visibility
    handleTypeChange();
    
    // Subscribe to transaction changes (callback pattern!)
    expenseManager.onChange(renderTransactions);
    
    // Event listeners
    elements.form.addEventListener('submit', handleSubmit);
    elements.type.addEventListener('change', handleTypeChange);
    document.querySelector('.filters').addEventListener('click', handleFilterChange);
    elements.sortBy.addEventListener('change', handleSortChange);
    elements.categoryFilter.addEventListener('change', handleCategoryFilterChange);
    
    // Initial render
    renderTransactions();
    
    console.log('💰 Expense Tracker Loaded!');
    console.log('===================================');
    console.log('Module 04 Concepts Demonstrated:');
    console.log('  ✓ Higher-Order Functions (map, filter, reduce)');
    console.log('  ✓ Closures (private state in expenseManager)');
    console.log('  ✓ Callbacks (event handlers, onChange)');
    console.log('  ✓ Arrow Functions (throughout)');
    console.log('  ✓ Function Composition (pipe, compose)');
    console.log('  ✓ Currying (filterBy, sortBy)');
    console.log('===================================');
};

// Add some sample data for testing
const addSampleData = () => {
    const samples = [
        {
            type: 'income',
            category: 'Salary',
            amount: 5000,
            description: 'Monthly Salary',
            date: '2025-01-01'
        },
        {
            type: 'expense',
            category: 'Food',
            amount: 250,
            description: 'Groceries',
            date: '2025-01-05'
        },
        {
            type: 'expense',
            category: 'Transport',
            amount: 50,
            description: 'Gas',
            date: '2025-01-08'
        },
        {
            type: 'expense',
            category: 'Entertainment',
            amount: 120,
            description: 'Concert Tickets',
            date: '2025-01-10'
        },
        {
            type: 'income',
            category: 'Freelance',
            amount: 800,
            description: 'Website Project',
            date: '2025-01-15'
        }
    ];
    
    samples.forEach(sample => expenseManager.add(sample));
    console.log('📊 Sample data loaded!');
};

// Start app
init();

// Uncomment to load sample data:
// addSampleData();

// ===================================
// MODULE 04 CONCEPTS IN ACTION
// ===================================

/*
HIGHER-ORDER FUNCTIONS:
- map(): createTransactionElement for rendering
- filter(): filterByType, filterByCategory
- reduce(): calculateTotal, category counts
- sort(): sortBy with currying

CLOSURES:
- expenseManager: private transactions and nextId
- Private variables can't be accessed directly
- Only public methods can modify state

CALLBACKS:
- Event handlers (handleSubmit, handleFilterChange)
- onChange subscriber pattern
- notifyListeners calls all registered callbacks

ARROW FUNCTIONS:
- Concise syntax throughout
- Lexical 'this' binding
- Perfect for functional programming

FUNCTION COMPOSITION:
- pipe() chains operations left to right
- compose() chains operations right to left
- createTransactionPipeline combines filters

CURRYING:
- filterBy returns specialized filter functions
- sortBy returns specialized sort functions
- Enables partial application and reusability

This expense tracker is a complete demonstration of
everything learned in Module 04: Advanced Functions!
*/