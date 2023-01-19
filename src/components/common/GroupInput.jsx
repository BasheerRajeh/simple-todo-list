import Input from "./Input";

const GroupInput = (props) => {
    const { inputs } = props;

    return (
        <div className="col input-group">
            {inputs.map((input) => (
                <Input
                    key={input.name}
                    value={input.value}
                    name={input.name}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={input.onChange}
                    className={input.className}
                />
            ))}
        </div>
    );
};

export default GroupInput;
