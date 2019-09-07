import React, { Component } from 'react';

class Input extends Component {
    state = { focused: false, error: null};
    getSizeClass = (size) => {
        let sizeClass = ""
        switch (size) {
            case "sm":
                sizeClass = "input--sm";
                break;
            case "lg":
                sizeClass = "input--lg";
                break;
            default:
                break;
        }
        return sizeClass;
    }
    onFocus = () => {
        this.setState({
            focused: true,
            error: null
        })
    }
    onBlur = () => {
        const { touched, valid } = this.props;
        this.setState({
            focused: false,
            error: touched && !valid
        })
    }
    render() {
        const { label, required, name, cssclass, size, type, value, changeHandler } = this.props;
        const { focused, error } = this.state;
        return (
            <div className={`input ${cssclass} ${this.getSizeClass(size)} ${focused || value ? "input--focused" : ""} ${error ? "input--error" : ""}`}>
                <label htmlFor={name} className="input__label">{label}</label>
                <input type={type} onFocus={this.onFocus} {...this.props}
                    value={value}
                    onChange={changeHandler}
                    onBlur={this.onBlur} id={name} className={`input__field`} name={name} />
            </div>
        )
    }
}

export default Input;