import React from 'react';
import styles from '../../../styles/CustomInput.module.scss';

interface InputProps {
    type: string;
    name: string;
    placeholder: string;
    isError?: boolean;
    label?: string;
    onChangeText: (text: string) => void;
    value: string;
    pattern: string;
}

const CustomInput: React.FunctionComponent<InputProps> = ({ isError = false, type, name, placeholder, label, onChangeText, value, pattern }) => {
    return (
        <div className={styles.CustomInputContainer}>
            {label && <label className={isError ? styles.CustomLabelError : styles.CustomLabel}>{label}</label>}

            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className={isError ? styles.CustomInputError : styles.CustomInput}
                onChange={(event) => onChangeText(event.target.value)}
                value={value}
                pattern={pattern}
            />
        </div>
    );
};

export default CustomInput;
