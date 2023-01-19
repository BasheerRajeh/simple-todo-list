import { useState } from "react";
import AddTodo from "./AddTodo";
import GroupList from "./common/GroupList";
import Pagination from "./common/Pagination";
import Todo from "./Todo";
import paginate from "./utils/paginate";

const TodoList = () => {
    const [allTodos, setAllTodos] = useState([
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

    const [pageSize] = useState(5);

    const [currentPage, setCurrentPage] = useState(1);

    const handleAdd = (todo) => {
        setAllTodos((prev) => {
            const newTodo = { id: Math.random().toString(36).slice(2, 7), ...todo };
            return [newTodo, ...prev];
        });
    };

    const handleDelete = (todo) => {
        setAllTodos((prev) => {
            return prev.filter((t) => t.id !== todo.id);
        });
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const todos = paginate(allTodos, currentPage, pageSize);

    return (
        <div>
            <AddTodo onAdd={handleAdd} />
            <GroupList items={todos} component={Todo} onDelete={handleDelete} />
            <Pagination
                totalSize={allTodos.length}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default TodoList;
