# 📝 Interactive React To-Do List

A functional and responsive To-Do List application built with **React** and **Vite**. This project demonstrates core React concepts like state management, array manipulation, and dynamic list rendering.

✨ Features

- **Add Tasks:** Create new tasks with validation to prevent empty entries.
- **Delete Tasks:** Remove specific tasks using the `filter` method.
- **Reorder Tasks:** Move tasks up or down the list using array destructuring for seamless swapping.
- **Persistent Logic:** Uses functional state updates to ensure data integrity.

 🛠️ Built With

- **React:** For building the user interface.
- **Vite:** For a blazing-fast development environment.
- **JavaScript (ES6+):** Utilizing modern syntax like arrow functions, spread operators, and array methods.
- **CSS3:** Custom styling for a clean user experience.

 🚀 How It Works

### The Core Logic
The app manages tasks using a `tasks` array state. Key functions include:
* `addTask()`: Uses the spread operator `[...tasks]` to append new items.
* `deleteTask(index)`: Uses `.filter()` to remove items without mutating the original state.
* `moveTaskUp/Down(index)`: Swaps array elements efficiently to change task priority.


