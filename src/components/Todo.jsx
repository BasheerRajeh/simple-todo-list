const Todo = (props) => {
    const { item, onDelete } = props;
    return (
        <div className="row d-flex justify-content-between align-content-center">
            <p className="col">{item.task}</p>
            <div className="col d-flex justify-content-end">
                <button
                    onClick={() => onDelete(item)}
                    className="btn btn-outline-danger btn-sm"
                >
                    X
                </button>
            </div>
        </div>
    );
};

export default Todo;
