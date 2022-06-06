import React, { useContext } from 'react'
import { AppContext } from '../data/api/Store'

import styles from '../../styles/PokemonList.module.scss'


function PokemonList() {

    const { stats, loading, setIndex } = useContext(AppContext)

    return (
        <div className={styles.Main_List}>
            <div className={styles.List}>
                {!loading && <ul>
                    {stats.map((pokemon: any, index: number) => (
                        <li key={index} className={styles[pokemon.name]} onClick={e => setIndex(index)}>
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

