import React, { useState } from 'react'
import { useTheme } from '../../../useTheme/page.tsx'
import * as motion from 'motion/react-client'
import { AnimatePresence } from "motion/react"
import './tarefas.css'

export const Tarefas = () => {
    const { listaTarefas, concluidoList, addList, setIndex, setSure  } = useTheme()
    const [add, setAdd] = useState(false)
    const [atividade, setAtividade] = useState()

    const handleAdicionar = (e: any) => {
        e.preventDefault();
        setAdd(false);
        addList({ text: atividade, concluido: false })
        setAtividade('')
    }

    const handleQuest = (i: any) => {
        setIndex(i)
        setSure(true)
    }

    return (
        <div className='tarefas'>
            <p style={{fontWeight: '600', fontSize: '24px', width: '90%', marginBottom: '15px'}}>Tarefas: </p>
            {listaTarefas.map((item: any, index: any) => {
                return (
                    <div key={index} className='tarefa'>
                        <p>{item.text}</p>
                        <div className='icons'>
                            <div className='delete' onClick={() => handleQuest(index)}>
                                <p style={{ fontSize: '17px' }}>⛔</p>
                            </div>
                            <motion.div
                                className='check'
                                onClick={() => concluidoList(index)} >
                                <AnimatePresence initial={false}>
                                    {item.concluido && (
                                        <motion.p
                                            style={{ fontSize: '17px' }}
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0 }}
                                            transition={{
                                                duration: 0.4,
                                                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                                            }}
                                        >✔️</motion.p>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </div>
                    </div>
                )
            })}
            <div onClick={() => setAdd((prev: any) => !prev)} className='botaoAdd'>
                <p>Adicionar Tarefa</p>
            </div>
            {add && (
                <form onSubmit={handleAdicionar} className='form'>
                    <input type="text" placeholder='Nome da atividade' value={atividade} onChange={(e: any) => setAtividade(e.target.value)} />
                    <button type='submit'>Adicionar</button>
                </form>
            )}
        </div>
    )

}