import { useState } from "react";
import _ from "lodash";
import AddTodo from "./AddTodo";
import GroupList from "./common/GroupList";
import Pagination from "./common/Pagination";
import Todo from "./Todo";
import paginate from "./utils/paginate";

const TodoList = () => {
    const [allTodos, setAllTodos] = useState([
        { id: 1, task: "Buy groceries", dueDate: "2022-03-22T10:00" },
        { id: 2, task: "Finish report", dueDate: "2022-03-24T14:00" },
        { id: 3, task: "Call Mom", dueDate: "2022-03-22T18:00" },
        { id: 4, task: "Workout", dueDate: "2022-03-23T07:00" },
        { id: 5, task: "Pay bills", dueDate: "2022-03-25T20:00" },
        { id: 6, task: "Book dentist appointment", dueDate: "2022-03-26T09:00" },
        { id: 7, task: "Watch movie", dueDate: "2022-03-22T19:00" },
        { id: 8, task: "Read for an hour", dueDate: "2022-03-22T20:00" },
        { id: 9, task: "Plan weekend trip", dueDate: "2022-03-24T10:00" },
        { id: 10, task: "Organize closet", dueDate: "2022-03-23T15:00" },
    ]);

    const [pageSize] = useState(5);

    const [currentPage, setCurrentPage] = useState(1);

    const [todo, setTodo] = useState();

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

    const handleEdit = (todo) => {
        setTodo(todo);
        handleDelete(todo);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    const sortedTodos = _.sortBy(allTodos, ["dueDate"], "asc");

    const todos = paginate(sortedTodos, currentPage, pageSize);

    return (
        <div>
            <AddTodo todo={todo} onAdd={handleAdd} />
            <GroupList
                items={todos}
                component={Todo}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
            <Pagination
                totalSize={sortedTodos.length}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default TodoList;
