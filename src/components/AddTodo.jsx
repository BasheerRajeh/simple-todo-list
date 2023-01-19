import { useState } from "react";
import Input from "./common/Input";

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
            <form className="row p-2 d-flex justify-content-between align-content-center">
                <Input
                    name="task"
                    value={task}
                    placeholder={"Add a new task..."}
                    onChange={setTask}
                    className="col"
                />
                {task.trim() !== "" && (
                    <div className="col-auto d-flex justify-content-end">
                        <button type="submit" onClick={handleAdd} className="btn btn-primary">
                            Add Todo
                        </button>
                    </div>
                )}
            </form>
        </>
    );
};

export default AddTodo;
