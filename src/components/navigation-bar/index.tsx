import React, { useState } from 'react';
import Button from '../button';
import styles from './../../styles/NavigationBar.module.scss';
import { LogoIcon } from '@/icons';
import CustomModal from '../custom-modal';
import Image from 'next/image';
import favicon from './../../assets/favicon.svg';
import CustomInput from './components';

const NavigationBar = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const [isVisible, setIsVisible] = useState(false);
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        mail: '',
    });
    const [userError, setUserError] = useState({
        firstName: false,
        lastName: false,
        mail: false,
    });

    const onClose = () => setIsVisible(false);

    const onSubmit = async () => {
        let count = 0;
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstName: user.firstName, lastName: user.lastName, mail: user.mail }),
        };

        await fetch('http://loadbalancerapigateway-1778706376.eu-west-3.elb.amazonaws.com/newsletter/register/beta', requestOptions);

        if (user.firstName.length < 3) {
            setUserError((prev) => {
                return {
                    ...prev,
                    firstName: true,
                };
            });
            count++;
        }

        if (user.lastName.length < 3) {
            setUserError((prev) => {
                return {
                    ...prev,
                    lastName: true,
                };
            });
            count++;
        }

        if (user.mail.length < 3 && emailRegex.test(user.mail)) {
            setUserError((prev) => {
                return {
                    ...prev,
                    mail: true,
                };
            });
            count++;
        }

        if (count !== 0) {
            return;
        }
        setIsVisible(false);
        setUserError({ firstName: false, lastName: false, mail: false });
        setUser({ firstName: '', lastName: '', mail: '' });
    };

    const handleUser = (value: string, name: string) => {
        setUser((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    /*
        Input padding dans le container: 4px
        width des inputs
    */

    return (
        <div className={styles.navbar}>
            <div className={styles.left}>
                <div className={styles.icon}>
                    <LogoIcon width={160} height={48} color="#222831" />
                </div>
            </div>

            {/* 
            TODO: Waiting approval by Design for next version
            <div className={styles.center}>
                <a href="#">Plateforme</a>
                <a href="#">Automatisations</a>
                <a href="#">Tarifs</a>
                <a href="#">Blog</a>
            </div> */}

            <div className={styles.right}>
                <Button label="Connexion" onClick={() => alert('oui')} />

                <Button label="Devenir bêta testeur" onClick={() => setIsVisible(true)} isBlack />
            </div>

            <CustomModal isVisible={isVisible} onClose={onClose}>
                <div className={styles.containerModal}>
                    <div className={styles.Image}>
                        <Image alt="TODO" src={favicon} />
                    </div>

                    <div className={styles.form}>
                        <div className={styles.row}>
                            <CustomInput
                                onChangeText={(value: string) => handleUser(value, 'firstName')}
                                label="Prénom"
                                type="text"
                                name="name"
                                placeholder="Entrez votre prénom"
                                isError={userError.firstName}
                                value={user.firstName}
                            />

                            <CustomInput
                                onChangeText={(value: string) => handleUser(value, 'lastName')}
                                label="Nom"
                                type="text"
                                name="name"
                                placeholder="Entre votre nom"
                                isError={userError.lastName}
                                value={user.lastName}
                            />
                        </div>

                        <div className={styles.Input}>
                            <CustomInput
                                label="Adresse mail professionnelle"
                                type="Email"
                                name="Email"
                                placeholder="Entrez votre adresse mail"
                                isError={userError.mail}
                                onChangeText={(value: string) => handleUser(value, 'mail')}
                                value={user.mail}
                            />
                        </div>

                        <div className={styles.containerButton}>
                            <Button label="Je veux devenir bêta testeur !" onClick={onSubmit} isModal />
                        </div>
                    </div>
                </div>
            </CustomModal>
        </div>
    );
};

export default NavigationBar;
