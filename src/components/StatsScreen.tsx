import React, { useContext } from 'react'
import styles from '../../styles/StatsScreen.module.scss'
import { AppContext } from '../data/api/Store'


function StatsScreen() {

    const { stats, loading, index, evolutionChain } = useContext(AppContext)
    console.log(stats[index])


    return (
        <div className={styles.Main_Screen}>
            {!loading &&
                <div>
                    {evolutionChain[index].chain.evolves_to[0].species.name}
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${stats[index].id + 1}.png`} alt="" />
                </div>}
        </div>
    )
}

export default StatsScreen