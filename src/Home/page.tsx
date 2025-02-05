'use client'

import React from 'react'
import { useTheme } from '../useTheme/page.tsx'
import './home.css'
import { ThemeComp } from '../Components/ThemeComp/page.tsx'
import { Posts } from '../Components/Posts/page.tsx'
import { ToDoList } from '../Components/ToDoList/page.tsx'
import { Modal } from '../Components/Modal/page.tsx'

export default function Home() {
    const { theme, sure } = useTheme()



    return (
        <section style={{ backgroundColor: theme === 'Light' ? '#D9D9D9' : 'rgb(37 37 37)', minHeight: '100vh', maxWidth: '100vw', paddingBottom: '10vh', paddingTop: '5%', position: sure ? 'fixed' : 'static', right: '0', left: '0' }}>
            <Modal/>
            <div className='cont1'>
                <ToDoList/>
                <ThemeComp/>
            </div>
            <Posts />
        </section>
    )
}

