import React from 'react';
import Image from 'next/image';
import smartphones from './../../assets/smartphones.svg';
import styles from './../../styles/PreviewScreen.module.scss';
import Button from '../button';
// import { CertificationIcon } from '@/icons';

const PreviewScreen = () => {
    return (
        <section className={styles.previewScreen}>
            <div className={styles.left}>
                <div className={styles.title}>Faire de vous l'agent immobilier 2.0</div>

                <div className={styles.subtitle}>
                    Notre mission chez la place est de soutenir les professionnels de l'immobilier dans la création d'une expérience client exceptionnelle. Nous sommes convaincus
                    que chaque client mérite un service personnalisé et de qualité, c'est pourquoi nous nous efforçons de fournir des solutions innovantes pour aider nos clients à
                    atteindre cet objectif.
                </div>

                <div className={styles.containerButton}>
                    <Button label="Devenir bêta testeur" onClick={() => alert('page')} isBlack />
                </div>

                {/* <div className={styles.bottom}>
                    <CertificationIcon width={18} height={18} color="#8295E4" />
                    <div>Essaie gratuit pendant 14 jours</div>
                </div> */}
            </div>

            <div className={styles.smartphones}>
                <Image alt="Smartphones" src={smartphones} />
            </div>
        </section>
    );
};

export default PreviewScreen;
