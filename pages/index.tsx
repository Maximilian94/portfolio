import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { COLORS } from '../styles';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	return (
		<div style={{ background: COLORS.darkBlue, minHeight: '100vh' }}></div>
	);
};

export default Home;
