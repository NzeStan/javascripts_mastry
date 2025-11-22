# Project 02: Todo List App ✅

## What You'll Build

A fully functional todo list application that can:
- ✅ Add new tasks
- ✅ Mark tasks as complete/incomplete
- ✅ Delete tasks
- ✅ Filter tasks (All/Active/Completed)
- ✅ Clear all completed tasks
- ✅ Count active tasks
- ✅ Beautiful, responsive design
- ✅ Stores todos in array of objects

---

## What You'll Learn

This project uses EVERYTHING from Module 02:
- ✅ Arrays (store list of todos)
- ✅ Array methods (map, filter, forEach)
- ✅ Objects (each todo is an object)
- ✅ String methods (trim input, etc.)
- ✅ Loops (display todos, count active)
- ✅ DOM manipulation
- ✅ Event listeners

---

## How It Works

### Data Structure:
```javascript
let todos = [
    { id: 1, text: "Learn JavaScript", completed: false },
    { id: 2, text: "Build calculator", completed: true },
    { id: 3, text: "Create todo app", completed: false }
];
```

### User Flow:
1. Type task in input field
2. Press Enter or click Add button
3. Task appears in list
4. Click checkbox to mark complete/incomplete
5. Click delete button to remove
6. Use filters to view different task sets
7. Clear all completed tasks at once

---

## File Structure

```
project-todo-app/
├── index.html      ← App structure
├── style.css       ← Beautiful styling
├── script.js       ← Todo logic
└── README.md       ← This file!
```

---

## Features Breakdown

### 1. Add Todo
- Input field for new task
- Add button or press Enter
- Validates not empty
- Clears input after adding
- Assigns unique ID to each todo

### 2. Display Todos
- Shows all todos in list
- Each todo has checkbox and delete button
- Completed todos have strike-through
- Empty state when no todos

### 3. Toggle Complete
- Click checkbox to mark done
- Updates todo object
- Visual feedback (strike-through)
- Updates active count

### 4. Delete Todo
- Click delete button (×)
- Removes from array
- Updates display
- Updates active count

### 5. Filter Todos
- All - Show everything
- Active - Show incomplete only
- Completed - Show completed only
- Highlights current filter

### 6. Clear Completed
- Button to remove all completed
- Only shows if completed exist
- Clears multiple at once

### 7. Active Count
- Shows number of active (incomplete) tasks
- Updates automatically
- Helps track progress

---

## Code Breakdown

### Key Arrays & Objects
```javascript
let todos = [];  // Array of todo objects
let currentFilter = 'all';  // Current filter state

// Each todo object:
{
    id: unique number,
    text: task description,
    completed: true/false
}
```

### Key Functions
```javascript
addTodo(text)          // Add new todo to array
deleteTodo(id)         // Remove todo from array
toggleComplete(id)     // Mark todo as done/undone
clearCompleted()       // Remove all completed
filterTodos(filter)    // Change view filter
renderTodos()          // Display todos in DOM
getActiveTodoCount()   // Count incomplete todos
```

### How Rendering Works
```javascript
function renderTodos() {
    // 1. Filter todos based on current filter
    let filtered = todos;
    if (currentFilter === 'active') {
        filtered = todos.filter(t => !t.completed);
    } else if (currentFilter === 'completed') {
        filtered = todos.filter(t => t.completed);
    }
    
    // 2. Clear existing display
    todoList.innerHTML = '';
    
    // 3. Loop through filtered todos
    filtered.forEach(todo => {
        // 4. Create HTML for each todo
        // 5. Add to display
    });
    
    // 6. Update active count
}
```

---

## Testing Your Todo App

### Test 1: Add Todo
- Type "Learn JavaScript"
- Click Add or press Enter
- Should appear in list ✅

### Test 2: Complete Todo
- Click checkbox on first todo
- Should get strike-through ✅
- Active count should decrease ✅

### Test 3: Delete Todo
- Click × button on todo
- Should disappear from list ✅

### Test 4: Multiple Todos
- Add 5 different todos
- Mark 2 as complete
- Active count should show 3 ✅

### Test 5: Filters
- Click "Active" filter
- Should show only incomplete ✅
- Click "Completed"
- Should show only complete ✅
- Click "All"
- Should show everything ✅

### Test 6: Clear Completed
- Mark some todos as complete
- Click "Clear Completed"
- Only completed ones removed ✅

### Test 7: Empty States
- Delete all todos
- Should show empty message ✅

### Test 8: Input Validation
- Try adding empty todo
- Should not add anything ✅
- Try adding whitespace only
- Should not add ✅

---

## How to Run

1. Open `index.html` in browser
2. Start adding todos!
3. Try all features
4. Check console (F12) for debug info

---

## Customization Ideas

Once it's working, try:
1. **Add priority levels** - High/Medium/Low
2. **Add due dates** - Calendar picker
3. **Add categories** - Work/Personal/Shopping
4. **Add search** - Filter by text
5. **Add edit** - Double-click to edit text
6. **Add local storage** - Save across sessions
7. **Add drag & drop** - Reorder todos
8. **Add animations** - Smooth transitions

---

## Common Issues & Fixes

### Issue 1: Todos not appearing
**Check:** Is `renderTodos()` being called after adding?
**Fix:** Call `renderTodos()` at end of `addTodo()`

### Issue 2: Can't delete todos
**Check:** Are click events attached to delete buttons?
**Fix:** Use event delegation on parent element

### Issue 3: Filter not working
**Check:** Is `currentFilter` being updated?
**Fix:** Set `currentFilter` in `filterTodos()` function

### Issue 4: Active count wrong
**Check:** Is `getActiveTodoCount()` filtering correctly?
**Fix:** Count only todos where `completed === false`

---

## What You Learned

By building this todo app, you practiced:
- ✅ Arrays - Storing and manipulating todo list
- ✅ Objects - Each todo is an object with properties
- ✅ Array Methods - filter, map, forEach, find
- ✅ Loops - Display todos, count active
- ✅ String Methods - Trim input, validate
- ✅ Functions - Organize code into reusable pieces
- ✅ DOM Manipulation - Create and update elements
- ✅ Event Handling - Respond to user actions
- ✅ Conditional Logic - Filter, validate, update

---

## Module 02 Concepts Used

### Arrays & Methods:
```javascript
todos.push(newTodo);              // Add todo
todos = todos.filter(t => t.id !== id);  // Delete todo
todos.filter(t => !t.completed);  // Get active
todos.forEach(todo => { });       // Display each
```

### Objects:
```javascript
{ id: 1, text: "Task", completed: false }  // Todo object
todo.completed = !todo.completed;          // Toggle
```

### Strings:
```javascript
input.trim();                     // Clean input
input.length > 0;                // Validate
```

### Loops:
```javascript
for (let todo of todos) { }      // Loop todos
todos.forEach(todo => { });      // Process each
```

---

## Next Steps

After completing this todo app:
1. ✅ Test all features thoroughly
2. ✅ Try the customization ideas
3. ✅ Show it to friends and family!
4. ✅ Move to Module 03: DOM Manipulation

---

## Congratulations! 🎉

You just built a real, useful application! Todo apps are fundamental - you'll see them in many interview questions!

You now understand:
- How to work with arrays of objects
- How to filter and display data
- How to handle user input
- How to build interactive UIs

**Keep building!** 💪

---

**Ready for Module 03?** We'll dive deeper into DOM manipulation and build an interactive quiz game!
