import React from 'react';
import styles from './../../styles/VersionScreen.module.scss';
import Button from '../button';

const CenterPage = () => {
    return (
        <section className={styles.containerCard}>
            <div className={styles.cards}>
                <div className={styles.h2}>Version mobile</div>
                <div className={styles.p}>
                    Nous savons que les professionnels de l'immobilier passent la majorité de leur temps sur le terrain. Notre solution a été développée pour répondre à vos besoins
                    spécifiques en vous permettant d'accéder à toutes les fonctionnalités essentielles de notre plateforme depuis votre smartphone ou tablette.
                </div>
                <div className={styles.button}>
                    <Button label="Découvrez" onClick={() => alert('oui')} isPurple />
                </div>
            </div>

            <div className={styles.cards}>
                <div className={styles.h2}>Version bureau</div>
                <div className={styles.p}>
                    Notre plateforme tout-en-un est également disponible sur ordinateur. Nous avons accordé une grande attention à vous offrir l'outil le plus complet du marché
                    tout en vous proposant une expérience d'utilisation intuitive pour vous permettre de vous concentrer sur votre coeur de métier : L'humain.
                </div>
                <div className={styles.button}>
                    <Button label="Découvrez" onClick={() => alert('oui')} isPurple />
                </div>
            </div>
        </section>
    );
};

export default CenterPage;
