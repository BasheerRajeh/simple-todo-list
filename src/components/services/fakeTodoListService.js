export function saveTodoList(todoList) {
    localStorage.setItem("todos", JSON.stringify(todoList));
}

export function loadTodoList() {
    const todos = localStorage.getItem('todos');
    if (todos) {
        return JSON.parse(todos);
    } else {
        return [];
    }
}