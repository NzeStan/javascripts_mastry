# Module 03 - Lesson 3: Event Handling

## What Are Events?

Events are **actions or occurrences** that happen in the browser that your JavaScript can respond to!

**Common events:**
- User clicks a button → `click` event
- User types in input → `input` event
- Page finishes loading → `load` event
- Mouse hovers over element → `mouseover` event

Think of events like notifications: "Hey JavaScript, the user just clicked this button!"

---

## addEventListener() - The Modern Way

**Best practice for adding event listeners!**

### Basic Syntax

```javascript
element.addEventListener('eventType', function() {
    // Code to run when event happens
});
```

### Click Event Example

```html
<button id="myBtn">Click Me!</button>

<script>
    let btn = document.getElementById('myBtn');
    
    btn.addEventListener('click', function() {
        alert('Button clicked!');
    });
</script>
```

### Why addEventListener() is Best

```javascript
let btn = document.getElementById('myBtn');

// ✅ GOOD - Can add multiple listeners
btn.addEventListener('click', function() {
    console.log('First listener');
});

btn.addEventListener('click', function() {
    console.log('Second listener');
});
// Both run!

// ❌ BAD - Second one overwrites first
btn.onclick = function() {
    console.log('First');
};

btn.onclick = function() {
    console.log('Second');
};
// Only second runs!
```

---

## Common Mouse Events

### click - Single Click

```html
<button id="btn">Click Me</button>

<script>
    let btn = document.getElementById('btn');
    
    btn.addEventListener('click', function() {
        console.log('Clicked!');
    });
</script>
```

### dblclick - Double Click

```html
<div id="box">Double-click me!</div>

<script>
    let box = document.getElementById('box');
    
    box.addEventListener('dblclick', function() {
        console.log('Double-clicked!');
    });
</script>
```

### mouseover & mouseout - Hover

```html
<div id="box" style="width:200px; height:200px; background:lightblue;">
    Hover me!
</div>

<script>
    let box = document.getElementById('box');
    
    // Mouse enters element
    box.addEventListener('mouseover', function() {
        this.style.background = 'lightgreen';
    });
    
    // Mouse leaves element
    box.addEventListener('mouseout', function() {
        this.style.background = 'lightblue';
    });
</script>
```

### mouseenter & mouseleave - Similar to mouseover/mouseout

```javascript
// mouseenter: Doesn't bubble (better for most cases)
box.addEventListener('mouseenter', function() {
    console.log('Mouse entered');
});

// mouseleave: Doesn't bubble
box.addEventListener('mouseleave', function() {
    console.log('Mouse left');
});
```

### mousemove - Mouse Moving

```html
<div id="tracker" style="width:300px; height:300px; border:1px solid;">
    Move mouse here
</div>
<p id="coords"></p>

<script>
    let tracker = document.getElementById('tracker');
    let coords = document.getElementById('coords');
    
    tracker.addEventListener('mousemove', function(e) {
        coords.textContent = `X: ${e.offsetX}, Y: ${e.offsetY}`;
    });
</script>
```

### mousedown & mouseup - Mouse Button

```javascript
let box = document.getElementById('box');

// Button pressed
box.addEventListener('mousedown', function() {
    console.log('Mouse button down');
});

// Button released
box.addEventListener('mouseup', function() {
    console.log('Mouse button up');
});
```

---

## Common Keyboard Events

### keydown - Key Pressed

```html
<input type="text" id="input" placeholder="Type something">

<script>
    let input = document.getElementById('input');
    
    input.addEventListener('keydown', function(e) {
        console.log('Key pressed:', e.key);
    });
</script>
```

### keyup - Key Released

```javascript
input.addEventListener('keyup', function(e) {
    console.log('Key released:', e.key);
});
```

### keypress - Key Pressed (Character Keys Only)

**⚠️ Deprecated! Use keydown instead**

```javascript
// OLD - Don't use
input.addEventListener('keypress', function(e) {
    console.log(e.key);
});

// NEW - Use keydown
input.addEventListener('keydown', function(e) {
    console.log(e.key);
});
```

### Detecting Specific Keys

```javascript
input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        console.log('Enter key pressed!');
    }
    
    if (e.key === 'Escape') {
        console.log('Escape key pressed!');
    }
    
    if (e.key === 'ArrowUp') {
        console.log('Up arrow pressed!');
    }
    
    // Check for Ctrl/Cmd key combinations
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();  // Prevent browser save
        console.log('Ctrl+S pressed!');
    }
});
```

---

## Form Events

### submit - Form Submission

```html
<form id="myForm">
    <input type="text" name="username" required>
    <button type="submit">Submit</button>
</form>

<script>
    let form = document.getElementById('myForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();  // Prevent page reload!
        
        let username = form.username.value;
        console.log('Submitted:', username);
    });
</script>
```

### input - Input Value Changes

```html
<input type="text" id="search" placeholder="Search">
<p id="output"></p>

<script>
    let search = document.getElementById('search');
    let output = document.getElementById('output');
    
    search.addEventListener('input', function() {
        output.textContent = `You typed: ${this.value}`;
    });
</script>
```

### change - Input Loses Focus with Changed Value

```html
<select id="country">
    <option>USA</option>
    <option>UK</option>
    <option>Canada</option>
</select>

<script>
    let select = document.getElementById('country');
    
    select.addEventListener('change', function() {
        console.log('Selected:', this.value);
    });
</script>
```

### focus & blur - Input Focus

```html
<input type="text" id="email" placeholder="Email">

<script>
    let email = document.getElementById('email');
    
    // Input gains focus
    email.addEventListener('focus', function() {
        this.style.background = 'lightyellow';
    });
    
    // Input loses focus
    email.addEventListener('blur', function() {
        this.style.background = 'white';
    });
</script>
```

---

## Window/Document Events

### DOMContentLoaded - DOM Ready

```javascript
// Wait for DOM to load before running code
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM is ready!');
    
    // Safe to access elements now
    let btn = document.getElementById('myBtn');
});
```

### load - Everything Loaded (Images, CSS, etc.)

```javascript
window.addEventListener('load', function() {
    console.log('Page fully loaded!');
});
```

### resize - Window Resized

```javascript
window.addEventListener('resize', function() {
    console.log('Width:', window.innerWidth);
    console.log('Height:', window.innerHeight);
});
```

### scroll - Page Scrolled

```javascript
window.addEventListener('scroll', function() {
    let scrollY = window.scrollY;
    console.log('Scrolled to:', scrollY);
});
```

---

## The Event Object

Every event handler receives an **event object** with information about the event!

```javascript
element.addEventListener('click', function(e) {
    // 'e' is the event object
    console.log(e);
});
```

### Important Event Properties

```javascript
btn.addEventListener('click', function(e) {
    // Event type
    console.log(e.type);  // "click"
    
    // Target element (what was clicked)
    console.log(e.target);
    
    // Current element (element with listener)
    console.log(e.currentTarget);
    
    // Mouse position
    console.log(e.clientX, e.clientY);  // Relative to viewport
    console.log(e.pageX, e.pageY);      // Relative to page
    
    // Keyboard modifiers
    console.log(e.ctrlKey);   // Was Ctrl key pressed?
    console.log(e.shiftKey);  // Was Shift key pressed?
    console.log(e.altKey);    // Was Alt key pressed?
    
    // Timestamp
    console.log(e.timeStamp);
});
```

### Keyboard Event Properties

```javascript
input.addEventListener('keydown', function(e) {
    console.log('Key:', e.key);           // "a", "Enter", "ArrowUp"
    console.log('Code:', e.code);         // "KeyA", "Enter", "ArrowUp"
    console.log('Key Code:', e.keyCode);  // 65 (deprecated)
    
    // Modifiers
    console.log('Ctrl:', e.ctrlKey);
    console.log('Shift:', e.shiftKey);
    console.log('Alt:', e.altKey);
});
```

---

## Event Methods

### preventDefault() - Stop Default Behavior

```html
<a href="https://example.com" id="link">Link</a>

<script>
    let link = document.getElementById('link');
    
    link.addEventListener('click', function(e) {
        e.preventDefault();  // Don't follow link
        console.log('Link clicked but not followed!');
    });
</script>
```

**Common uses:**
- Prevent form submission
- Prevent link navigation
- Prevent context menu
- Prevent default drag behavior

### stopPropagation() - Stop Event Bubbling

```html
<div id="parent" style="padding:50px; background:lightblue;">
    Parent
    <button id="child">Child</button>
</div>

<script>
    let parent = document.getElementById('parent');
    let child = document.getElementById('child');
    
    parent.addEventListener('click', function() {
        console.log('Parent clicked');
    });
    
    child.addEventListener('click', function(e) {
        e.stopPropagation();  // Stop event from reaching parent
        console.log('Child clicked');
    });
    
    // Click child: Only "Child clicked" logs
    // Click parent: "Parent clicked" logs
</script>
```

---

## Event Bubbling & Capturing

### Event Bubbling (Default)

Events "bubble up" from child to parent!

```html
<div id="grandparent">
    Grandparent
    <div id="parent">
        Parent
        <button id="child">Child</button>
    </div>
</div>

<script>
    document.getElementById('grandparent').addEventListener('click', () => {
        console.log('Grandparent');
    });
    
    document.getElementById('parent').addEventListener('click', () => {
        console.log('Parent');
    });
    
    document.getElementById('child').addEventListener('click', () => {
        console.log('Child');
    });
    
    // Click child button:
    // Output:
    // Child
    // Parent
    // Grandparent
</script>
```

### Event Capturing (Rare)

Events "trickle down" from parent to child.

```javascript
// Add third parameter 'true' for capturing
grandparent.addEventListener('click', () => {
    console.log('Grandparent');
}, true);  // Capturing phase

parent.addEventListener('click', () => {
    console.log('Parent');
}, true);  // Capturing phase

child.addEventListener('click', () => {
    console.log('Child');
});  // Bubbling phase (default)

// Click child:
// Grandparent (capturing)
// Parent (capturing)
// Child (target)
```

---

## Event Delegation

**Handle events for multiple elements with ONE listener!**

### Without Delegation (Bad)

```javascript
// ❌ Add listener to each item
let items = document.querySelectorAll('.item');
items.forEach(item => {
    item.addEventListener('click', function() {
        console.log('Clicked:', this.textContent);
    });
});

// Problem: Won't work for dynamically added items!
```

### With Delegation (Good!)

```javascript
// ✅ Add ONE listener to parent
let list = document.getElementById('list');

list.addEventListener('click', function(e) {
    // Check if clicked element has class 'item'
    if (e.target.classList.contains('item')) {
        console.log('Clicked:', e.target.textContent);
    }
});

// Works for existing AND future items!
```

### Real Example: Todo List with Delegation

```html
<ul id="todoList">
    <li class="todo">Buy milk <button class="delete">×</button></li>
    <li class="todo">Walk dog <button class="delete">×</button></li>
</ul>

<script>
    let list = document.getElementById('todoList');
    
    // ONE listener handles all delete buttons
    list.addEventListener('click', function(e) {
        // Check if delete button was clicked
        if (e.target.classList.contains('delete')) {
            // Remove parent li
            e.target.parentElement.remove();
        }
    });
</script>
```

---

## Removing Event Listeners

### removeEventListener()

```javascript
// Must use named function to remove!
function handleClick() {
    console.log('Clicked!');
}

// Add listener
btn.addEventListener('click', handleClick);

// Remove listener
btn.removeEventListener('click', handleClick);

// ❌ Can't remove anonymous functions
btn.addEventListener('click', function() {
    console.log('Clicked');
});
btn.removeEventListener('click', function() {
    // This won't work! Different function reference
});
```

### One-Time Events

```javascript
// Listen only once, then auto-remove
btn.addEventListener('click', function() {
    console.log('Only runs once!');
}, { once: true });
```

---

## Real-World Examples

### Example 1: Interactive Button Counter

```html
<button id="btn">Clicked 0 times</button>

<script>
    let btn = document.getElementById('btn');
    let count = 0;
    
    btn.addEventListener('click', function() {
        count++;
        this.textContent = `Clicked ${count} times`;
    });
</script>
```

### Example 2: Form Validation

```html
<form id="form">
    <input type="email" id="email" placeholder="Email">
    <span id="error" style="color:red;"></span>
    <button type="submit">Submit</button>
</form>

<script>
    let form = document.getElementById('form');
    let emailInput = document.getElementById('email');
    let error = document.getElementById('error');
    
    // Live validation
    emailInput.addEventListener('input', function() {
        if (this.value.includes('@')) {
            error.textContent = '✓ Valid';
            error.style.color = 'green';
        } else {
            error.textContent = '✗ Invalid email';
            error.style.color = 'red';
        }
    });
    
    // Submit validation
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!emailInput.value.includes('@')) {
            alert('Please enter valid email!');
            return;
        }
        
        console.log('Submitted:', emailInput.value);
    });
</script>
```

### Example 3: Image Lightbox

```html
<div id="gallery">
    <img src="image1.jpg" alt="Image 1">
    <img src="image2.jpg" alt="Image 2">
    <img src="image3.jpg" alt="Image 3">
</div>

<div id="lightbox" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.9);">
    <img id="lightboxImg" style="max-width:90%; max-height:90%; position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);">
    <button id="close" style="position:absolute; top:20px; right:20px; color:white; background:none; border:2px solid white; padding:10px 20px; cursor:pointer;">Close</button>
</div>

<script>
    let gallery = document.getElementById('gallery');
    let lightbox = document.getElementById('lightbox');
    let lightboxImg = document.getElementById('lightboxImg');
    let closeBtn = document.getElementById('close');
    
    // Open lightbox
    gallery.addEventListener('click', function(e) {
        if (e.target.tagName === 'IMG') {
            lightboxImg.src = e.target.src;
            lightbox.style.display = 'block';
        }
    });
    
    // Close lightbox
    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            lightbox.style.display = 'none';
        }
    });
</script>
```

### Example 4: Keyboard Navigation

```html
<input type="text" id="search" placeholder="Type to search">
<ul id="results">
    <li>Apple</li>
    <li>Banana</li>
    <li>Orange</li>
    <li>Mango</li>
</ul>

<script>
    let search = document.getElementById('search');
    let results = document.getElementById('results');
    let items = results.querySelectorAll('li');
    let currentIndex = -1;
    
    // Search
    search.addEventListener('input', function() {
        let query = this.value.toLowerCase();
        
        items.forEach(item => {
            let text = item.textContent.toLowerCase();
            if (text.includes(query)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
    
    // Arrow key navigation
    search.addEventListener('keydown', function(e) {
        let visibleItems = Array.from(items).filter(item => 
            item.style.display !== 'none'
        );
        
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            currentIndex = Math.min(currentIndex + 1, visibleItems.length - 1);
            highlightItem(visibleItems, currentIndex);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            currentIndex = Math.max(currentIndex - 1, 0);
            highlightItem(visibleItems, currentIndex);
        } else if (e.key === 'Enter' && currentIndex >= 0) {
            e.preventDefault();
            console.log('Selected:', visibleItems[currentIndex].textContent);
        }
    });
    
    function highlightItem(items, index) {
        items.forEach((item, i) => {
            if (i === index) {
                item.style.background = 'lightblue';
            } else {
                item.style.background = 'white';
            }
        });
    }
</script>
```

---

## Event Best Practices

### 1. Use Event Delegation for Dynamic Content

```javascript
// ✅ GOOD
document.addEventListener('click', function(e) {
    if (e.target.matches('.delete-btn')) {
        e.target.parentElement.remove();
    }
});

// ❌ BAD - Won't work for new elements
document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        this.parentElement.remove();
    });
});
```

### 2. Remove Event Listeners When Not Needed

```javascript
function setupModal() {
    function handleEscape(e) {
        if (e.key === 'Escape') {
            closeModal();
            // Remove listener when done
            document.removeEventListener('keydown', handleEscape);
        }
    }
    
    document.addEventListener('keydown', handleEscape);
}
```

### 3. Debounce Expensive Operations

```javascript
// Debounce function
function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

// Use with expensive operations
let search = document.getElementById('search');
let debouncedSearch = debounce(function() {
    console.log('Searching for:', search.value);
    // Expensive API call here
}, 300);

search.addEventListener('input', debouncedSearch);
```

---

## Common Event Types Reference

```javascript
// Mouse
'click'          // Single click
'dblclick'       // Double click
'mousedown'      // Button pressed
'mouseup'        // Button released
'mousemove'      // Mouse moving
'mouseover'      // Mouse enters (bubbles)
'mouseout'       // Mouse leaves (bubbles)
'mouseenter'     // Mouse enters (doesn't bubble)
'mouseleave'     // Mouse leaves (doesn't bubble)

// Keyboard
'keydown'        // Key pressed
'keyup'          // Key released

// Form
'submit'         // Form submitted
'input'          // Input value changes
'change'         // Input loses focus with change
'focus'          // Element gains focus
'blur'           // Element loses focus

// Window/Document
'DOMContentLoaded' // DOM ready
'load'             // Everything loaded
'resize'           // Window resized
'scroll'           // Page scrolled

// Other
'contextmenu'    // Right-click
'copy'           // Content copied
'paste'          // Content pasted
'drag'           // Element dragged
'drop'           // Element dropped
```

---

## Key Takeaways ✓

- [ ] Use `addEventListener()` (modern way)
- [ ] Event object contains useful information
- [ ] `preventDefault()` stops default behavior
- [ ] `stopPropagation()` stops event bubbling
- [ ] Event delegation is efficient for multiple elements
- [ ] Remove listeners when no longer needed
- [ ] Use named functions to remove listeners
- [ ] Debounce expensive operations

**Next:** Building the Interactive Quiz Game! Go to `project-interactive-quiz/` 💪