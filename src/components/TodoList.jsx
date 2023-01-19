import { useState } from "react";
import Todo from "./Todo";

const TodoList = () => {
    const [todos] = useState([
        { id: 1, task: "Buy groceries" },
        { id: 2, task: "Finish report" },
        { id: 3, task: "Call Mom" },
        { id: 4, task: "Workout" },
        { id: 5, task: "Pay bills" },
        { id: 6, task: "Book dentist appointment" },
        { id: 7, task: "Watch movie" },
        { id: 8, task: "Read for an hour" },
        { id: 9, task: "Plan weekend trip" },
        { id: 10, task: "Organize closet" },
    ]);
    return (
        <ul className="list-group">
            {todos.map((todo) => (
                <li key={todo.id} className="list-group-item">
                    <Todo todo={todo} />
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
