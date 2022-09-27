import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';


const zeroPad = (num: number, places: number) => String(num).padStart(places, '0')
const images = Array.from(Array(11).keys()).map(n => `/photos/${zeroPad(n, 2)}.JPG`)

function Demo() {
  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} />
    </Carousel.Slide>
  ));

  return (
    <Carousel sx={{ maxWidth: 320 }} mx="auto" withIndicators>
      {slides}
    </Carousel>
  );
}


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tiffany T</title>
        <meta name="description" content="Tiffany T | Social Marketing " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Demo />

    </div>
  )
}

export default Home
