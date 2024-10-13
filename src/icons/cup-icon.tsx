import React from 'react';
import { PropsIcon } from './props-icon';
import styles from './../styles/AppointmentDiscovery.module.scss'

const CupIcon: React.FunctionComponent<PropsIcon> = ({ color, height, width }) => {
    return (
        <svg className={styles.cup}  width={width} height={height} viewBox="0 0 40 39" fill="none">
            <path
                d="M32.3749 4C32.4991 2.7508 32.4991 1.6258 32.4991 0.25H7.50071C7.50071 1.6258 7.50071 2.7508 7.62493 4H0.000732422V5.2492C0.000732422 16.375 14.1265 24.25 17.5015 25.9984L17.4992 30.2499C17.4992 32.3757 15.875 33.9999 13.7492 33.9999H11.2484V38.9991H28.7492V33.9999H26.2484C24.1226 33.9999 22.4984 32.3757 22.4984 30.2499V26.0007C25.8734 24.2499 39.9992 16.3749 39.9992 5.25154V4.00234L32.3749 4ZM2.6257 6.5008H7.8757C8.37491 12.1258 9.7507 16.1266 11.2507 19C7.2499 15.8758 3.1249 11.5 2.6257 6.5008ZM28.8757 19C30.3757 16.1242 31.7515 12.1258 32.2507 6.5008H37.5007C36.8749 11.5 32.7499 15.8758 28.8757 19Z"
                fill={color}
            />
        </svg>
    );
};

export default CupIcon;
