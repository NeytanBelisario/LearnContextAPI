import React, { useState } from 'react'
import { useTheme } from '../../../useTheme/page.tsx'
import * as motion from 'motion/react-client'
import { AnimatePresence } from "motion/react"
import './filtrar.css'

export const Filtrar = () => {
    const { filtrar } = useTheme()
    const [filtrarOn, setFiltrarOn] = useState(false)

    const handlefiltrar = (nome: any) => {
        filtrar(nome)
        setFiltrarOn(false)
    }

    return (
        <div className='filtrarDiv'>
            <div className='buttonFiltrar' onClick={() => setFiltrarOn((prev: any) => !prev)}>Filtrar</div>
            <AnimatePresence initial={false}>
                {filtrarOn && (
                    <motion.div
                        className='abaFiltrar'
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{
                            duration: 0.3,
                            scale: { type: "spring", visualDuration: 0.3, bounce: 0.1 },
                        }}
                    >
                        <div onClick={() => handlefiltrar('concluidos')}><p>Concluidas</p></div>
                        <div onClick={() => handlefiltrar('pendentes')} style={{ borderTop: '1px solid #717171', borderBottom: '1px solid #717171' }}><p>Pendentes</p></div>
                        <div onClick={() => handlefiltrar('todas')}><p>Todas</p></div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )

}