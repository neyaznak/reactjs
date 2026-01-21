# React Basics Practice Project

## React.createElement – Basic Understanding

In React, UI is created in multiple steps behind the scenes.

### How it works:

1. **`React.createElement()`**
   - Creates a **plain JavaScript object**
   - This object is also known as a **React Element**
   - It describes *what* the UI should look like

2. **`root.render()`**
   - Takes the React Element
   - Converts it into a real **HTML element**
   - Renders it into the **DOM**

### Example:
```js
// React.createElement => creates a JavaScript object
// When we render it using root.render()
// React converts it into an actual HTMLElement in the DOM

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hye ReactJS!!!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

React.createElement()
        ↓
React Element (JS Object)
        ↓
root.render()
        ↓
HTML Element in the DOM

### JSX

JSX is an HTML-like syntax written inside JavaScript that React uses to describe UI.  
It is not HTML and does not run directly in the browser.  
JSX is compiled into `React.createElement`, which creates a React Element (a JavaScript object) that React renders into real DOM elements.

**Example:**

```js
const heading = <h1 id="heading">Hello JSX</h1>;


# Parcel
 - Dev Build
 - Local Server
 - HMR = Hot Module Replacement
 - File Watching Algorithm - written in C++
 - Caching and hence fater builds (in .parcel-cache file)
 - Image Optimization 
 - Minification
 - Bundling
 - Compress
 - Consistent hashing
 - Code Splitting
 - Differential Bundling - supports older browsers
 - Diagnostics
 - Error handling
 - HTTPs support by parcel
 - Tree shaking - as removes unused code
 - Different dev and prod bundles