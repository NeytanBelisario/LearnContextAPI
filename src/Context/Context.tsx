import { createContext}  from 'react'

const ContextDashboard = createContext({
    theme: null,
    listaTarefas: null,
    changeTheme: () => {},
    addList: () => {},
    removeList: () => {},
    concluidoList: () => {},
    filtrar: () => {}
})

export default ContextDashboard;