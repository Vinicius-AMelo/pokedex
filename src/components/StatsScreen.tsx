import React, { useContext, useState } from 'react'
import styles from '../../styles/StatsScreen.module.scss'
import { AppContext } from '../data/api/Store'

import { AiFillCaretRight, AiOutlinePoweroff } from "react-icons/ai"


function StatsScreen() {

    const { stats, loading, index, evolutionChain, active, setActive, screen, setScreen } = useContext(AppContext)


    const isOn = screen === 'off' ? 'off' : screen === 'on' ? 'on' : ''
    return (
        <>
            {!loading &&
                <div className={styles.Main_Screen}>
                    <article className={styles[isOn]}></article>
                    <div className={styles.Screen}>
                        <div className={styles.Left_Screen}>
                            <h1>
                                {stats[index].name}
                            </h1>
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
                        </div>
                        <div className={styles.Right_Screen}>
                            <div className={styles.Pokemon_BG}>
                                <img
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${stats[index].id}.png`}
                                    alt="Forma Evoluída do Pokemon" />
                                <div className={styles.Types}>
                                    {stats[index].types.map((type: any, index: number) => <span key={index}>{type.type.name}</span>)}
                                </div>
                                <ul style={{ alignSelf: 'center' }}>
                                    {stats[index].abilities.map((ab: any, index: number) =>
                                        <li key={index}>
                                            {`Habilidade ${index + 1}:`} {ab.ability.name}
                                        </li>
                                    )}
                                </ul>
                            </div>
                            <ul>
                                <li><p>Evolui para: {evolutionChain[index].chain.evolves_to[0].species.name === stats[index].name ? evolutionChain[index].chain.evolves_to[0].evolves_to[0].species.name : evolutionChain[index].chain.evolves_to[0].species.name}</p>
                                    <div className={styles.Evolve}>
                                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${stats[index].id + 1}.png`} alt="" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.Buttons}>
                        <AiFillCaretRight className={styles.TurnOn} onClick={() => setActive(active !== 'show' ? 'show' : 'hidden')} />
                        <AiOutlinePoweroff className={styles.TurnOff} onClick={() => setScreen(screen !== 'on' ? 'on' : 'off')} />
                    </div>
                </div>}
        </>

    )
}

export default StatsScreen