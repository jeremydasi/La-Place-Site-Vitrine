import styles from '../../../styles/Article.module.scss';
import React from 'react';

interface ArticleProps {
    subTitle?: string;
    title: string;
    category: string;
    img: () => void;
    type: 'small' | 'large';
}

const Article: React.FunctionComponent<ArticleProps> = ({ subTitle, title, category, img, type }) => {
    if (type === 'large')
        return (
            <div className={styles.largeArticle}>
                <>
                    {img()}
                    <div className={styles.category}>{category}</div>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.subTitle}>{subTitle}</div>
                </>
            </div>
        );

    if (type === 'small')
        return (
            <div className={styles.smallArticle}>
                <>
                    {img()}
                    <div className={styles.rightText}>
                        <div className={styles.rightCategory}>08-11-2021 Category</div>
                        <div className={styles.rightTitle}>Do believing oh disposing to supported allowance we.</div>
                    </div>
                </>
            </div>
        );
    return <></>;
};

export default Article;
