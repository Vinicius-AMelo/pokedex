import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.scss'

const Home: NextPage = () => {

  const [stats, setStats] = useState()
  const [evolutionChain, setEvolutionChain] = useState()

  const listOfPokemons = ['pikachu', 'charmander']


  useEffect(() => {

    const pokemonEvolutionChain: any = []
    const pokemonStats: any = []
    listOfPokemons.map(eachPokemon => (
      fetch(`https://pokeapi.co/api/v2/pokemon/${eachPokemon}/`)
        .then(resp => resp.json())
        .then(data => (pokemonStats.push(data), fetch(data.species.url)
          .then(resp => resp.json())
          .then(data => fetch(data.evolution_chain.url)
            .then(resp => resp.json())
            .then(data => pokemonEvolutionChain.push(data))
          )
        ))
    ))

    setEvolutionChain(pokemonEvolutionChain)
    setStats(pokemonStats)
  }, [])

  console.log(evolutionChain, stats, 'a')

  return (




    <div className={styles.Home} >

    </div>
  )
}

export default Home
