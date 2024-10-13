import React from 'react';
import styles from './../../styles/Temoignage.module.scss';
import Image from 'next/image';
import notation from './../../assets/notation.svg';
import segment from './../../assets/segment.svg';
import temoin from './../../assets/temoin.svg';

const Temoignage = () => {
    return (
        <section>
            <div>
                <div className={styles.p}>TÉMOIGNAGES</div>
                <div className={styles.h1}>Découvrez ce que disent nos clients</div>
            </div>

            <div className={styles.containerTemoignage}>
                <div>
                    <Image alt="TODO" src={temoin} />
                </div>

                <div className={styles.notation}>
                    <div>
                        <Image alt="TODO" src={notation} />
                        <div className={styles.comment}>
                            Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now.
                        </div>
                    </div>

                    <div className={styles.containerName}>
                        <div>
                            <div className={styles.name}>AR Shakir</div>
                            <div className={styles.ceo}>CEO GetNextDesign</div>
                        </div>
                        <Image alt="TODO" src={segment} className={styles.segment} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Temoignage;
