import LinkedinIcon from '@/icons/linkedin-icon';
import MessengerIcon from '@/icons/messenger-icon';
import TwitterIcon from '@/icons/twitter-icon';
import TwooIcon from '@/icons/twoo-icon';
import React from 'react';
import Button from '../button';
import styles from '../../styles/Footer.module.scss';
import Link from 'next/link';
import { LogoIcon } from '@/icons';

const Footer = () => {
    return (
        <section>
            <div className={styles.footer}>
                <div>
                    <LogoIcon width={118} height={32} color="#222831" />
                    <div className={styles.text}>Faire de vous l'agent immobilier 2.0</div>
                    <div className={styles.icons}>
                        <Link href="https://www.linkedin.com/company/la-place-io/" target={'_blank'}>
                            <LinkedinIcon width={20} height={20} color="#8295E4" />
                        </Link>
                        <MessengerIcon width={20} height={20} color="#8295E4" />
                        <TwitterIcon width={20} height={20} color="#8295E4" />
                        <TwooIcon width={20} height={20} color="#8295E4" />
                    </div>
                </div>

                <div>
                    <div className={styles.tittle}>Company</div>
                    <div className={styles.informations}>À propos</div>
                    <div className={styles.informations}>Carrières</div>
                    <div className={styles.informations}>Blog</div>
                    <div className={styles.informations}>Prix</div>
                </div>

                <div>
                    <div className={styles.tittle}>Ressources</div>
                    <div className={styles.ressources}>Intégrations</div>
                    <div className={styles.ressources}>Tutorials</div>
                </div>

                <div>
                    {/* TODO: Waiting approval by Design for next version
                    <div className={styles.tittle}>Join Our Newsletter</div>
                    <div className={styles.subscribe}>
                        <input type="text" id="subscribe" name="subscribe" placeholder="Your email address" className={styles.input} />
                        <div className={styles.containerButton}>
                            <Button label="Subscribe" onClick={() => alert('bonsoir')} isPurple />
                        </div>
                    </div>
                    <div className={styles.textSubscribe}>*Will send you weekly updates for your better finance management.</div> */}
                </div>
            </div>

            <hr className={styles.hr}></hr>
            <div className={styles.copyright}>Copyright @ LA PLACE 2022. All Rights Reserved.</div>
        </section>
    );
};

export default Footer;
