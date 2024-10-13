import React from 'react';
import Button from '../button';
import styles from '../../styles/Articles.module.scss';
import Image from 'next/image';
import seaSide from './../../assets/seaSide.svg';
import womanInAField from './../../assets/womanInAField.svg';
import womanOnBlueBackground from './../../assets/womanOnBlueBackground.svg';
import manInYellowSweater from './../../assets/manInYellowSweater.svg';
import womanFromBehind from './../../assets/womanFromBehind.svg';
import manWithStand from './../../assets/manWithStand.svg';
import womanHoldingACup from './../../assets/womanHoldingACup.svg';
import Article from './components/article';

const Articles = () => {
    return (
        <section className={styles.Articles}>
            <div className={styles.left}>
                <div className={styles.title}>Nos derniers articles</div>

                <div className={styles.containerLargeArticles}>
                    <Article
                        title="Believing neglected so so allowance existence departure."
                        subTitle="Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary"
                        category="08-11-2021 Category"
                        img={() => <Image src={seaSide} alt="Man on a cliff by the sea" />}
                        type="large"
                    />

                    <Article
                        title="Lorem ipsum, dolor sit amet consectetur adipisicing"
                        subTitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus corrupti praesentium cupiditate blanditiis aperiam laudantium?"
                        category="08-11-2021 Category"
                        img={() => <Image src={manWithStand} alt="Man with stand" />}
                        type="large"
                    />

                    <Article
                        title="In design active temper be uneasy. Thirty for remove plenty regard you."
                        subTitle="Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything."
                        category="08-11-2021 Category"
                        img={() => <Image src={womanInAField} alt="Woman in a field" />}
                        type="large"
                    />
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.containerButton}>
                    <Button label="Voir tous nos articles" onClick={() => alert('oui')} isPurple />
                </div>

                <div className={styles.containerSmallArticles}>
                    <Article
                        title="Man in yellow sweater."
                        category="08-11-2021 Category"
                        img={() => <Image src={womanOnBlueBackground} alt="Woman on blue background" />}
                        type="small"
                    />

                    <Article
                        title="Do believing oh disposing to supported allowance we"
                        category="08-11-2021 Category"
                        img={() => <Image src={manInYellowSweater} alt="Man in yellow sweater" />}
                        type="small"
                    />

                    <Article
                        title="Village did removed enjoyed explain nor ham saw."
                        category="08-11-2021 Category"
                        img={() => <Image src={womanFromBehind} alt="Woman from behind in front of a sunset" />}
                        type="small"
                    />

                    <Article
                        title="Securing as informed declared or margaret."
                        category="08-11-2021 Category"
                        img={() => <Image src={womanHoldingACup} alt="Woman holding a cup looking at a window" />}
                        type="small"
                    />
                </div>
            </div>
            {/* <div className={styles.top}>
                <div className={styles.title}>Nos derniers articles</div>
                <div className={styles.containerButton}>
                    <Button label="Voir tous nos articles" onClick={() => alert('oui')} isPurple />
                </div>
            </div> */}

            {/* <div className={styles.containerArticle}>
                <Article
                    title="Believing neglected so so allowance existence departure."
                    subTitle="Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary"
                    category="08-11-2021 Category"
                    img={() => <Image src={seaSide} alt="Man on a cliff by the sea" />}
                    type="large"
                />

                <Article
                    title="Lorem ipsum, dolor sit amet consectetur adipisicing"
                    subTitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus corrupti praesentium cupiditate blanditiis aperiam laudantium?"
                    category="08-11-2021 Category"
                    img={() => <Image src={manWithStand} alt="Man with stand" />}
                    type="large"
                />

                <Article
                    title="In design active temper be uneasy. Thirty for remove plenty regard you."
                    subTitle="Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything."
                    category="08-11-2021 Category"
                    img={() => <Image src={womanInAField} alt="Woman in a field" />}
                    type="large"
                />

                <div>
                    <Article
                        title="Man in yellow sweater."
                        category="08-11-2021 Category"
                        img={() => <Image src={womanOnBlueBackground} alt="Woman on blue background" />}
                        type="small"
                    />

                    <Article
                        title="Do believing oh disposing to supported allowance we"
                        category="08-11-2021 Category"
                        img={() => <Image src={manInYellowSweater} alt="Man in yellow sweater" />}
                        type="small"
                    />

                    <Article
                        title="Village did removed enjoyed explain nor ham saw."
                        category="08-11-2021 Category"
                        img={() => <Image src={womanFromBehind} alt="Woman from behind in front of a sunset" />}
                        type="small"
                    />

                    <Article
                        title="Securing as informed declared or margaret."
                        category="08-11-2021 Category"
                        img={() => <Image src={womanHoldingACup} alt="Woman holding a cup looking at a window" />}
                        type="small"
                    />
                </div>
            </div> */}
        </section>
    );
};

export default Articles;
