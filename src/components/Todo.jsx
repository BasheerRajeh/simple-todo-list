import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

import moment from "moment/moment";
const Todo = (props) => {
    const { item, onEdit, onDelete } = props;
    return (
        <div className="row d-flex justify-content-between align-content-center">
            <div className="col">
                <div className="d-flex align-content-start">
                    <h3 className="fw-light" >{item.task}</h3>
                </div>
                <span className="badge bg-black bg-opacity-75">{moment(item.dueDate).format('yyyy-MM-DD')}</span>&nbsp;
                <span className="badge bg-danger ">{moment(item.dueDate).format('HH:MM')}</span>
            </div>
            <div className="col d-flex align-self-center justify-content-end">
                <button
                    onClick={() => onEdit(item)}
                    className="btn btn-outline-info btn-sm me-1"
                >
                    <FontAwesomeIcon icon={regular('edit')} />
                </button>
                <button
                    onClick={() => onDelete(item)}
                    className="btn btn-outline-danger btn-sm"
                >
                    <FontAwesomeIcon icon={regular('trash-can')} />
                </button>
            </div>
        </div>
    );
};

export default Todo;
