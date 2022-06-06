import React, { useContext } from 'react'
import styles from '../../styles/StatsScreen.module.scss'
import { AppContext } from '../data/api/Store'


function StatsScreen() {

    const { stats, loading, index, evolutionChain } = useContext(AppContext)
    console.log(stats[index])


    return (
        <div className={styles.Main_Screen}>
            {!loading &&
                evolutionChain[index].chain.evolves_to[0].species.name !== stats[index].name ? evolutionChain[index].chain.evolves_to[0].species.name : 's'}
        </div>
    )
}

export default StatsScreen