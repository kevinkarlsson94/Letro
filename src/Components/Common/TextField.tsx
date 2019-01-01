import { TextField as TextInput } from '@material-ui/core';
import * as React from "react";

interface ITextFieldProps {
    onChange: () => any;
    text: string;
    placeholder?: string;
}

const TextField: React.StatelessComponent<ITextFieldProps> = ({
    onChange,
    text,
    placeholder
}) => {

    return (
        <TextInput
            value={text}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
}

export default TextField;
