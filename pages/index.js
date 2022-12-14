import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from '../components/banner'
import Card from '../components/card'
import coffeeStoresData from "../data/coffee-stores.json"

export async function getStaticProps(context){
  return {
    props: {
      coffeeStores: coffeeStoresData,
    },
  };
}

export default function Home(props) {
  console.log('props', props);
  const handleOnBannerClick = () => {
    console.log('button click yall!');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner 
          buttonText="View stores nearby" 
          handleOnClick={handleOnBannerClick} 
        />
        <div className={styles.heroImage}>
          <Image src="/static/hero-image.png" width={700} height={400} />
        </div>
        {props.coffeeStores.length > 0 && (
          <div>
            <h2 className={styles.heading2}>Toronto Stores</h2>
            <div className={styles.cardLayout}>
              {props.coffeeStores.map((coffeeStore) => {
                return (
                  <Card 
                    key={coffeeStore.id}
                    name={coffeeStore.name} 
                    imgUrl={coffeeStore.imgUrl} 
                    href={`/coffee-store/${coffeeStore.id}`} 
                    className={styles.card}
                  />
                );
              })}
            </div>
          </div>
        )}

      </main>
    </div>
  )
}
