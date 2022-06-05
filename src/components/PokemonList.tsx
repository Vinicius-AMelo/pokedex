import React, { useContext, useState } from 'react'
import { AppContext } from '../data/api/Store'

import * as styles from '../../styles/PokemonList.module.scss'


function PokemonList() {

    const { stats, evolutionChain, loading } = useContext(AppContext)

    return (
        <div className='Main_List'>
            {!loading && <ul>
                {stats.map((pokemon, index) => (
                    <li key={index} >
                        {` ${evolutionChain[index].id} ${pokemon.name}`}
                    </li>
                ))}
            </ul>}
        </div>
    )
}

export default PokemonList