import { useState } from "react";

const AddTodo = (props) => {
    const { onAdd } = props;
    const [task, setTask] = useState("");

    const handleAdd = () => {
        const todo = { task: task };
        onAdd(todo);
        setTask('');
    };

    return (
        <>
            <div className="row p-2 d-flex justify-content-between align-content-center">
                <input
                    value={task}
                    onChange={(e) => setTask(e.currentTarget.value)}
                    type="text"
                    className="col form-control"
                />
                {task.trim() !== "" && (
                    <div className="col-auto d-flex justify-content-end">
                        <button onClick={handleAdd} className="btn btn-primary">
                            Add Todo
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default AddTodo;
