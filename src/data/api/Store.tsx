import { createContext, useEffect, useState } from "react"



export const AppContext = createContext<any>(null)

function Store(props: any) {

    const [stats, setStats] = useState<any[]>([])
    const [evolutionChain, setEvolutionChain] = useState<any[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [index, setIndex] = useState<number>(0)


    useEffect(() => {
        const pokemonEvolutionChain: any[] = []
        const pokemonStats: any[] = []
        const listOfPokemons = ['bulbasaur', 'charmander', 'squirtle', 'caterpie', 'pidgey', 'jigglypuff', 'pikachu', 'meowth', 'rattata', 'psyduck']

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

    // console.log(stats)
    // console.log(evolutionChain)
    return (
        <AppContext.Provider value={{ stats, evolutionChain, loading, index, setIndex }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default Store