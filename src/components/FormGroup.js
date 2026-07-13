function FormGroup(props) {


    return (
        <div>
            <label>{props.label}:</label>
            {
                props.textarea &&
                <textarea
                    value={props.value}
                    onChange={props.onChange}
                    placeholder={props.placeholder}
                    name={props.name}
                >
                </textarea>
            }
            {
                !props.textarea &&
                <input
                    type={props.type}
                    value={props.value}
                    onChange={props.onChange}
                    placeholder={props.placeholder}
                    name={props.name}
                />
            }


        </div>
    )
}

export default FormGroup