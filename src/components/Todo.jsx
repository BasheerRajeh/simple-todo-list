const Todo = ({ todo }) => {
    return (
        <div className="row d-flex justify-content-between align-content-center">
            <p className="col">{todo.task}</p>
            <div className="col d-flex justify-content-end">
                <button className="btn btn-outline-danger btn-sm">X</button>
            </div>
        </div>
    );
};

export default Todo;
