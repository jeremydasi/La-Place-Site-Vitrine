import React from 'react';
import { PropsIcon } from './props-icon';

const TwooIcon: React.FunctionComponent<PropsIcon> = ({ color, height, width }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 21 20" fill={color} xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_997_20506)">
                <path
                    d="M9.39178 14.0989C9.44512 14.0539 9.49928 14.0072 9.54928 13.958C6.76512 16.6897 2.22512 15.4147 1.16095 11.5622V11.5564C-0.266549 6.31471 5.75262 2.33305 9.54762 5.99971C9.62678 6.08388 14.8693 11.6747 14.536 11.3189H14.551C15.3335 12.1255 16.4651 12.0372 17.1385 11.3322C17.8626 10.5755 17.8885 9.34055 17.1776 8.57138C16.0551 7.27888 13.851 8.24471 14.0618 10.1605L12.8001 8.87555L11.3368 7.47638C11.6385 6.87721 12.0343 6.35305 12.5301 5.89971C12.4768 5.94555 12.4226 5.99305 12.3726 6.04055C15.1676 3.29888 19.7043 4.60388 20.761 8.43971V8.44471C22.1918 13.6855 16.166 17.6672 12.3743 14.0005C12.2968 13.9172 7.05762 8.29138 7.38928 8.64805L7.38595 8.63555C7.37262 8.63555 7.37262 8.62305 7.37262 8.62305C6.55095 7.77555 5.43678 7.90305 4.78512 8.59721C4.06012 9.35388 4.03512 10.5889 4.74762 11.3464C5.82095 12.6089 8.07262 11.673 7.86095 9.71888C7.94262 9.80305 10.7685 12.7039 10.5885 12.5197C10.131 13.4322 9.61928 13.8514 9.39178 14.0989Z"
                    fill="#8295E4"
                />
            </g>
            <defs>
                <clipPath id="clip0_997_20506">
                    <rect width="20" height="20" fill="white" transform="translate(0.960938)" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default TwooIcon;