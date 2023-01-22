const Input = (props) => {
    const {
        name,
        value,
        label,
        placeholder = "",
        type = "text",
        onChange,
        className,
    } = props;
    return (
        <>
            {label && <label for={name}>{label}</label>}
            <input
                value={value}
                name={name}
                onChange={(e) => onChange(e.currentTarget.value)}
                type={type}
                placeholder={placeholder}
                className={className}
                autoComplete='off'
            />
        </>
    );
};

export default Input;
