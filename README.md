# Simple Todo List - React App

Simple Todo List is a React-based web application that allows users to easily add, manage, and delete tasks. The application utilizes localStorage to store data, ensuring that your tasks persist even if the browser is closed. The application is designed with reusability and maintainability in mind, making it easy to integrate into any project.

Check out the demo site [here](https://dulcet-dango-aab749.netlify.app/).

![Simple Todo List Demo](./demo.gif)

## Installation & Usage

Clone the repository:

```
git clone https://github.com/BasheerRajeh/simple-todo-list.git
```

Change the directory:

```
cd simple-todo-list
```

Install the dependencies:

```
npm install
```

To run the application locally:

```
npm start
```

The application will be available at http://localhost:3000.

## Features

- Add tasks
- Remove tasks
- Store tasks in localStorage
- Pagination

## File Structure

```
src/
|-- common/
|   |-- GroupInput.jsx
|   |-- GroupList.jsx
|   |-- Input.jsx
|   |-- Pagination.jsx
|-- services/
|   |-- fakeTodoListService.js
|-- utils/
|   |-- formatDate.js
|   |-- paginate.js
|-- AddTodo.jsx
|-- Modal.jsx
|-- Todo.jsx
|-- TodoList.jsx
|-- index.js
|-- index.css
```

## Dependencies

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [React DOM](https://www.npmjs.com/package/react-dom) - React package for working with the DOM
- [Bootstrap](https://getbootstrap.com/) - A popular CSS framework for responsive design
- [Font Awesome](https://fontawesome.com/) - A comprehensive icon library
- [Lodash](https://lodash.com/) - A modern JavaScript utility library
- [Moment.js](https://momentjs.com/) - A JavaScript date library for parsing, validating, manipulating, and formatting dates
- [Babel-plugin-macros](https://github.com/kentcdodds/babel-plugin-macros) - Enables zero-config, importable babel plugins

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add my feature'`)
4. Push the branch (`git push origin feature/my-feature`)
5. Create a new Pull Request

## License

[MIT](LICENSE) © Basheer Rajeh
