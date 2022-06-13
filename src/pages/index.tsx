import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Home.module.scss'
import PokemonList from '../components/PokemonList'
import StatsScreen from '../components/StatsScreen'
import Store from '../data/api/Store'


const Home: NextPage = () => {

  return (
    <Store>
      <Head>
        <title>Pokedex</title>
        <meta name='description' content='Pokedex animada com 10 pokemons legais' />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.Home}>
        <StatsScreen />
        <PokemonList />
      </div>
    </Store>


  )
}

export default Home
