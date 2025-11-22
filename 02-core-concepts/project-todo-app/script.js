// ===================================
// TODO LIST APP - MODULE 02 PROJECT
// ===================================

// DATA - Array of todo objects
let todos = [];
let currentFilter = 'all';
let nextId = 1;

// DOM ELEMENTS
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const emptyState = document.getElementById('emptyState');
const todoFooter = document.getElementById('todoFooter');
const activeCount = document.getElementById('activeCount');
const filterBtns = document.querySelectorAll('.filter-btn');
const clearCompletedBtn = document.getElementById('clearCompleted');

// ===================================
// FUNCTIONS
// ===================================

/**
 * Add new todo to the list
 */
function addTodo(text) {
    // Validate input (STRING METHODS!)
    text = text.trim();
    if (text.length === 0) {
        alert('Please enter a todo!');
        return;
    }

    // Create todo object (OBJECTS!)
    const newTodo = {
        id: nextId++,
        text: text,
        completed: false
    };

    // Add to array (ARRAYS!)
    todos.push(newTodo);

    // Clear input
    todoInput.value = '';
    todoInput.focus();

    // Update display
    renderTodos();
    
    console.log('✅ Added todo:', newTodo);
    console.log('Total todos:', todos.length);
}

/**
 * Delete todo by ID
 */
function deleteTodo(id) {
    // Filter out the todo (ARRAY METHODS!)
    todos = todos.filter(todo => todo.id !== id);
    
    // Update display
    renderTodos();
    
    console.log('🗑️ Deleted todo ID:', id);
    console.log('Remaining todos:', todos.length);
}

/**
 * Toggle todo completion status
 */
function toggleComplete(id) {
    // Find todo and toggle (LOOPS & OBJECTS!)
    for (let todo of todos) {
        if (todo.id === id) {
            todo.completed = !todo.completed;
            console.log(`✓ Toggled todo "${todo.text}":`, todo.completed);
            break;
        }
    }
    
    // Update display
    renderTodos();
}

/**
 * Clear all completed todos
 */
function clearCompleted() {
    // Filter out completed (ARRAY METHODS!)
    const beforeCount = todos.length;
    todos = todos.filter(todo => !todo.completed);
    const removedCount = beforeCount - todos.length;
    
    // Update display
    renderTodos();
    
    console.log(`🧹 Cleared ${removedCount} completed todo(s)`);
}

/**
 * Filter todos based on status
 */
function filterTodos(filter) {
    currentFilter = filter;
    renderTodos();
    
    // Update active filter button
    filterBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === filter) {
            btn.classList.add('active');                                                 
        }
    });
    
    console.log('🔍 Filter changed to:', filter);
}

/**
 * Get count of active (incomplete) todos
 */
function getActiveTodoCount() {
    // Filter and count (ARRAY METHODS!)
    return todos.filter(todo => !todo.completed).length;
}

/**
 * Get filtered todos based on current filter
 */
function getFilteredTodos() {
    // Return filtered array (ARRAY METHODS!)
    if (currentFilter === 'active') {
        return todos.filter(todo => !todo.completed);
    } else if (currentFilter === 'completed') {
        return todos.filter(todo => todo.completed);
    }
    return todos;  // 'all'
}

/**
 * Check if any completed todos exist
 */
function hasCompletedTodos() {
    return todos.some(todo => todo.completed);
}

/**
 * Render todos to the DOM
 */
function renderTodos() {
    // Get filtered todos (FUNCTIONS!)
    const filtered = getFilteredTodos();
    
    // Clear current list
    todoList.innerHTML = '';
    
    // Show/hide empty state
    if (filtered.length === 0) {
        emptyState.classList.remove('hidden');
        todoList.classList.add('hidden');
    } else {
        emptyState.classList.add('hidden');
        todoList.classList.remove('hidden');
        
        // Loop through todos and create HTML (LOOPS!)
        filtered.forEach(todo => {
            // Create list item
            const li = document.createElement('li');
            li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
            
            // Create checkbox
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'todo-checkbox';
            checkbox.checked = todo.completed;
            checkbox.addEventListener('change', () => toggleComplete(todo.id));
            
            // Create text span
            const span = document.createElement('span');
            span.className = 'todo-text';
            span.textContent = todo.text;
            
            // Create delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'todo-delete';
            deleteBtn.textContent = '×';
            deleteBtn.addEventListener('click', () => deleteTodo(todo.id));
            
            // Append to list item
            li.appendChild(checkbox);
            li.appendChild(span);
            li.appendChild(deleteBtn);
            
            // Add to list
            todoList.appendChild(li);
        });
    }
    
    // Update footer
    updateFooter();
}

/**
 * Update footer with counts and buttons
 */
function updateFooter() {
    const activeTotal = getActiveTodoCount();
    
    // Show/hide footer
    if (todos.length === 0) {
        todoFooter.classList.add('hidden');
    } else {
        todoFooter.classList.remove('hidden');
    }
    
    // Update active count
    activeCount.textContent = activeTotal;
    
    // Show/hide clear completed button
    if (hasCompletedTodos()) {
        clearCompletedBtn.classList.remove('hidden');
    } else {
        clearCompletedBtn.classList.add('hidden');
    }
}

// ===================================
// EVENT LISTENERS
// ===================================

// Add todo on button click
addBtn.addEventListener('click', () => {
    addTodo(todoInput.value);
});

// Add todo on Enter key
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo(todoInput.value);
    }
});

// Filter buttons
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterTodos(btn.dataset.filter);
    });
});

// Clear completed button
clearCompletedBtn.addEventListener('click', clearCompleted);

// ===================================
// INITIALIZATION
// ===================================

// Add some sample todos (remove this in production!)
const sampleTodos = [
    "Learn JavaScript arrays",
    "Master array methods",
    "Build todo list app",
    "Practice loops",
    "Understand objects"
];

// Uncomment to start with sample todos:
// sampleTodos.forEach(text => addTodo(text));

// Initial render
renderTodos();

// Focus input on load
todoInput.focus();

// ===================================
// CONSOLE LOGS (FOR LEARNING)
// ===================================

console.log("✅ Todo List App Loaded!");
console.log("===================================");
console.log("Try these in the console:");
console.log("  todos                  - View all todos");
console.log("  addTodo('Learn JS')    - Add a todo");
console.log("  toggleComplete(1)      - Toggle first todo");
console.log("  deleteTodo(1)          - Delete first todo");
console.log("  clearCompleted()       - Clear completed");
console.log("  filterTodos('active')  - Filter active");
console.log("===================================");

// ===================================
// MODULE 02 CONCEPTS DEMONSTRATED
// ===================================

/*
ARRAYS:
- todos = [] - Store all todos
- todos.push() - Add new todo
- todos.filter() - Remove/filter todos
- todos.forEach() - Display todos
- todos.some() - Check if any completed

OBJECTS:
- { id, text, completed } - Todo structure
- todo.completed = !todo.completed - Toggle property
- btn.dataset.filter - Access data attributes

STRINGS:
- text.trim() - Remove whitespace
- text.length - Validate not empty
- Template literals for messages

LOOPS:
- for...of - Iterate through todos
- forEach() - Process each todo
- Filter displays based on status

ARRAY METHODS:
- filter() - Get active/completed todos
- some() - Check if completed exist
- forEach() - Display each todo
- push() - Add new todo

This todo app demonstrates ALL Module 02 concepts!
*/
