import moment from "moment/moment";
const Todo = (props) => {
    const { item, onDelete } = props;
    return (
        <div className="row d-flex justify-content-between align-content-center">
            <div className="col">
                <div className="d-flex align-content-start">
                    <p >{item.task}</p>
                </div>
                <span className="badge bg-black bg-opacity-75">{moment(item.dueDate).format('yyyy-MM-DD')}</span>&nbsp;
                <span className="badge bg-danger ">{moment(item.dueDate).format('HH:MM')}</span>
            </div>
            <div className="col d-flex align-self-center justify-content-end">
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
