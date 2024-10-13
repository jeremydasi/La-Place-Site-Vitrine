import React from 'react';
import { PropsIcon } from './props-icon';

const LogoIcon: React.FunctionComponent<PropsIcon> = ({ color, height, width }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 160 48" fill="none">
            <path d="M16.3006 31.4596L6.08228 25.7022V22.5114L16.3006 16.7774V20.5338L9.17298 24.0662L16.3006 27.7313V31.4596Z" fill={color} />
            <path d="M17.2461 33.9906L20.9373 14.0084H23.0858L19.3531 33.9906H17.2461Z" fill={color} />
            <path d="M24.0303 31.4754V27.7436L31.1664 24.1059L24.0303 20.5069V16.8031L34.2588 22.5377V25.7022L24.0303 31.4754Z" fill={color} />
            <path
                d="M20.1699 48.0001L0 36.0009V11.9997L20.1699 0L40.341 12.0003V35.9992L20.1699 48.0001ZM2.04628 34.7826L20.1699 45.5651L38.2947 34.7826V13.2175L20.1699 2.43446L2.04628 13.217V34.7826Z"
                fill={color}
            />
            <path
                d="M53.418 32.1688H48.895V9.36374H53.418V32.1688ZM63.6918 19.1183C61.2364 19.1183 59.3303 21.1824 59.3303 23.7126C59.3303 26.2761 61.2364 28.3069 63.6918 28.3069C66.2763 28.3069 68.2148 26.2761 68.2148 23.7126C68.2148 21.1824 66.2117 19.1183 63.6918 19.1183ZM68.1502 32.1688V30.9037C66.9871 31.8359 65.1779 32.4018 63.3041 32.4018C58.7811 32.4018 54.9365 28.6398 54.9365 23.7126C54.9365 18.7854 58.7811 14.9235 63.3041 14.9235C65.1779 14.9235 66.9871 15.5228 68.1502 16.4549V15.09H72.6409V32.1688H68.1502ZM89.7638 19.1183C87.1792 19.1183 85.2407 21.1491 85.2407 23.7126C85.2407 26.2428 87.2438 28.3069 89.7638 28.3069C92.2191 28.3069 94.1252 26.2428 94.1252 23.7126C94.1252 21.1491 92.2191 19.1183 89.7638 19.1183ZM90.1514 32.4018C88.2776 32.4018 86.4684 31.8026 85.3053 30.8704V38.0282H80.8146V15.09H85.3053V16.4216C86.4684 15.4895 88.2776 14.9235 90.1514 14.9235C94.6745 14.9235 98.519 18.6855 98.519 23.6127C98.519 28.5399 94.6745 32.4018 90.1514 32.4018ZM104.56 32.1688H100.037V9.36374H104.56V32.1688ZM114.834 19.1183C112.379 19.1183 110.473 21.1824 110.473 23.7126C110.473 26.2761 112.379 28.3069 114.834 28.3069C117.419 28.3069 119.357 26.2761 119.357 23.7126C119.357 21.1824 117.354 19.1183 114.834 19.1183ZM119.293 32.1688V30.9037C118.13 31.8359 116.32 32.4018 114.447 32.4018C109.924 32.4018 106.079 28.6398 106.079 23.7126C106.079 18.7854 109.924 14.9235 114.447 14.9235C116.32 14.9235 118.13 15.5228 119.293 16.4549V15.09H123.783V32.1688H119.293ZM138.289 25.9099L141.779 28.207C140.195 30.8371 137.675 32.5683 134.057 32.5683C128.92 32.5683 125.302 28.6398 125.302 23.6793C125.302 18.7188 128.92 14.757 134.057 14.757C137.708 14.757 140.26 16.5548 141.811 19.2182L138.289 21.482C137.449 20.0505 136.254 18.9851 134.219 18.9851C131.602 18.9851 129.825 20.8828 129.825 23.6793C129.825 26.4758 131.602 28.4068 134.219 28.4068C136.254 28.4068 137.449 27.3414 138.289 25.9099ZM159.418 28.5067C157.803 31.0036 155.251 32.5683 151.568 32.5683C146.269 32.5683 142.845 28.7397 142.845 23.6793C142.845 18.7521 146.398 14.757 151.6 14.757C156.834 14.757 160 18.4858 160 23.4463C160 24.1121 159.935 24.9777 159.935 25.0776H147.271C147.755 27.2416 149.338 28.6398 151.665 28.6398C153.668 28.6398 155.121 27.7409 156.058 26.376L159.418 28.5067ZM151.568 18.5523C149.468 18.5523 148.014 19.7176 147.432 21.6485H155.477C154.992 19.5844 153.377 18.5523 151.568 18.5523Z"
                fill={color}
            />
        </svg>
    );
};

export default LogoIcon;