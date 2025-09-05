
## ✅ Node.js Revision Notes (with Wrappers & Internals)

---

### 🟢 1. **Node.js Basics**

* **Node.js** is a runtime environment that lets you run JavaScript outside the browser using **V8 engine**.
* **Asynchronous, single-threaded** with **event-driven architecture**.
* Ideal for I/O-heavy tasks like APIs, file systems, streams, etc.

---

### 📦 2. **Node.js Module System**

#### ✅ **Types of Modules:**

1. **Core modules** – built-in (`fs`, `path`, `http`)
2. **Local modules** – custom created
3. **Third-party modules** – via NPM (`express`, `lodash`, etc.)

#### ✅ **How Node.js wraps modules:**

Every file in Node is wrapped inside a function like this:

```js
(function (exports, require, module, __filename, __dirname) {
  // your module code here
});
```

So in each file, these variables are available:

* `exports` – object to export variables/functions
* `require` – function to import other modules
* `module` – contains info about the current module
* `__filename` – full path of current file
* `__dirname` – directory name of the current module

#### ✅ **Exporting & Importing:**

```js
// file: greet.js
const sayHi = () => console.log("Hi!");
module.exports = sayHi;

// file: app.js
const greet = require('./greet');
greet();
```

---

### 📦 3. **NPM (Node Package Manager)**

#### ✅ **What it does:**

* Installs third-party packages
* Manages dependencies via `package.json`

#### ✅ **Common commands:**

* `npm init` or `npm init -y` → create `package.json`
* `npm install <pkg>` → install locally
* `npm install -g <pkg>` → install globally
* `npm uninstall <pkg>`
* `npm update`

#### ✅ **Files:**

* `node_modules/` – where packages are stored
* `package-lock.json` – locks package versions

---

### 📁 4. **Path Module (`path`)**

Used to work with file paths. Always OS-independent.

```js
const path = require('path');
```

#### ✅ **Common methods:**

* `path.basename(__filename)` → filename
* `path.dirname(__filename)` → directory name
* `path.extname(__filename)` → file extension
* `path.join('a', 'b')` → `'a/b'` (safe joining)
* `path.resolve('a', 'b')` → absolute path

---

### 📂 5. **File System (`fs`) Module**

```js
const fs = require('fs');
```

#### ✅ **Reading files:**

```js
fs.readFile('file.txt', 'utf8', (err, data) => {});
let data = fs.readFileSync('file.txt', 'utf8');
```

#### ✅ **Writing files:**

```js
fs.writeFile('file.txt', 'Hello', (err) => {});
fs.writeFileSync('file.txt', 'Hello');
```

#### ✅ **Appending files:**

```js
fs.appendFile('file.txt', ' More data', () => {});
```

#### ✅ **Deleting files:**

```js
fs.unlink('file.txt', () => {});
```

#### ✅ **Creating directory:**

```js
fs.mkdir('folder', () => {});
fs.mkdirSync('folder');
```

---

### 🧠 Summary Table

| Topic            | Key Points                                                         |
| ---------------- | ------------------------------------------------------------------ |
| Module Wrapper   | Node wraps each file inside a function with exports, require, etc. |
| `__dirname`      | Directory of the current module                                    |
| `__filename`     | Full path to the current file                                      |
| `module.exports` | Object used to expose functionality to other files                 |
| `require()`      | Function used to import modules                                    |

---

Let me know if you'd like **interview-style questions**, **mind maps**, or **PDF/printable version** of this.
