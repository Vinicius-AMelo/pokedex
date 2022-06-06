import type { NextPage } from 'next'
import styles from '../../styles/Home.module.scss'
import PokemonList from '../components/PokemonList'
import StatsScreen from '../components/StatsScreen'
import Store from '../data/api/Store'


const Home: NextPage = () => {

  return (
    <Store>
      <div className={styles.Home}>
        <StatsScreen />
        <PokemonList />
      </div>
    </Store>


  )
}

export default Home
