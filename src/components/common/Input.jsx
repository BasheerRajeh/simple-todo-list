const Input = (props) => {
    const {
        name,
        value,
        label,
        placeholder = "",
        type = "text",
        row = "3",
        onChange,
    } = props;

    const isTextarea = type === "textarea";

    return (
        <>
            <div className="mb-3">
                {label && (
                    <label htmlFor={name} className="form-label">
                        {label}
                    </label>
                )}
                {!isTextarea && (
                    <input
                        type={type}
                        name={name}
                        value={value}
                        placeholder={placeholder}
                        onChange={(e) => onChange(e.currentTarget.value)}
                        className="form-control"
                        autoComplete="off"
                    />
                )}
                {isTextarea && (
                    <textarea
                        name={name}
                        rows={row}
                        placeholder={placeholder}
                        onChange={(e) => onChange(e.currentTarget.value)}
                        className="form-control"
                        value={value}
                    >
                    </textarea>
                )}
            </div>
        </>
    );
};

export default Input;
