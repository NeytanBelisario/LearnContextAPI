import React from 'react'
import { useTheme } from '../../useTheme/page.tsx'
import './themeComp.css'
import * as motion from 'motion/react-client'

export const ThemeComp = () => {
    const { changeTheme, theme, setIsOn, isOn} = useTheme()

    const toggleSwitch = () => {
        setIsOn((prev: any) => !prev)
        changeTheme()
    }

    return (
        <div className='divTheme'>
            <p className='textTheme'>{theme} {theme === 'Light' ? '☀️' : '🌙'}</p>
            <div onClick={toggleSwitch} className='botaoLigaDes' style={{ justifyContent: "flex-" + (isOn ? "start" : "end") }}>
                <motion.div
                    className='botaoRedondo'
                    layout
                    transition={{
                        type: "spring",
                        visualDuration: 0.3,
                        bounce: 0.2,
                    }}>
                </motion.div>
            </div>
        </div>
    )
}