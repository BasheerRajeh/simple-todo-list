import { useState } from "react";
import Input from "./common/Input";
import Modal from "./Modal";
import formatDate from "./utils/formatDate";

const AddTodo = (props) => {
    const { onAdd } = props;
    const [task, setTask] = useState("");
    const [dueDate, setDueDate] = useState(formatDate());
    const [description, setDescription] = useState("");

    const handleAdd = () => {
        const todo = {
            task: task,
            dueDate: dueDate,
            description: description
        };
        console.log(dueDate);
        onAdd(todo);
        setTask("");
        setDueDate(formatDate());
        setDescription("");
    };

    const handleClear = () => {
        setTask("");
        setDueDate(formatDate());
        setDescription("");
    }


    return (
        <>
            <button
                className="btn btn-primary w-100 p-2 mb-2"
                data-bs-toggle="modal"
                data-bs-target="#add-task"
                onClick={handleClear}
            >
                Add Task
            </button>
            <Modal id='add-task' title="Add Task" onCancel={handleClear} onAction={handleAdd}>
                <Input
                    label="Task Title"
                    name="task-title"
                    value={task}
                    placeholder="Task Title ..."
                    onChange={setTask}
                />
                <Input
                    type="datetime-local"
                    name="dueDate"
                    value={dueDate}
                    placeholder="Task Title ..."
                    onChange={setDueDate}
                />
                <Input
                    type="textarea"
                    name="description"
                    value={description}
                    placeholder="Task Description ..."
                    onChange={setDescription}
                />
            </Modal>
        </>
    );
};

export default AddTodo;
