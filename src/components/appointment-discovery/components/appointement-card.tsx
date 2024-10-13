import { CupIcon } from '@/icons';
import React from 'react';
import styles from './../../../styles/AppointmentDiscovery.module.scss';

interface AppointmentCardProps {
    text: string;
    title: string;
}

const AppointmentCard: React.FunctionComponent<AppointmentCardProps> = ({ text, title }) => {
    return (
        <div className={styles.cardsStyle}>
            <CupIcon width={40} height={40} color="#8295E4" />

            <div className={styles.titleCard}>{title}</div>
            <div className={styles.textCard}>{text}</div>
            <div className={styles.lowCard}>En savoir plus</div>
        </div>
    );
};

export default AppointmentCard;
