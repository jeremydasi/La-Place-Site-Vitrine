import React from 'react';
import styles from './../../styles/StatPage.module.scss';
import Stat from './components/stat';

const CenterPage = () => {
    return (
        <section className={styles.containerStat}>
            <div className={styles.stat}>
                <div className={styles.pourcent}>
                    <Stat label="54%" />
                </div>
                <div className={styles.p}>Des français souhaitent que les agents immobiliers soient plus innovants.</div>

                <div className={styles.pourcent}>
                    <Stat label="83%" />
                </div>
                <div className={styles.p}>Des particuliers attendent plus de transparence des agents immobiliers.</div>

                <div className={styles.pourcent}>
                    <Stat label="81%" />
                </div>
                <div className={styles.p}>Des vendeurs souhaitent un tableau de bord pour suivre la vente de leur bien.</div>
            </div>
        </section>
    );
};

export default CenterPage;
