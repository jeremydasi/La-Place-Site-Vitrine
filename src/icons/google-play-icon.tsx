import React from 'react';
import { PropsIcon } from './props-icon';


const GooglePlayIcon: React.FunctionComponent<PropsIcon> = ({ color, height, width }) => {
    return(
        <svg width={width} height={height} viewBox="0 0 17 20" fill={color}>
            <path d="M1.56765 0.999906C1.90232 0.956455 2.24169 1.03069 2.52765 1.20991L12.2777 6.75241L9.81015 9.24991L1.56765 0.999906ZM0.817654 1.74991C0.770634 1.91319 0.74789 2.0825 0.750154 2.25241V17.7474C0.74789 17.9173 0.770634 18.0866 0.817654 18.2499L9.06766 9.99991L0.817654 1.74991ZM9.81766 10.7499L1.56765 18.9999C1.90248 19.0473 2.24319 18.9728 2.52765 18.7899L12.2777 13.2474L9.81766 10.7499ZM16.2077 8.99491L13.2527 7.31491L10.5527 9.99991L13.2452 12.6924L16.2002 11.0124C17.1752 10.4574 17.1752 9.54241 16.2002 8.98741L16.2077 8.99491Z" fill="white"/>
        </svg>
    )
}

export default GooglePlayIcon;