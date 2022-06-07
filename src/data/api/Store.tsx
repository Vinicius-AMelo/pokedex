import { createContext, useEffect, useState } from "react"



export const AppContext = createContext<any>(null)

function Store(props: any) {

    const [stats, setStats] = useState<any[]>([{ name: '' }])
    const [evolutionChain, setEvolutionChain] = useState<any[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [index, setIndex] = useState<number>(0)
    const [active, setActive] = useState<any>()
    const [screen, setScreen] = useState<any>()

    useEffect(() => {
        const pokemonEvolutionChain: any[] = []
        const pokemonStats: any[] = []
        const listOfPokemons = ['bulbasaur', 'squirtle', 'charmander', 'pikachu', 'caterpie', 'pidgey', 'jigglypuff', 'meowth', 'rattata', 'psyduck']

        // A função listOfPokemons.map deixa a lista sempre desordenada com indexes incorretos, por isso optei por colocar o index manualmente no fetch, acho que é um tempo curto pra tantas requisições do servidor


        setTimeout(() => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${listOfPokemons[0]}/`)
                .then(resp => resp.json())
                .then(data => (pokemonStats.push(data), setStats(pokemonStats), fetch(data.species.url)
                    .then(resp => resp.json())
                    .then(data => fetch(data.evolution_chain.url)
                        .then(resp => resp.json())
                        .then(data => (pokemonEvolutionChain.push(data), setEvolutionChain(pokemonEvolutionChain))))))

        }, 100)
        setTimeout(() => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${listOfPokemons[1]}/`)
                .then(resp => resp.json())
                .then(data => (pokemonStats.push(data), setStats(pokemonStats), fetch(data.species.url)
                    .then(resp => resp.json())
                    .then(data => fetch(data.evolution_chain.url)
                        .then(resp => resp.json())
                        .then(data => (pokemonEvolutionChain.push(data), setEvolutionChain(pokemonEvolutionChain))))))
        }, 200)
        setTimeout(() => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${listOfPokemons[2]}/`)
                .then(resp => resp.json())
                .then(data => (pokemonStats.push(data), setStats(pokemonStats), fetch(data.species.url)
                    .then(resp => resp.json())
                    .then(data => fetch(data.evolution_chain.url)
                        .then(resp => resp.json())
                        .then(data => (pokemonEvolutionChain.push(data), setEvolutionChain(pokemonEvolutionChain))))))
        }, 300)
        setTimeout(() => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${listOfPokemons[3]}/`)
                .then(resp => resp.json())
                .then(data => (pokemonStats.push(data), setStats(pokemonStats), fetch(data.species.url)
                    .then(resp => resp.json())
                    .then(data => fetch(data.evolution_chain.url)
                        .then(resp => resp.json())
                        .then(data => (pokemonEvolutionChain.push(data), setEvolutionChain(pokemonEvolutionChain))))))
        }, 400)
        setTimeout(() => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${listOfPokemons[4]}/`)
                .then(resp => resp.json())
                .then(data => (pokemonStats.push(data), setStats(pokemonStats), fetch(data.species.url)
                    .then(resp => resp.json())
                    .then(data => fetch(data.evolution_chain.url)
                        .then(resp => resp.json())
                        .then(data => (pokemonEvolutionChain.push(data), setEvolutionChain(pokemonEvolutionChain))))))
        }, 500)
        setTimeout(() => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${listOfPokemons[5]}/`)
                .then(resp => resp.json())
                .then(data => (pokemonStats.push(data), setStats(pokemonStats), fetch(data.species.url)
                    .then(resp => resp.json())
                    .then(data => fetch(data.evolution_chain.url)
                        .then(resp => resp.json())
                        .then(data => (pokemonEvolutionChain.push(data), setEvolutionChain(pokemonEvolutionChain))))))
        }, 600)
        setTimeout(() => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${listOfPokemons[6]}/`)
                .then(resp => resp.json())
                .then(data => (pokemonStats.push(data), setStats(pokemonStats), fetch(data.species.url)
                    .then(resp => resp.json())
                    .then(data => fetch(data.evolution_chain.url)
                        .then(resp => resp.json())
                        .then(data => (pokemonEvolutionChain.push(data), setEvolutionChain(pokemonEvolutionChain))))))
        }, 700)
        setTimeout(() => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${listOfPokemons[7]}/`)
                .then(resp => resp.json())
                .then(data => (pokemonStats.push(data), setStats(pokemonStats), fetch(data.species.url)
                    .then(resp => resp.json())
                    .then(data => fetch(data.evolution_chain.url)
                        .then(resp => resp.json())
                        .then(data => (pokemonEvolutionChain.push(data), setEvolutionChain(pokemonEvolutionChain))))))
        }, 800)
        setTimeout(() => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${listOfPokemons[8]}/`)
                .then(resp => resp.json())
                .then(data => (pokemonStats.push(data), setStats(pokemonStats), fetch(data.species.url)
                    .then(resp => resp.json())
                    .then(data => fetch(data.evolution_chain.url)
                        .then(resp => resp.json())
                        .then(data => (pokemonEvolutionChain.push(data), setEvolutionChain(pokemonEvolutionChain))))))
        }, 900)
        setTimeout(() => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${listOfPokemons[9]}/`)
                .then(resp => resp.json())
                .then(data => (pokemonStats.push(data), setStats(pokemonStats), fetch(data.species.url)
                    .then(resp => resp.json())
                    .then(data => fetch(data.evolution_chain.url)
                        .then(resp => resp.json())
                        .then(data => (pokemonEvolutionChain.push(data), setEvolutionChain(pokemonEvolutionChain))))))
        }, 1000)




        setTimeout(() => {
            setLoading(false)
        }, 1100)
    }, [])


    return (
        <AppContext.Provider value={{ stats, evolutionChain, loading, index, setIndex, active, setActive, screen, setScreen }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default Store


// fetch(`https://pokeapi.co/api/v2/pokemon/${eachPokemon}/`)
//                 .then(resp => resp.json())
//                 .then(data => (pokemonStats.push(data), setStats(pokemonStats), fetch(data.species.url)
//                     .then(resp => resp.json())
//                     .then(data => fetch(data.evolution_chain.url)
//                         .then(resp => resp.json())
//                         .then(data => (pokemonEvolutionChain.push(data), setEvolutionChain(pokemonEvolutionChain)))
//                         .then(resp => setTimeout(() => {
//                             (setLoading(false))
//                         }, 10)))))))