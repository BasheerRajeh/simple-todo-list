import { useState } from "react";
import _ from "lodash";
import AddTodo from "./AddTodo";
import GroupList from "./common/GroupList";
import Pagination from "./common/Pagination";
import Todo from "./Todo";
import paginate from "./utils/paginate";
import { useEffect } from "react";
import { loadTodoList, saveTodoList } from "./services/fakeTodoListService";

const TodoList = () => {
    const [allTodos, setAllTodos] = useState([]);

    const [pageSize] = useState(5);

    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setAllTodos(loadTodoList());
    }, []);

    const handleAdd = (todo) => {
        setAllTodos((prev) => {
            const newTodo = { id: Math.random().toString(36).slice(2, 7), ...todo };
            const newTodos = [newTodo, ...prev];
            saveTodoList(newTodos);
            return newTodos;
        });
    };

    const handleDelete = (todo) => {
        setAllTodos((prev) => {
            const newTodos = prev.filter((t) => t.id !== todo.id);
            saveTodoList(newTodos);
            return newTodos;
        });
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    const sortedTodos = _.sortBy(allTodos, ["dueDate"], "asc");

    const todos = paginate(sortedTodos, currentPage, pageSize);

    return (
        <div>
            <h1 className="fw-bold m-4">My Tasks</h1>
            <AddTodo onAdd={handleAdd} />
            <GroupList
                items={todos}
                component={Todo}
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
