# Module 02 - Lesson 2: Objects Basics

## What Are Objects?

Objects store **related data together** using key-value pairs. Think of them as a collection of properties!

**Real-life example:** A person has a name, age, email, etc. - all related!

```javascript
// Without objects (messy!)
let personName = "Ifeanyi";
let personAge = 25;
let personEmail = "ifeanyi@example.com";

// With objects (organized!)
let person = {
    name: "Ifeanyi",
    age: 25,
    email: "ifeanyi@example.com"
};
```

---

## Creating Objects

### Method 1: Object Literal (Most Common)
```javascript
let person = {
    name: "Ifeanyi",
    age: 25,
    city: "Lagos"
};

console.log(person);
```

### Method 2: Object Constructor
```javascript
let person = new Object();
person.name = "Ifeanyi";
person.age = 25;
person.city = "Lagos";
```

**Best Practice:** Use object literals `{}` - cleaner and shorter!

---

## Object Properties

### Accessing Properties

#### Dot Notation (Most Common)
```javascript
let person = {
    name: "Ifeanyi",
    age: 25,
    city: "Lagos"
};

console.log(person.name);  // Ifeanyi
console.log(person.age);   // 25
console.log(person.city);  // Lagos
```

#### Bracket Notation (Dynamic Access)
```javascript
let person = {
    name: "Ifeanyi",
    age: 25,
    "favorite color": "blue"  // Property with space
};

console.log(person["name"]);            // Ifeanyi
console.log(person["favorite color"]);  // blue

// Dynamic property access
let property = "age";
console.log(person[property]);  // 25
```

---

## Modifying Objects

### Adding Properties
```javascript
let person = {
    name: "Ifeanyi",
    age: 25
};

// Add new properties
person.email = "ifeanyi@example.com";
person.country = "Nigeria";

console.log(person);
// { name: "Ifeanyi", age: 25, email: "ifeanyi@example.com", country: "Nigeria" }
```

### Updating Properties
```javascript
let person = {
    name: "Ifeanyi",
    age: 25
};

person.age = 26;  // Update
console.log(person.age);  // 26
```

### Deleting Properties
```javascript
let person = {
    name: "Ifeanyi",
    age: 25,
    temp: "delete me"
};

delete person.temp;
console.log(person);  // { name: "Ifeanyi", age: 25 }
```

---

## Object Methods

Objects can have **functions as properties** - called methods!

```javascript
let person = {
    name: "Ifeanyi",
    age: 25,
    
    // Method
    greet: function() {
        console.log("Hello, my name is " + this.name);
    },
    
    // Shorter syntax (ES6)
    introduce() {
        console.log(`I'm ${this.name}, ${this.age} years old`);
    }
};

person.greet();       // Hello, my name is Ifeanyi
person.introduce();   // I'm Ifeanyi, 25 years old
```

### The `this` Keyword

`this` refers to the current object.

```javascript
let person = {
    firstName: "Ifeanyi",
    lastName: "Stanley",
    
    fullName() {
        return this.firstName + " " + this.lastName;
    },
    
    birthday() {
        this.age++;  // Increment age property
    }
};

console.log(person.fullName());  // Ifeanyi Stanley
```

---

## Nested Objects

Objects can contain other objects!

```javascript
let user = {
    name: "Ifeanyi",
    age: 25,
    address: {
        street: "123 Main St",
        city: "Lagos",
        country: "Nigeria"
    },
    contact: {
        email: "ifeanyi@example.com",
        phone: "+234-123-4567"
    }
};

// Access nested properties
console.log(user.address.city);       // Lagos
console.log(user.contact.email);      // ifeanyi@example.com
console.log(user.address.country);    // Nigeria
```

---

## Arrays of Objects

Very common in real applications!

```javascript
let students = [
    {
        name: "John",
        age: 20,
        grade: "A"
    },
    {
        name: "Sarah",
        age: 22,
        grade: "B"
    },
    {
        name: "Mike",
        age: 21,
        grade: "A"
    }
];

// Access specific student
console.log(students[0].name);  // John
console.log(students[1].grade); // B

// Loop through students
students.forEach(student => {
    console.log(`${student.name}: ${student.grade}`);
});
// John: A
// Sarah: B
// Mike: A
```

---

## Useful Object Methods

### 1. Object.keys() - Get all property names
```javascript
let person = {
    name: "Ifeanyi",
    age: 25,
    city: "Lagos"
};

let keys = Object.keys(person);
console.log(keys);  // ["name", "age", "city"]

// Loop through keys
keys.forEach(key => {
    console.log(key + ": " + person[key]);
});
// name: Ifeanyi
// age: 25
// city: Lagos
```

### 2. Object.values() - Get all values
```javascript
let person = {
    name: "Ifeanyi",
    age: 25,
    city: "Lagos"
};

let values = Object.values(person);
console.log(values);  // ["Ifeanyi", 25, "Lagos"]
```

### 3. Object.entries() - Get key-value pairs
```javascript
let person = {
    name: "Ifeanyi",
    age: 25,
    city: "Lagos"
};

let entries = Object.entries(person);
console.log(entries);
// [["name", "Ifeanyi"], ["age", 25], ["city", "Lagos"]]

// Loop through entries
entries.forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
```

### 4. Object.assign() - Copy/Merge objects
```javascript
let person = { name: "Ifeanyi", age: 25 };
let details = { city: "Lagos", country: "Nigeria" };

// Merge objects
let merged = Object.assign({}, person, details);
console.log(merged);
// { name: "Ifeanyi", age: 25, city: "Lagos", country: "Nigeria" }

// Copy object
let copy = Object.assign({}, person);
console.log(copy);  // { name: "Ifeanyi", age: 25 }
```

### 5. hasOwnProperty() - Check if property exists
```javascript
let person = {
    name: "Ifeanyi",
    age: 25
};

console.log(person.hasOwnProperty("name"));   // true
console.log(person.hasOwnProperty("email"));  // false

// Use in conditions
if (person.hasOwnProperty("age")) {
    console.log("Age is: " + person.age);
}
```

---

## Object Destructuring (ES6)

Extract properties into variables easily!

```javascript
let person = {
    name: "Ifeanyi",
    age: 25,
    city: "Lagos"
};

// Old way
let name = person.name;
let age = person.age;

// Destructuring (new way)
let { name, age, city } = person;

console.log(name);  // Ifeanyi
console.log(age);   // 25
console.log(city);  // Lagos

// With different variable names
let { name: personName, age: personAge } = person;
console.log(personName);  // Ifeanyi
console.log(personAge);   // 25
```

---

## Spread Operator with Objects

Copy and merge objects easily!

```javascript
let person = {
    name: "Ifeanyi",
    age: 25
};

// Copy object
let personCopy = { ...person };
console.log(personCopy);  // { name: "Ifeanyi", age: 25 }

// Merge objects
let contact = {
    email: "ifeanyi@example.com",
    phone: "123-456"
};

let fullPerson = { ...person, ...contact };
console.log(fullPerson);
// { name: "Ifeanyi", age: 25, email: "ifeanyi@example.com", phone: "123-456" }

// Add/Override properties
let updated = { ...person, age: 26, city: "Lagos" };
console.log(updated);
// { name: "Ifeanyi", age: 26, city: "Lagos" }
```

---

## Real-World Examples

### Example 1: Product Catalog
```javascript
let product = {
    id: 101,
    name: "Laptop",
    price: 1000,
    inStock: true,
    specs: {
        ram: "16GB",
        storage: "512GB SSD",
        processor: "Intel i7"
    },
    
    getInfo() {
        return `${this.name} - $${this.price}`;
    },
    
    applyDiscount(percent) {
        this.price = this.price * (1 - percent / 100);
        return this.price;
    }
};

console.log(product.getInfo());  // Laptop - $1000
product.applyDiscount(20);
console.log(product.getInfo());  // Laptop - $800
```

### Example 2: User Profile
```javascript
let user = {
    username: "ifeanyi_dev",
    email: "ifeanyi@example.com",
    isVerified: true,
    posts: 45,
    followers: 1200,
    following: 350,
    
    follow(username) {
        this.following++;
        console.log(`Now following ${username}`);
    },
    
    post(content) {
        this.posts++;
        console.log("Posted:", content);
    },
    
    getEngagement() {
        return ((this.followers / this.following) * 100).toFixed(2) + "%";
    }
};

user.follow("sarah_codes");
user.post("Learning JavaScript objects!");
console.log("Engagement:", user.getEngagement());
```

### Example 3: Shopping Cart
```javascript
let cart = {
    items: [],
    
    addItem(product, quantity) {
        this.items.push({
            product: product,
            quantity: quantity
        });
        console.log(`Added ${quantity}x ${product.name}`);
    },
    
    getTotal() {
        return this.items.reduce((total, item) => {
            return total + (item.product.price * item.quantity);
        }, 0);
    },
    
    getItemCount() {
        return this.items.reduce((count, item) => {
            return count + item.quantity;
        }, 0);
    },
    
    clear() {
        this.items = [];
        console.log("Cart cleared");
    }
};

// Usage
cart.addItem({ name: "Laptop", price: 1000 }, 1);
cart.addItem({ name: "Mouse", price: 20 }, 2);
console.log("Total items:", cart.getItemCount());  // 3
console.log("Total price:", cart.getTotal());      // 1040
```

### Example 4: Bank Account
```javascript
let account = {
    accountNumber: "123456789",
    holder: "Ifeanyi Stanley",
    balance: 1000,
    currency: "USD",
    
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${this.currency}${amount}`);
            this.showBalance();
        }
    },
    
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew ${this.currency}${amount}`);
            this.showBalance();
        } else {
            console.log("Insufficient funds");
        }
    },
    
    showBalance() {
        console.log(`Balance: ${this.currency}${this.balance}`);
    }
};

account.deposit(500);
account.withdraw(200);
account.showBalance();
```

---

## Comparing Arrays vs Objects

| Feature | Arrays | Objects |
|---------|--------|---------|
| **Order** | Yes (indexed) | No specific order |
| **Access** | By index `arr[0]` | By key `obj.name` |
| **Best For** | Lists of similar items | Related properties |
| **Example** | `["Apple", "Banana"]` | `{ name: "Apple", price: 2 }` |

### When to Use Arrays:
- List of similar items
- Order matters
- Need to loop through items
- Example: list of users, products, todos

### When to Use Objects:
- Related properties
- Named access
- Different types of data
- Example: user profile, product details, settings

---

## Looping Through Objects

### Method 1: for...in
```javascript
let person = {
    name: "Ifeanyi",
    age: 25,
    city: "Lagos"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}
// name: Ifeanyi
// age: 25
// city: Lagos
```

### Method 2: Object.keys()
```javascript
let person = {
    name: "Ifeanyi",
    age: 25,
    city: "Lagos"
};

Object.keys(person).forEach(key => {
    console.log(key + ": " + person[key]);
});
```

### Method 3: Object.entries()
```javascript
let person = {
    name: "Ifeanyi",
    age: 25,
    city: "Lagos"
};

Object.entries(person).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
```

---

## JSON (JavaScript Object Notation)

Convert objects to/from JSON strings (for storage and APIs).

```javascript
let person = {
    name: "Ifeanyi",
    age: 25,
    city: "Lagos"
};

// Object to JSON string
let jsonString = JSON.stringify(person);
console.log(jsonString);
// '{"name":"Ifeanyi","age":25,"city":"Lagos"}'

// JSON string to object
let jsonObj = JSON.parse(jsonString);
console.log(jsonObj.name);  // Ifeanyi

// Pretty print JSON
let prettyJson = JSON.stringify(person, null, 2);
console.log(prettyJson);
/*
{
  "name": "Ifeanyi",
  "age": 25,
  "city": "Lagos"
}
*/
```

---

## Common Mistakes

### ❌ Mistake 1: Using undefined properties
```javascript
let person = { name: "Ifeanyi" };
console.log(person.age);  // undefined (property doesn't exist)
```
**Fix:** Check with `hasOwnProperty()` or use optional chaining `?.`

### ❌ Mistake 2: Modifying objects without realizing
```javascript
let person1 = { name: "John" };
let person2 = person1;  // Both reference same object!
person2.name = "Mike";
console.log(person1.name);  // Mike (changed!)
```
**Fix:** Create a copy: `let person2 = { ...person1 };`

### ❌ Mistake 3: Forgetting `this` in methods
```javascript
let person = {
    name: "Ifeanyi",
    greet() {
        console.log("Hello " + name);  // WRONG! name is not defined
    }
};
```
**Fix:** Use `this.name`

---

## Practice Exercises

Create `02-core-concepts/exercises/objects-practice.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Objects Practice</title>
</head>
<body>
    <h1>Check Console (F12)</h1>
    <script>
        // Exercise 1: Create a person object
        let person = {
            name: "Ifeanyi",
            age: 25,
            city: "Lagos",
            
            introduce() {
                console.log(`Hi, I'm ${this.name} from ${this.city}`);
            }
        };
        
        person.introduce();

        // Exercise 2: Product with methods
        let product = {
            name: "Laptop",
            price: 1000,
            stock: 10,
            
            buy(quantity) {
                if (quantity <= this.stock) {
                    this.stock -= quantity;
                    console.log(`Bought ${quantity}. Stock: ${this.stock}`);
                } else {
                    console.log("Not enough stock!");
                }
            }
        };
        
        product.buy(3);
        product.buy(5);

        // Exercise 3: Array of objects
        let students = [
            { name: "John", score: 85 },
            { name: "Sarah", score: 92 },
            { name: "Mike", score: 78 }
        ];
        
        let average = students.reduce((sum, s) => sum + s.score, 0) / students.length;
        console.log("Average score:", average);
        
        let topStudent = students.reduce((top, s) => 
            s.score > top.score ? s : top
        );
        console.log("Top student:", topStudent.name);
    </script>
</body>
</html>
```

---

## Key Takeaways ✓

- [ ] Objects store related data as key-value pairs
- [ ] Access properties with dot or bracket notation
- [ ] Objects can have methods (functions)
- [ ] `this` refers to the current object
- [ ] Objects can be nested
- [ ] Arrays of objects are very common
- [ ] Use Object.keys/values/entries to loop
- [ ] JSON is for converting objects to/from strings

**Next:** String manipulation! Open `03-strings-manipulation.md` 💪
