import React, { useState, useEffect, useRef } from 'react'
import './posts.css'

export const Posts = () => {
    const [posts, setPosts] = useState([])
    const [postsAtuais, setPostsAtuais] = useState()
    const [numPerPage, setNumPerPage] = useState(8)
    const effectRan = useRef(false);

    const carregarMais = () => {
        const postsNow = posts.slice(0, numPerPage)
        setPostsAtuais(postsNow)
        setNumPerPage((prev: number) => prev + prev)
    }

    const getPosts = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await response.json()
        setPosts(posts)
        const postsNow = posts.slice(0, numPerPage)
        setPostsAtuais(postsNow)
        setNumPerPage((prev: number) => prev + prev)
        console.log('oi')
    }

    useEffect(() => {
        if (effectRan.current) return;
        effectRan.current = true;
        getPosts()
    }, [])

    return (
        <div className='cont2'>
            <div className='Posts'>
                {postsAtuais?.map((item: any, index: any) => {
                    return (
                        <div key={index} className='post'>
                            <img
                                src='https://dus6dayednven.cloudfront.net/app/uploads/2021/05/3.Nico-Ferreyra.jpg'
                                alt={'imagemExemplo'}
                            />
                            <p style={{ fontWeight: 'bolder', marginBottom: '15px' }}>{item.title}</p>
                            <p>{item.body}</p>
                        </div>
                    )
                })}
            </div>
            <div className='botaoCarregarMais' onClick={carregarMais}>Carregar Mais</div>
        </div>
    )
}