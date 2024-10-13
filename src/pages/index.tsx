import React from 'react';

import styles from '../styles/Index.module.scss';

import NavigationBar from '../components/navigation-bar';
import PreviewScreen from '../components/preview-screen';
import AppointmentDiscovery from '../components/appointment-discovery';
import StatPage from '../components/stat-page';
import VersionScreen from '../components/version-screen';
// import Temoignage from '../components/temoignage';
import DownloadScreen from '../components/download-screen';
// import Articles from '../components/articles';
import Footer from '../components/footer';

import DefaultLayout from '@/layout/default-layout';
import Head from 'next/head';

const Home: React.FunctionComponent = () => {
    return (
        <DefaultLayout className={styles.backgroundWaveTopLeftCorner}>
            <Head>
                <title>La Place</title>
            </Head>
            <NavigationBar />
            <PreviewScreen />
            <AppointmentDiscovery />
            <StatPage />
            <VersionScreen />
            {/*
                TODO: Waiting approval by Design for next version
                <Temoignage />
            */}
            <DownloadScreen />
            {/* 
            TODO: Waiting approval by Design for next version
            <Articles /> */}
            <Footer />
        </DefaultLayout>
    );
};

export default Home;
