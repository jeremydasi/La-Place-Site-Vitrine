import React from 'react';
import styles from '../../styles/Button.module.scss';

interface ButtonProps {
    label: string;
    onClick: () => void;
    isBlack?: boolean;
    isPurple?: boolean;
    isOrange?: boolean;
    isModal?: boolean;
}

const Button: React.FunctionComponent<ButtonProps> = ({ label, onClick, isBlack = false, isPurple = false, isOrange = false, isModal = false }) => {
    return (
        <div
            className={isOrange ? styles.buttonOrange : isPurple ? styles.buttonPurple : isBlack ? styles.buttonBlack : isModal ? styles.buttonModal : styles.button}
            onClick={onClick}
        >
            <a>{label}</a>
        </div>
    );
};

export default Button;
