import React from 'react';
import { PropsIcon } from './props-icon';

const CertificationIcon: React.FunctionComponent<PropsIcon> = ({ color, height, width }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 18 18" fill="none">
            <circle cx="9" cy="9" r="9" fill={color} />
            <path d="M5 9L7.8 12L13 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default CertificationIcon;
