# Todo App

The Todo App is a simple web application that allows you to manage your daily tasks or to-do items. It provides a user-friendly interface where you can add, toggle, and delete your todos. The app is built using React and leverages React hooks, such as `useState`, `useEffect`, and `useReducer`, to manage the state and handle user interactions.

## Features

- Add new todos: You can easily add new tasks to your list by entering the task name in the input field and submitting the form.
- Toggle completion: By clicking on the circle icon next to a todo item, you can toggle its completion status. A completed task is visually distinguished from an incomplete one.
- Delete todos: If you no longer need a specific task, you can click the delete button to remove it from your list.
- Real-time updates: Any changes you make to your todo list are reflected in real-time, allowing you to instantly see the updates without refreshing the page.
- Persistence: The app uses the `useReducer` hook along with a reducer function to manage the state of the todos. This ensures that the todos remain persistent even if you navigate away from the page or refresh it.

![Todo App Screenshot](public/desktop-design-dark.jpg)
![Todo App Screenshot](public/mobile-design-light.jpg)
## Getting Started

To run the Todo App locally and start managing your todos, follow these steps:

1. Clone the repository: `git clone https://github.com/ASTECH12/Todolify.git`
2. Navigate to the project directory: `cd Todo`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and visit `http://localhost:5173` to access the Todo App.

## Dependencies

The Todo App relies on the following dependencies:

- React: A JavaScript library for building user interfaces.
- React-DOM: Provides the rendering capabilities for React components.
