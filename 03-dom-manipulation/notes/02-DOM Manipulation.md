# Module 03 - Lesson 2: DOM Manipulation

## What is DOM Manipulation?

Now that you can SELECT elements, let's learn to MODIFY them! DOM manipulation lets you:
- Change text and HTML content
- Modify styles
- Add/remove classes
- Create new elements
- Remove elements
- Move elements around

---

## Changing Content

### 1. textContent - Get/Set Text Only

```html
<p id="message">Hello World</p>
```

```javascript
let p = document.getElementById('message');

// Get text
console.log(p.textContent);  // "Hello World"

// Set text
p.textContent = "New message!";
console.log(p.textContent);  // "New message!"

// HTML tags are treated as text
p.textContent = "<strong>Bold?</strong>";
// Shows: <strong>Bold?</strong> (not bold!)
```

### 2. innerHTML - Get/Set HTML Content

```html
<div id="content">
    <p>Paragraph</p>
</div>
```

```javascript
let div = document.getElementById('content');

// Get HTML
console.log(div.innerHTML);  // "<p>Paragraph</p>"

// Set HTML
div.innerHTML = "<h2>New Title</h2><p>New paragraph</p>";

// Add HTML
div.innerHTML += "<p>Another paragraph</p>";
```

**⚠️ Security Warning:**
```javascript
// DANGEROUS! Never do this with user input
let userInput = "<script>alert('Hacked!')</script>";
div.innerHTML = userInput;  // Can execute malicious code!

// SAFE: Use textContent for user input
div.textContent = userInput;  // Shows as text, doesn't execute
```

### 3. innerText vs textContent

```html
<div id="test">
    Hello
    <span style="display: none;">Hidden</span>
    World
</div>
```

```javascript
let div = document.getElementById('test');

// textContent: All text (including hidden)
console.log(div.textContent);  // "Hello Hidden World"

// innerText: Only visible text
console.log(div.innerText);    // "Hello World"
```

**Best Practice:** Use `textContent` (faster and more consistent)

---

## Modifying Attributes

### getAttribute() & setAttribute()

```html
<img id="photo" src="old.jpg" alt="Photo">
<a id="link" href="#" target="_blank">Link</a>
```

```javascript
let img = document.getElementById('photo');
let link = document.getElementById('link');

// Get attributes
console.log(img.getAttribute('src'));   // "old.jpg"
console.log(img.getAttribute('alt'));   // "Photo"

// Set attributes
img.setAttribute('src', 'new.jpg');
img.setAttribute('alt', 'New Photo');

// Direct property access (preferred for standard attributes)
link.href = "https://example.com";
link.target = "_self";

// Data attributes
let box = document.querySelector('.box');
box.setAttribute('data-index', '5');
console.log(box.getAttribute('data-index'));  // "5"
```

### removeAttribute() & hasAttribute()

```javascript
let link = document.querySelector('a');

// Check if attribute exists
if (link.hasAttribute('target')) {
    console.log('Has target attribute');
}

// Remove attribute
link.removeAttribute('target');
console.log(link.hasAttribute('target'));  // false
```

---

## Styling Elements

### 1. Inline Styles (style property)

```html
<div id="box">Box</div>
```

```javascript
let box = document.getElementById('box');

// Set individual styles
box.style.backgroundColor = 'blue';
box.style.color = 'white';
box.style.padding = '20px';
box.style.fontSize = '24px';
box.style.borderRadius = '10px';

// Note: CSS properties use camelCase!
// CSS: background-color → JavaScript: backgroundColor
// CSS: font-size → JavaScript: fontSize

// Get computed style
let styles = window.getComputedStyle(box);
console.log(styles.backgroundColor);  // "rgb(0, 0, 255)"
console.log(styles.fontSize);         // "24px"
```

### 2. CSS Classes (Best Practice!)

```html
<style>
    .highlight {
        background: yellow;
        padding: 10px;
    }
    .active {
        border: 2px solid blue;
    }
    .hidden {
        display: none;
    }
</style>

<div id="box" class="highlight">Box</div>
```

```javascript
let box = document.getElementById('box');

// className - Full class string
console.log(box.className);  // "highlight"
box.className = "active";    // Replace all classes
console.log(box.className);  // "active"

// classList - Modern way! (Recommended)
let box2 = document.getElementById('box');

// Add class
box2.classList.add('active');
box2.classList.add('highlight', 'bordered');  // Multiple at once

// Remove class
box2.classList.remove('highlight');

// Toggle class (add if absent, remove if present)
box2.classList.toggle('hidden');
box2.classList.toggle('hidden');  // Back to visible

// Check if has class
if (box2.classList.contains('active')) {
    console.log('Box is active!');
}

// Replace class
box2.classList.replace('active', 'inactive');
```

### Real Example: Toggle Dark Mode

```html
<button id="themeBtn">Toggle Theme</button>

<style>
    body {
        background: white;
        color: black;
        transition: 0.3s;
    }
    body.dark-mode {
        background: #1a1a1a;
        color: white;
    }
</style>

<script>
    let btn = document.getElementById('themeBtn');
    
    btn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            btn.textContent = 'Light Mode';
        } else {
            btn.textContent = 'Dark Mode';
        }
    });
</script>
```

---

## Creating Elements

### createElement() - Create New Elements

```javascript
// Create new element
let newDiv = document.createElement('div');

// Set content
newDiv.textContent = 'Hello from new div!';

// Set attributes
newDiv.id = 'myDiv';
newDiv.className = 'box';

// Set styles
newDiv.style.padding = '20px';
newDiv.style.backgroundColor = 'lightblue';

// Add to page
document.body.appendChild(newDiv);
```

### Complete Example: Create Card

```javascript
// Create card container
let card = document.createElement('div');
card.className = 'card';

// Create title
let title = document.createElement('h2');
title.textContent = 'Card Title';

// Create description
let desc = document.createElement('p');
desc.textContent = 'This is the card description';

// Create button
let btn = document.createElement('button');
btn.textContent = 'Click Me';
btn.addEventListener('click', function() {
    alert('Button clicked!');
});

// Assemble card
card.appendChild(title);
card.appendChild(desc);
card.appendChild(btn);

// Add to page
document.body.appendChild(card);
```

---

## Adding Elements to the DOM

### appendChild() - Add as Last Child

```html
<ul id="list">
    <li>Item 1</li>
    <li>Item 2</li>
</ul>
```

```javascript
let list = document.getElementById('list');

// Create new item
let newItem = document.createElement('li');
newItem.textContent = 'Item 3';

// Add to end of list
list.appendChild(newItem);

// Result:
// <ul>
//   <li>Item 1</li>
//   <li>Item 2</li>
//   <li>Item 3</li>  ← Added
// </ul>
```

### insertBefore() - Add Before Specific Element

```javascript
let list = document.getElementById('list');
let firstItem = list.children[0];

// Create new item
let newItem = document.createElement('li');
newItem.textContent = 'Item 0';

// Insert before first item
list.insertBefore(newItem, firstItem);

// Result:
// <ul>
//   <li>Item 0</li>  ← Added
//   <li>Item 1</li>
//   <li>Item 2</li>
// </ul>
```

### insertAdjacentElement() - Insert Relative to Element

```html
<div id="target">Target</div>
```

```javascript
let target = document.getElementById('target');
let newDiv = document.createElement('div');
newDiv.textContent = 'New';

// beforebegin: Before the element
target.insertAdjacentElement('beforebegin', newDiv);

// afterbegin: First child
target.insertAdjacentElement('afterbegin', newDiv);

// beforeend: Last child
target.insertAdjacentElement('beforeend', newDiv);

// afterend: After the element
target.insertAdjacentElement('afterend', newDiv);
```

### insertAdjacentHTML() - Insert HTML String

```javascript
let div = document.getElementById('container');

// Add HTML before element
div.insertAdjacentHTML('beforebegin', '<p>Before</p>');

// Add HTML as first child
div.insertAdjacentHTML('afterbegin', '<p>First child</p>');

// Add HTML as last child
div.insertAdjacentHTML('beforeend', '<p>Last child</p>');

// Add HTML after element
div.insertAdjacentHTML('afterend', '<p>After</p>');
```

---

## Removing Elements

### remove() - Remove Element (Modern Way)

```html
<div id="box">This will be removed</div>
```

```javascript
let box = document.getElementById('box');

// Remove element
box.remove();  // Gone!
```

### removeChild() - Remove Child Element (Old Way)

```html
<ul id="list">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

```javascript
let list = document.getElementById('list');
let firstItem = list.children[0];

// Remove first item
list.removeChild(firstItem);
```

### Remove All Children

```javascript
let container = document.getElementById('container');

// Method 1: innerHTML
container.innerHTML = '';

// Method 2: Loop and remove
while (container.firstChild) {
    container.removeChild(container.firstChild);
}

// Method 3: replaceChildren (modern)
container.replaceChildren();
```

---

## Replacing Elements

### replaceChild() - Replace Element

```html
<ul id="list">
    <li id="old">Old Item</li>
</ul>
```

```javascript
let list = document.getElementById('list');
let oldItem = document.getElementById('old');

// Create new item
let newItem = document.createElement('li');
newItem.textContent = 'New Item';

// Replace old with new
list.replaceChild(newItem, oldItem);
```

### replaceWith() - Modern Way

```javascript
let oldElement = document.getElementById('old');
let newElement = document.createElement('div');
newElement.textContent = 'New!';

// Replace
oldElement.replaceWith(newElement);
```

---

## Cloning Elements

### cloneNode() - Copy Element

```html
<div id="original">
    <h2>Title</h2>
    <p>Content</p>
</div>
```

```javascript
let original = document.getElementById('original');

// Shallow clone (element only, no children)
let shallowClone = original.cloneNode(false);

// Deep clone (element + all children)
let deepClone = original.cloneNode(true);

// Add clone to page
document.body.appendChild(deepClone);
```

---

## Real-World Examples

### Example 1: Todo List

```html
<input type="text" id="todoInput" placeholder="New todo">
<button id="addBtn">Add</button>
<ul id="todoList"></ul>

<script>
    let input = document.getElementById('todoInput');
    let addBtn = document.getElementById('addBtn');
    let list = document.getElementById('todoList');

    addBtn.addEventListener('click', function() {
        let text = input.value.trim();
        
        if (text === '') {
            alert('Please enter a todo!');
            return;
        }

        // Create list item
        let li = document.createElement('li');
        li.textContent = text;

        // Create delete button
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });

        // Add button to item
        li.appendChild(deleteBtn);

        // Add item to list
        list.appendChild(li);

        // Clear input
        input.value = '';
        input.focus();
    });

    // Also add on Enter key
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addBtn.click();
        }
    });
</script>
```

### Example 2: Dynamic Table

```html
<button id="addRowBtn">Add Row</button>
<table id="dataTable" border="1">
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody></tbody>
</table>

<script>
    let addBtn = document.getElementById('addRowBtn');
    let tbody = document.querySelector('#dataTable tbody');
    let rowCount = 1;

    addBtn.addEventListener('click', function() {
        // Create row
        let tr = document.createElement('tr');

        // Create cells
        let nameCell = document.createElement('td');
        nameCell.textContent = `Person ${rowCount}`;

        let ageCell = document.createElement('td');
        ageCell.textContent = Math.floor(Math.random() * 50) + 20;

        let actionCell = document.createElement('td');
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function() {
            tr.remove();
        });
        actionCell.appendChild(deleteBtn);

        // Add cells to row
        tr.appendChild(nameCell);
        tr.appendChild(ageCell);
        tr.appendChild(actionCell);

        // Add row to table
        tbody.appendChild(tr);

        rowCount++;
    });
</script>
```

### Example 3: Image Gallery

```html
<div id="gallery"></div>
<button id="loadBtn">Load Images</button>

<script>
    let gallery = document.getElementById('gallery');
    let loadBtn = document.getElementById('loadBtn');

    let images = [
        'https://via.placeholder.com/200x200/FF0000',
        'https://via.placeholder.com/200x200/00FF00',
        'https://via.placeholder.com/200x200/0000FF',
        'https://via.placeholder.com/200x200/FFFF00'
    ];

    loadBtn.addEventListener('click', function() {
        // Clear gallery
        gallery.innerHTML = '';

        // Add images
        images.forEach(url => {
            let img = document.createElement('img');
            img.src = url;
            img.alt = 'Gallery Image';
            img.style.margin = '10px';
            img.style.cursor = 'pointer';

            // Click to enlarge
            img.addEventListener('click', function() {
                this.style.transform = this.style.transform === 'scale(1.5)' 
                    ? 'scale(1)' 
                    : 'scale(1.5)';
            });

            gallery.appendChild(img);
        });
    });
</script>
```

### Example 4: Counter with History

```html
<div>
    <h2 id="counter">0</h2>
    <button id="incBtn">+1</button>
    <button id="decBtn">-1</button>
    <button id="resetBtn">Reset</button>
</div>
<h3>History:</h3>
<ul id="history"></ul>

<script>
    let counterDisplay = document.getElementById('counter');
    let incBtn = document.getElementById('incBtn');
    let decBtn = document.getElementById('decBtn');
    let resetBtn = document.getElementById('resetBtn');
    let history = document.getElementById('history');
    
    let count = 0;

    function updateCounter(newCount, action) {
        count = newCount;
        counterDisplay.textContent = count;

        // Add to history
        let li = document.createElement('li');
        li.textContent = `${action}: ${count}`;
        history.insertBefore(li, history.firstChild);
    }

    incBtn.addEventListener('click', () => updateCounter(count + 1, 'Increment'));
    decBtn.addEventListener('click', () => updateCounter(count - 1, 'Decrement'));
    resetBtn.addEventListener('click', () => updateCounter(0, 'Reset'));
</script>
```

---

## Performance Tips

### 1. Minimize Reflows (Expensive!)

```javascript
// ❌ BAD - Causes multiple reflows
let list = document.getElementById('list');
for (let i = 0; i < 100; i++) {
    let li = document.createElement('li');
    li.textContent = `Item ${i}`;
    list.appendChild(li);  // Reflow each time!
}

// ✅ GOOD - Single reflow
let list = document.getElementById('list');
let fragment = document.createDocumentFragment();

for (let i = 0; i < 100; i++) {
    let li = document.createElement('li');
    li.textContent = `Item ${i}`;
    fragment.appendChild(li);  // Add to fragment (in memory)
}

list.appendChild(fragment);  // Single reflow!
```

### 2. Use innerHTML for Multiple Elements

```javascript
// ❌ SLOW - Multiple DOM operations
let container = document.getElementById('container');
for (let i = 0; i < 100; i++) {
    let div = document.createElement('div');
    div.textContent = `Item ${i}`;
    container.appendChild(div);
}

// ✅ FAST - Single DOM operation
let container = document.getElementById('container');
let html = '';
for (let i = 0; i < 100; i++) {
    html += `<div>Item ${i}</div>`;
}
container.innerHTML = html;
```

---

## Common Mistakes

### ❌ Mistake 1: Modifying collection while looping

```javascript
// WRONG! Causes issues
let items = document.querySelectorAll('.item');
items.forEach(item => {
    item.remove();  // Modifying while looping
});
```

**Fix:** Convert to array first or loop backwards
```javascript
// Method 1: Convert to array
let items = Array.from(document.querySelectorAll('.item'));
items.forEach(item => item.remove());

// Method 2: Loop backwards
let items = document.querySelectorAll('.item');
for (let i = items.length - 1; i >= 0; i--) {
    items[i].remove();
}
```

### ❌ Mistake 2: Creating elements in loop without fragment

```javascript
// SLOW
for (let i = 0; i < 1000; i++) {
    let div = document.createElement('div');
    document.body.appendChild(div);  // 1000 reflows!
}
```

**Fix:** Use fragment
```javascript
let fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
    let div = document.createElement('div');
    fragment.appendChild(div);
}
document.body.appendChild(fragment);  // 1 reflow!
```

---

## Quick Reference

```javascript
// Content
element.textContent = 'text';       // Set text (safe)
element.innerHTML = '<p>HTML</p>';  // Set HTML (careful!)

// Attributes
element.getAttribute('attr');       // Get attribute
element.setAttribute('attr', 'val'); // Set attribute
element.removeAttribute('attr');    // Remove attribute
element.hasAttribute('attr');       // Check if exists

// Styles
element.style.property = 'value';   // Inline style
element.classList.add('class');     // Add class
element.classList.remove('class');  // Remove class
element.classList.toggle('class');  // Toggle class
element.classList.contains('class'); // Check class

// Create & Add
document.createElement('tag');      // Create element
parent.appendChild(child);          // Add as last child
parent.insertBefore(new, ref);      // Add before element
element.insertAdjacentHTML(pos, html); // Insert HTML

// Remove & Replace
element.remove();                   // Remove element
parent.removeChild(child);          // Remove child
element.replaceWith(new);           // Replace element

// Clone
element.cloneNode(false);           // Shallow clone
element.cloneNode(true);            // Deep clone
```

---

## Key Takeaways ✓

- [ ] Use `textContent` for text (safe), `innerHTML` for HTML (careful!)
- [ ] `classList` is better than `className` for managing classes
- [ ] `createElement()` to create new elements
- [ ] `appendChild()` to add elements
- [ ] `remove()` to delete elements
- [ ] Use DocumentFragment for better performance
- [ ] Never trust user input in `innerHTML`

**Next:** Event Handling! Open `03-event-handling.md` 💪