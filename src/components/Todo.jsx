import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

import moment from "moment/moment";
const Todo = (props) => {
    const { item, onDelete } = props;
    return (
        <div className="row d-flex justify-content-between align-content-center">
            <div className="col">
                <div className="">
                    <h3 className="fw-semibold fs-4">{item.task}</h3>
                    <p className="text-muted">{item.description}</p>
                </div>
                <span className="badge bg-black bg-opacity-75">
                    {moment(item.dueDate).format("yyyy-MM-DD")}
                </span>
                &nbsp;
                <span className="badge bg-danger ">
                    {moment(item.dueDate).format("hh:mm")}
                </span>
            </div>
            <div className="col d-flex align-self-start p-2 justify-content-end">
                <FontAwesomeIcon
                    onClick={() => onDelete(item)}
                    style={{ cursor: "pointer" }}
                    color="tomato"
                    size="xl"
                    icon={regular("trash-can")}
                />
            </div>
        </div>
    );
};

export default Todo;
