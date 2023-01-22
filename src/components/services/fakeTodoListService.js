export function saveTodoList(todoList) {
    localStorage.setItem("todos", JSON.stringify(todoList));
}

export function loadTodoList() {
    const todos = localStorage.getItem('todos') ?? [];
    return JSON.parse(todos);
}