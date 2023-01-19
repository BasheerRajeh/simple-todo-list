import { useEffect } from "react";
import { useState } from "react";
import GroupInput from "./common/GroupInput";
import formatDate from "./utils/formatDate";

const AddTodo = (props) => {
    const { todo: passedTodo, onAdd } = props;
    const [task, setTask] = useState("");
    const [dueDate, setDueDate] = useState(formatDate());

    useEffect(() => {
        if (passedTodo) {
            setTask(passedTodo.task);
            setDueDate(passedTodo.dueDate);
        }
    }, [passedTodo]);

    const handleAdd = () => {
        let todo;
        if (passedTodo)
            todo = {
                id: passedTodo.id,
                task: task,
                dueDate: dueDate,
            };
        else {
            todo = {
                task: task,
                dueDate: dueDate,
            };
        }
        onAdd(todo);
        setTask("");
        setDueDate(formatDate());
    };

    const inputs = [
        {
            name: "task",
            value: task,
            placeholder: "Add a new task...",
            onChange: setTask,
            className: "form-control",
        },
        {
            type: "datetime-local",
            name: "date",
            value: dueDate,
            onChange: setDueDate,
            className: "btn btn-outline-primary",
        },
    ];

    return (
        <>
            <form className="row p-2 d-flex justify-content-between align-content-center">
                <GroupInput inputs={inputs} />
                {task.trim() !== "" && (
                    <div className="col-auto d-flex justify-content-end">
                        <button
                            type="submit"
                            onClick={handleAdd}
                            className={`btn btn-${passedTodo ? "info" : "primary"}`}
                        >
                            {passedTodo ? "Edit Todo" : "Add Todo"}
                        </button>
                    </div>
                )}
            </form>
        </>
    );
};

export default AddTodo;
