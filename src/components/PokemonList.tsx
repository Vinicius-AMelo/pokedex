import React, { useContext } from 'react'
import { AppContext } from '../data/api/Store'

import styles from '../../styles/PokemonList.module.scss'


function PokemonList() {

    const { stats, evolutionChain, loading } = useContext(AppContext)

    return (
        <div className={styles.Main_List}>
            <div className={styles.List}>
                {!loading && <ul>
                    {stats.map((pokemon, index) => (
                        <li key={index} className={styles[pokemon.name]}>
                            <img src={pokemon.sprites.front_default} alt="" />
                            {pokemon.name}
                        </li>
                    ))}
                </ul>}
            </div>
        </div >
    )
}

export default PokemonList