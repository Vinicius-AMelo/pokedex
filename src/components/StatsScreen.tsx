import React, { useContext } from 'react'
import styles from '../../styles/StatsScreen.module.scss'
import { AppContext } from '../data/api/Store'


function StatsScreen() {

    const { stats, loading, index, evolutionChain } = useContext(AppContext)
    console.log(evolutionChain[index])




    return (
        <>
            {!loading && <div className={styles.Main_Screen}>
                <h1>
                    {stats[index].name}
                </h1>
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${stats[index].id}.png`}
                    alt="Forma Evoluída do Pokemon" />
                <div className={styles.lis}>
                    <ul>
                        {stats[index].stats.map((stat: any, index: number) =>
                            <li key={index}>
                                {stat.stat.name}
                                <div style={{ width: `${stat.base_stat <= 100 ? stat.base_stat : 100}%` }}>
                                    <p>{stat.base_stat}</p>
                                </div>
                            </li>
                        )}
                    </ul>
                    <ul style={{ alignSelf: 'center' }}>
                        {stats[index].abilities.map((ab: any, index: number) =>
                            <li key={index}>
                                {`Habilidade ${index + 1}:`} {ab.ability.name}
                            </li>
                        )}
                        <li style={{ marginTop: '30px' }}><p>Evolui para: {evolutionChain[index].chain.evolves_to[0].species.name === stats[index].name ? evolutionChain[index].chain.evolves_to[0].evolves_to[0].species.name : evolutionChain[index].chain.evolves_to[0].species.name}</p>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${stats[index].id + 1}.png`} alt="" />
                        </li>
                    </ul>
                </div>
            </div>}
        </>

    )
}

export default StatsScreen