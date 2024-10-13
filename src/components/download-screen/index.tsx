import React from 'react';
import Button from '../button';
import styles from './../../styles/DownloadScreen.module.scss';
import Image from 'next/image';
import backgroundDownload from './../../assets/backgroundDownload.svg';
import { AppleIcon, GooglePlayIcon } from '@/icons';

const DownloadScreen = () => {
    return (
        <div className={styles.containerDownload}>
            <Image className={styles.backgroundDownload} src={backgroundDownload} alt="TODO" />
            <div className={styles.mobile}>EN SAVOIR PLUS</div>
            <div className={styles.title}>Notre plateforme tout-en-un est-elle vraiment faite pour votre activité ?</div>
            <div className={styles.subTitle}>Réservez un rendez-vous découverte avec nos équipes.</div>

            <div className={styles.containerButtons}>
                <div className={styles.containerButtonPurple}>
                    {/* <AppleIcon width={17} height={21} color="#FFFFFF" /> */}
                    <Button label="Accéder à notre calendrier" onClick={() => alert('oui')} isPurple />
                </div>

                {/* <div className={styles.containerButtonBlack}>
                    <GooglePlayIcon width={16.18} height={18.03} color="#FFFFFF" />
                    <Button label="Google Play" onClick={() => alert('oui')} isBlack />
                </div> */}
            </div>
        </div>
    );
};

export default DownloadScreen;
