import React, { useContext } from 'react'
import styles from '../../styles/StatsScreen.module.scss'
import { AppContext } from '../data/api/Store'


function StatsScreen() {

    const { stats, loading, index, evolutionChain } = useContext(AppContext)
    console.log(stats[index])


    return (
        <>
            {!loading && <div className={styles.Main_Screen}>
                <p>
                    {stats[index].name}
                    {/* {evolutionChain[index].chain.evolves_to[0].species.name} */}
                </p>
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${stats[index].id}.png`}
                    alt="Forma Evoluída do Pokemon" />
                <ul>
                    {stats[index].stats.map((stat: any, index: number) => <li key={index}>{stat.stat.name} {stat.base_stat}<div style={{ width: `${stat.base_stat <= 100 ? stat.base_stat : 100}%` }}></div></li>)}
                </ul>
            </div>}
        </>

    )
}

export default StatsScreen