import React, { useContext } from 'react'
import { AppContext } from '../data/api/Store'

import styles from '../../styles/PokemonList.module.scss'


function PokemonList() {

    const { stats, loading, setIndex, active } = useContext(AppContext)


    //Lógica pra não iniciar a animação automáticamente
    const isActive = active === 'hidden' ? 'hidden' : active === 'show' ? 'show' : ''

    return (
        <div className={styles.Menu}>
            {!loading && <nav className={styles[isActive]}>
                <div className={styles.List}>
                    <ul>
                        {stats.map((pokemon: any, index: number) => (
                            <li key={index} className={styles[pokemon.name]} onClick={e => setIndex(index)}>
                                <img src={pokemon.sprites.front_default} alt="" />
                                {pokemon.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>}
        </div>
    )
}

export default PokemonList

