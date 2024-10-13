import React from 'react';
import styles from './../../styles/AppointmentDiscovery.module.scss';
import Button from '../button';
import AppointmentCard from './components/appointement-card';

const AppointmentDiscovery = () => {
    return (
        <div className={styles.AppointmentDiscovery}>
            <div className={styles.containerAppointment}>
                <div className={styles.backgroundGrey} />

                <div className={styles.appointment}>
                    <div className={styles.title}>Passez au niveau supérieur</div>

                    <div className={styles.text}>
                        Vous souhaitez en savoir plus sur notre plateforme, nos équipes se tiennent à votre disposition pour vous vous de plus amples informations
                    </div>

                    <div className={styles.containerButton}>
                        <Button label="Planifiez un rendez-vous découverte" onClick={() => alert('oui')} isOrange />
                    </div>

                    <div className={styles.menShakingHands} />
                </div>
            </div>

            <div className={styles.h2Description}>
                <div className={styles.h2}>Une plateforme tout-en-un pour une expérience immobilière exceptionnelle</div>
                <div className={styles.description}>
                    <div>
                        Notre plateforme a été créée par une équipe de professionnels de l'immobilier, pour répondre aux besoins de votre activité. Nous avons concu la solution
                        idéale pour vous aider à développer votre entreprise et offrir une expérience client inégalée
                    </div>
                </div>
            </div>

            <div className={styles.containerCard}>
                <AppointmentCard
                    title="Augmentez votre chiffre d'affaires"
                    text="Soyez alerté dès qu'une nouvelle opportunité se présente sur votre secteur et automatisez la prise de contact avec vos prospects grâce à notre business tracker."
                />
                <AppointmentCard
                    title="Des conseillers plus productifs"
                    text="Automatisez vos tâches chronophages grâce à nos intégrations natives et concentrez-vous sur des activités à forte valeur ajoutée."
                />
                <AppointmentCard
                    title="Une marque unique et moderne"
                    text="Pilotez votre marketing et magnifiez votre marque grâce à des supports publicitaires sur-mesure conçus pour répondre à vos besoins sur notre marketing center."
                />
            </div>

            <div className={styles.containerButton}>
                <div className={styles.button}>
                    <Button label="Découvrez toutes nos fonctionnalités" onClick={() => alert('oui')} isPurple />
                </div>
            </div>
        </div>
    );
};

export default AppointmentDiscovery;
