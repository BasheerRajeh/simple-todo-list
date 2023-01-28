const GroupList = (props) => {
    const { items, component: Component, ...rest } = props;
    return (
        <ul className="list-group ">
            {items.map((item) => (
                <li key={item.id} className="list-group-item shadow">
                    <Component item={item} {...rest} />
                </li>
            ))}
        </ul>
    );
};

export default GroupList;
