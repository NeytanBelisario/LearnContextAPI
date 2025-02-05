import React, { useState } from 'react'
import './toDoList.css'
import { Tarefas } from './Tarefas/page.tsx'
import { Filtrar } from './Filtrar/page.tsx'

export const ToDoList = () => {
    return (
        <div className='toDoList'>
            <p style={{textAlign: 'center', fontWeight: '800', fontSize: '26px', color: '#717171'}}>TO DO LIST</p>
            <Tarefas/>
            <Filtrar/>
        </div>
    )
}