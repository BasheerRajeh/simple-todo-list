import Todo from "./Todo";


const TodoList = () => {
    return (
        <ul className="list-group">
            <li className="list-group-item"><Todo /></li>
            <li className="list-group-item"><Todo /></li>
            <li className="list-group-item"><Todo /></li>
            <li className="list-group-item"><Todo /></li>
        </ul>
    );
}

export default TodoList;