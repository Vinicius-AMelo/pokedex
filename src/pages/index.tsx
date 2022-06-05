import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.scss'

const Home: NextPage = () => {

  const [pokemon, setPokemon] = useState()
  const [stats, setStats] = useState([])
  const [evolutionChain, setEvolutionChain] = useState({})

  const chain: any = []
  const pokemons = ['pikachu', 'charmander']
  const pokemonos: any = []

  useEffect(() => {
    pokemons.map(pokemono => (
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemono}/`)
        .then(resp => resp.json())
        .then(data => (
          pokemonos.push(data),
          fetch(data.species.url)
            .then(resp => resp.json())
            .then(data => fetch(data.evolution_chain.url)
              .then(resp => resp.json())
              .then(data => chain.push(data))
            )
        ))
    ))

    setEvolutionChain(chain)
    setPokemon(pokemonos)
  }, [])

  console.log(evolutionChain, pokemon)

  return (




    <div className={styles.Home} >

    </div>
  )
}

export default Home
