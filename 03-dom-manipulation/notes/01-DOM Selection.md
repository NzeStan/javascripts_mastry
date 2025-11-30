# Module 03 - Lesson 1: DOM Selection

## What is the DOM?

**DOM** = Document Object Model. It's a programming interface that represents your HTML as a tree of objects that JavaScript can access and modify!

Think of it like this:
- **HTML** = The structure (blueprint)
- **CSS** = The styling (paint and decoration)
- **JavaScript + DOM** = Making it interactive (bringing it to life!)

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello</h1>
    <p>World</p>
  </body>
</html>
```

JavaScript sees this as a tree structure:
```
document
  └── html
      ├── head
      │   └── title
      └── body
          ├── h1
          └── p
```

---

## The document Object

The `document` object is your entry point to the DOM!

```javascript
// The entire webpage
console.log(document);

// Information about the page
console.log(document.title);        // Page title
console.log(document.URL);          // Current URL
console.log(document.domain);       // Domain name
console.log(document.lastModified); // Last modified date
```

---

## Selecting Single Elements

### 1. getElementById() - Select by ID

**Most common and fastest!**

```html
<h1 id="title">Welcome</h1>
<p id="message">Hello World</p>
```

```javascript
// Select element with id="title"
let title = document.getElementById('title');
console.log(title);              // <h1 id="title">Welcome</h1>
console.log(title.textContent);  // "Welcome"

// Select element with id="message"
let message = document.getElementById('message');
console.log(message.textContent);  // "Hello World"
```

**Notes:**
- IDs must be unique on the page!
- Returns `null` if not found
- Case-sensitive: `getElementById('Title')` ≠ `getElementById('title')`

### 2. querySelector() - Select with CSS Selector (Modern Way!)

**Most flexible! Use any CSS selector.**

```html
<h1 class="main-title">JavaScript</h1>
<p class="intro">Learn DOM manipulation</p>
<button id="myBtn">Click</button>
<div class="box active">Box 1</div>
```

```javascript
// By ID (with #)
let btn = document.querySelector('#myBtn');

// By class (with .)
let title = document.querySelector('.main-title');

// By tag name
let paragraph = document.querySelector('p');

// By attribute
let activeBox = document.querySelector('.box.active');

// Complex selectors
let firstListItem = document.querySelector('ul li:first-child');
let link = document.querySelector('a[href="#about"]');
```

**querySelector vs getElementById:**
```javascript
// Both work, but querySelector is more flexible
let elem1 = document.getElementById('myId');      // Fast
let elem2 = document.querySelector('#myId');      // Flexible

// querySelector can do more:
let firstButton = document.querySelector('button');
let activeDiv = document.querySelector('div.active');
```

### 3. getElementsByClassName() - Select by Class (Old Way)

Returns a **live** HTMLCollection (array-like object).

```html
<div class="box">Box 1</div>
<div class="box">Box 2</div>
<div class="box">Box 3</div>
```

```javascript
let boxes = document.getElementsByClassName('box');
console.log(boxes.length);  // 3
console.log(boxes[0]);      // First box
console.log(boxes[1]);      // Second box

// Convert to array to use array methods
let boxArray = Array.from(boxes);
boxArray.forEach(box => {
    console.log(box.textContent);
});
```

### 4. getElementsByTagName() - Select by Tag Name

Returns a **live** HTMLCollection.

```html
<p>Paragraph 1</p>
<p>Paragraph 2</p>
<p>Paragraph 3</p>
```

```javascript
let paragraphs = document.getElementsByTagName('p');
console.log(paragraphs.length);  // 3

// Loop through
for (let i = 0; i < paragraphs.length; i++) {
    console.log(paragraphs[i].textContent);
}
```

---

## Selecting Multiple Elements

### querySelectorAll() - Select All Matching (Modern Way!)

Returns a **static** NodeList (doesn't update if DOM changes).

```html
<div class="box">Box 1</div>
<div class="box">Box 2</div>
<div class="box">Box 3</div>
<div class="box">Box 4</div>
```

```javascript
// Select all elements with class="box"
let boxes = document.querySelectorAll('.box');
console.log(boxes.length);  // 4

// NodeList has forEach!
boxes.forEach(box => {
    console.log(box.textContent);
});

// Can use array-like index access
console.log(boxes[0]);  // First box
console.log(boxes[1]);  // Second box

// Convert to array if needed
let boxArray = Array.from(boxes);
let mapped = boxArray.map(box => box.textContent);
console.log(mapped);  // ["Box 1", "Box 2", "Box 3", "Box 4"]
```

### Examples with Different Selectors

```html
<div class="container">
    <h2>Title</h2>
    <p class="intro">First paragraph</p>
    <p>Second paragraph</p>
    <button class="btn primary">Submit</button>
    <button class="btn">Cancel</button>
</div>
```

```javascript
// All paragraphs
let allP = document.querySelectorAll('p');

// All elements with class "btn"
let buttons = document.querySelectorAll('.btn');

// All paragraphs inside .container
let containerP = document.querySelectorAll('.container p');

// First paragraph in container
let firstP = document.querySelector('.container p');

// Primary button
let primaryBtn = document.querySelector('.btn.primary');

// All elements with class "btn" or "intro"
let multiple = document.querySelectorAll('.btn, .intro');
```

---

## Comparison: Single vs Multiple Selection

| Method | Returns | Live/Static | Use When |
|--------|---------|-------------|----------|
| `getElementById()` | Single element | N/A | Have unique ID |
| `querySelector()` | First match | N/A | Need CSS selector |
| `getElementsByClassName()` | HTMLCollection | Live | Need all with class |
| `getElementsByTagName()` | HTMLCollection | Live | Need all tags |
| `querySelectorAll()` | NodeList | Static | Need CSS selector for multiple |

**Live vs Static:**
```javascript
// Live HTMLCollection - updates automatically
let liveDivs = document.getElementsByTagName('div');
console.log(liveDivs.length);  // 3

// Add a new div
let newDiv = document.createElement('div');
document.body.appendChild(newDiv);

console.log(liveDivs.length);  // 4 (updated automatically!)

// Static NodeList - doesn't update
let staticDivs = document.querySelectorAll('div');
console.log(staticDivs.length);  // 4

// Add another div
let anotherDiv = document.createElement('div');
document.body.appendChild(anotherDiv);

console.log(staticDivs.length);  // 4 (still 4, not updated!)
```

---

## Accessing Element Properties

Once you select an element, you can access its properties:

```html
<h1 id="title" class="main-title" data-category="heading">
    JavaScript DOM
</h1>
<a href="https://example.com" target="_blank">Link</a>
<img src="image.jpg" alt="Photo">
```

```javascript
let title = document.querySelector('#title');

// Text content
console.log(title.textContent);   // "JavaScript DOM"
console.log(title.innerText);     // "JavaScript DOM"
console.log(title.innerHTML);     // "JavaScript DOM"

// Attributes
console.log(title.id);            // "title"
console.log(title.className);     // "main-title"
console.log(title.classList);     // DOMTokenList ["main-title"]

// Get attribute value
let category = title.getAttribute('data-category');
console.log(category);  // "heading"

// Links
let link = document.querySelector('a');
console.log(link.href);           // "https://example.com"
console.log(link.target);         // "_blank"

// Images
let img = document.querySelector('img');
console.log(img.src);             // "image.jpg"
console.log(img.alt);             // "Photo"
```

---

## Element Relationships (Traversing the DOM)

Navigate between related elements:

```html
<div class="parent">
    <h2>Title</h2>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
    <span>Text</span>
</div>
```

```javascript
let parent = document.querySelector('.parent');

// Children
console.log(parent.children);           // HTMLCollection of child elements
console.log(parent.children[0]);        // <h2>
console.log(parent.firstElementChild);  // <h2>
console.log(parent.lastElementChild);   // <span>

// Child nodes (includes text nodes!)
console.log(parent.childNodes);         // NodeList (includes text/whitespace)

// Parent
let paragraph = document.querySelector('p');
console.log(paragraph.parentElement);   // <div class="parent">

// Siblings
let firstP = document.querySelector('p');
console.log(firstP.nextElementSibling);      // <p>Paragraph 2</p>
console.log(firstP.previousElementSibling);  // <h2>Title</h2>
```

---

## Real-World Examples

### Example 1: Button Click Counter

```html
<button id="counterBtn">Click Me!</button>
<p id="count">Clicks: 0</p>

<script>
    let btn = document.getElementById('counterBtn');
    let countDisplay = document.getElementById('count');
    let clicks = 0;

    btn.addEventListener('click', function() {
        clicks++;
        countDisplay.textContent = `Clicks: ${clicks}`;
    });
</script>
```

### Example 2: Show/Hide Element

```html
<button id="toggleBtn">Toggle</button>
<div id="content">This content can be hidden!</div>

<script>
    let toggleBtn = document.getElementById('toggleBtn');
    let content = document.getElementById('content');

    toggleBtn.addEventListener('click', function() {
        if (content.style.display === 'none') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
</script>
```

### Example 3: Form Input Validation

```html
<input type="text" id="username" placeholder="Username">
<p id="error" style="color: red;"></p>

<script>
    let input = document.getElementById('username');
    let error = document.getElementById('error');

    input.addEventListener('input', function() {
        let value = input.value.trim();
        
        if (value.length === 0) {
            error.textContent = 'Username cannot be empty';
        } else if (value.length < 3) {
            error.textContent = 'Username must be at least 3 characters';
        } else {
            error.textContent = '✓ Valid username';
            error.style.color = 'green';
        }
    });
</script>
```

### Example 4: Highlight All Paragraphs

```html
<button id="highlightBtn">Highlight Paragraphs</button>
<p>Paragraph 1</p>
<p>Paragraph 2</p>
<p>Paragraph 3</p>

<script>
    let btn = document.getElementById('highlightBtn');
    let paragraphs = document.querySelectorAll('p');

    btn.addEventListener('click', function() {
        paragraphs.forEach(p => {
            p.style.backgroundColor = 'yellow';
            p.style.padding = '10px';
        });
    });
</script>
```

---

## Practice Exercise

Create `03-dom-manipulation/exercises/selection-practice.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Selection Practice</title>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background: lightblue;
            margin: 10px;
            display: inline-block;
            text-align: center;
            line-height: 100px;
            cursor: pointer;
        }
        .highlighted {
            background: yellow;
            transform: scale(1.1);
        }
    </style>
</head>
<body>
    <h1 id="title">DOM Selection Practice</h1>
    <p class="intro">Click boxes to highlight them!</p>

    <div class="container">
        <div class="box" data-number="1">Box 1</div>
        <div class="box" data-number="2">Box 2</div>
        <div class="box" data-number="3">Box 3</div>
        <div class="box" data-number="4">Box 4</div>
    </div>

    <button id="resetBtn">Reset All</button>
    <button id="highlightAllBtn">Highlight All</button>

    <script>
        // Exercise 1: Select single elements
        let title = document.getElementById('title');
        let intro = document.querySelector('.intro');
        console.log('Title:', title.textContent);
        console.log('Intro:', intro.textContent);

        // Exercise 2: Select multiple elements
        let boxes = document.querySelectorAll('.box');
        console.log('Number of boxes:', boxes.length);

        // Exercise 3: Click to highlight
        boxes.forEach(box => {
            box.addEventListener('click', function() {
                this.classList.toggle('highlighted');
            });
        });

        // Exercise 4: Reset button
        let resetBtn = document.getElementById('resetBtn');
        resetBtn.addEventListener('click', function() {
            boxes.forEach(box => {
                box.classList.remove('highlighted');
            });
        });

        // Exercise 5: Highlight all button
        let highlightAllBtn = document.getElementById('highlightAllBtn');
        highlightAllBtn.addEventListener('click', function() {
            boxes.forEach(box => {
                box.classList.add('highlighted');
            });
        });

        // Exercise 6: Get data attributes
        boxes.forEach(box => {
            let number = box.getAttribute('data-number');
            console.log(`Box ${number} created`);
        });
    </script>
</body>
</html>
```

---

## Common Mistakes

### ❌ Mistake 1: Selecting before DOM loads
```javascript
// WRONG! Script runs before element exists
let btn = document.getElementById('myBtn');
console.log(btn);  // null
```

**Fix:** Put script at end of body or use DOMContentLoaded:
```javascript
document.addEventListener('DOMContentLoaded', function() {
    let btn = document.getElementById('myBtn');
    console.log(btn);  // Works!
});
```

### ❌ Mistake 2: Trying to loop HTMLCollection with forEach
```javascript
let divs = document.getElementsByClassName('box');
// divs.forEach(div => { });  // ERROR! Not an array
```

**Fix:** Convert to array:
```javascript
let divs = document.getElementsByClassName('box');
Array.from(divs).forEach(div => {
    console.log(div);
});

// Or use querySelectorAll (has forEach)
let divs2 = document.querySelectorAll('.box');
divs2.forEach(div => {
    console.log(div);
});
```

### ❌ Mistake 3: Forgetting # or . in querySelector
```javascript
// WRONG!
let elem = document.querySelector('myId');  // Looks for <myId> tag

// CORRECT!
let elem = document.querySelector('#myId');  // Looks for id="myId"
```

---

## Quick Reference

```javascript
// Single element
getElementById('id')           // By ID (fastest)
querySelector('selector')      // First match of CSS selector

// Multiple elements
getElementsByClassName('class')  // By class (live)
getElementsByTagName('tag')      // By tag (live)
querySelectorAll('selector')     // All matches (static)

// Element properties
element.textContent           // Get/set text
element.innerHTML             // Get/set HTML
element.id                    // Element ID
element.className             // Class string
element.classList             // Class list
element.getAttribute('attr')  // Get attribute

// Relationships
element.children              // Child elements
element.parentElement         // Parent element
element.nextElementSibling    // Next sibling
element.previousElementSibling // Previous sibling
```

---

## Key Takeaways ✓

- [ ] DOM = Document Object Model (tree structure)
- [ ] `getElementById()` is fastest for single element
- [ ] `querySelector()` is most flexible
- [ ] `querySelectorAll()` for multiple elements
- [ ] NodeList has `forEach()`, HTMLCollection doesn't
- [ ] Always check if element exists before using
- [ ] Place scripts at end of body or use DOMContentLoaded

**Next:** Manipulating the DOM! Open `02-dom-manipulation.md` 💪