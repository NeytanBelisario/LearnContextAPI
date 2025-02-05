'use client'

import React from 'react'
import { useTheme } from '../../useTheme/page.tsx'
import * as motion from 'motion/react-client'
import { AnimatePresence } from "motion/react"
import './modal.css'


export const Modal = () => {
    const { sure, setSure, removeList, index } = useTheme()

    const deletar = () => {
        removeList(index)
        setSure(false)
    }

    return (
        <AnimatePresence initial={false}>
            {sure && (
                <div className='fundoModal'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        className='modal'
                        transition={{
                            duration: 0.5,
                            scale: { type: "spring", visualDuration: 0.5, bounce: 0.5 },
                        }}
                    >
                        <p style={{ fontSize: '50px', textAlign: 'center' }}>Você tem certeza que deseja apagar esse item?</p>
                        <div className="botoes">
                            <div onClick={() => setSure(false)} style={{ color: '#057a00', cursor: 'pointer' }}>Cancelar</div>
                            <div onClick={deletar} style={{ color: '#db000a', cursor: 'pointer' }}>Sim</div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}