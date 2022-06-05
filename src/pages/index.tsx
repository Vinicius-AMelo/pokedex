import type { NextPage } from 'next'
import styles from '../../styles/Home.module.scss'
import PokemonList from '../components/PokemonList'
import Store from '../data/api/Store'


const Home: NextPage = () => {

  return (
    <Store>
      <div className={styles.Home}>
        <PokemonList />
      </div>
    </Store>


  )
}

export default Home
