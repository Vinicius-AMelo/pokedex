import React, { useContext } from 'react'
import styles from '../../styles/StatsScreen.module.scss'
import { AppContext } from '../data/api/Store'


function StatsScreen() {

    const { stats, loading, index, evolutionChain } = useContext(AppContext)
    // console.log(stats[index])


    return (
        <>
            {!loading && <div className={styles.Main_Screen}>
                <p>
                    {evolutionChain[index].chain.evolves_to[0].species.name}
                </p>
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${stats[index].id + 1}.png`}
                    alt="Forma Evoluída do Pokemon" />
            </div>}
        </>

    )
}

export default StatsScreen