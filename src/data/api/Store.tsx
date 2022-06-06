import { createContext, useEffect, useState } from "react"


interface IContext {
    stats: any[],
    evolutionChain: any[],
    loading: boolean
}

export const AppContext = createContext<IContext>({ stats: [], evolutionChain: [], loading: true })

function Store(props: any) {

    const [stats, setStats] = useState<any[]>([])
    const [evolutionChain, setEvolutionChain] = useState<any[]>([])
    const [loading, setLoading] = useState<boolean>(true)


    useEffect(() => {
        const pokemonEvolutionChain: any[] = []
        const pokemonStats: any[] = []
        const listOfPokemons = ['bulbasaur', 'charmander', 'squirtle', 'caterpie', 'pidgey', 'jigglypuff', 'pikachu', 'meowth', 'snorlax', 'psyduck']

        listOfPokemons.map(eachPokemon => (
            fetch(`https://pokeapi.co/api/v2/pokemon/${eachPokemon}/`)
                .then(resp => resp.json())
                .then(data => (pokemonStats.push(data), setStats(pokemonStats), fetch(data.species.url)
                    .then(resp => resp.json())
                    .then(data => fetch(data.evolution_chain.url)
                        .then(resp => resp.json())
                        .then(data => (pokemonEvolutionChain.push(data), setEvolutionChain(pokemonEvolutionChain)))
                        .then(resp => setTimeout(() => {
                            (setLoading(false))
                        }, 10)))))))
    }, [])

    console.log(stats)
    console.log(evolutionChain)
    return (
        <AppContext.Provider value={{ stats, evolutionChain, loading }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default Store