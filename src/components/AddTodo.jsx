import moment from "moment";
import { useState } from "react";
import GroupInput from "./common/GroupInput";

const DATE_TIME_FORMAT = 'yyyy-MM-DDThh:mm';

const AddTodo = (props) => {
    const { onAdd } = props;
    const [task, setTask] = useState("");
    const [dueDate, setDueDate] = useState(moment().format(DATE_TIME_FORMAT));

    console.log(dueDate);
    const handleAdd = () => {
        const todo = {
            task: task,
            dueDate: dueDate,
        };
        onAdd(todo);
        setTask("");
        setDueDate(moment().format(DATE_TIME_FORMAT));
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
                            className="btn btn-primary"
                        >
                            Add Todo
                        </button>
                    </div>
                )}
            </form>
        </>
    );
};

export default AddTodo;
