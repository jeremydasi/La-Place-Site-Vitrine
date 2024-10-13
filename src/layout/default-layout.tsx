import Image from 'next/image';
import React from 'react';

import styles from './../styles/DefaultLayout.module.scss';
import WaveCloud from './../assets/cloud.svg';
import OutfitFont from '@/font/outfitFont';
import ManropeFont from '@/font/manropeFont';

interface DefaultLayoutProps {
    children: any;
    className: string;
}

const DefaultLayout: React.FunctionComponent<DefaultLayoutProps> = ({ children, className }) => {
    const SIZE_CLOUD = 850;

    return (
        <div className={`${styles.defaultLayout}`}>
            <OutfitFont />
            <ManropeFont />
            <Image className={styles.waveCloud} src={WaveCloud} width={SIZE_CLOUD} height={SIZE_CLOUD} alt="cloud in background" />
            {children}
        </div>
    );
};

export default DefaultLayout;
