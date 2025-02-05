import React, { useEffect, useState } from 'react'
import ContextDashboard from './Context.tsx'

const defaultLista = [{
    text: 'Varrer o chão',
    concluida: false
}, {
    text: 'Limpar vidros',
    concluido: true
}]

export const ProviderDashboard = ({ children }) => {
    const [theme, setTheme] = useState('Light')
    const [listaTarefas, setListaTarefas] = useState([])
    const [listaAntiga, setListaAntiga] = useState();
    const [isOn, setIsOn] = useState(true)
    const [sure, setSure] = useState(false)
    const [index, setIndex] = useState()

    useEffect(() => {
        const themeSalvo = localStorage.getItem('theme') || 'Light'
        setTheme(themeSalvo)
        console.log(themeSalvo)
        const storedLista = localStorage.getItem('lista')
        const listaSalva = storedLista? JSON.parse(storedLista) : defaultLista;
        setListaTarefas(listaSalva)
        setListaAntiga(listaSalva)
    }, [])


    const changeTheme = () => {
        setTheme((prev:any) => {
            let themeA: string;
            prev === 'Light' ? themeA = 'Dark' : themeA = 'Light'
            localStorage.setItem('theme', themeA)
            return themeA
        })
    }

    const addList = (novaTarefa:any) => {
        setListaTarefas((prev:any) => {
            let lista = listaAntiga;
            lista = [...lista, novaTarefa]
            localStorage.setItem('lista', JSON.stringify(lista))
            setListaAntiga(lista)
            return lista
        })
    }

    const removeList = (indexEscolhido:any) => {
        setListaTarefas((prev:any) => {
            let lista = listaAntiga
            lista.splice(indexEscolhido, 1)
            localStorage.setItem('lista', JSON.stringify(lista))
            setListaAntiga(lista)
            return lista
        })
    }

    const concluidoList = (indexEscolhido:any) => {
        setListaTarefas((prev:any) => {
            let lista = listaAntiga.map((item:any, index:any) => 
                index === indexEscolhido ? {...item, concluido: !item.concluido} : item
            )
            localStorage.setItem('lista', JSON.stringify(lista))
            setListaAntiga(lista)
            return lista
        })
    }

    const filtrar = (option:any) => {
        if(option === 'pendentes'){
            const tarefasFiltradas = listaAntiga.filter((item:any) => item.concluido === false)
            setListaTarefas(tarefasFiltradas)
        }else if(option === 'concluidos'){
            const tarefasFiltradas = listaAntiga.filter((item:any) => item.concluido === true)
            setListaTarefas(tarefasFiltradas)
        }else{
            setListaTarefas(listaAntiga)
        }
    }

    return(
        <ContextDashboard.Provider value={{theme, changeTheme, addList, removeList, concluidoList, listaTarefas, filtrar, isOn, sure, index, setIndex, setIsOn, setSure}}>
            {children}
        </ContextDashboard.Provider>
    )
}