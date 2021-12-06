import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from "./header/Header"
import NavBar from "./navbar/NavBar"
import Footer from "./footer/Footer"
import Card from '../../components/Card'



const Layout = () => {
    const [posts, setPosts] = useState([]) //initialize the state in empty array to save every posts

    useEffect(() => {
        const getPosts = async () => {
            const resultPosts = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setPosts(resultPosts.data)
            console.log(resultPosts)
        }
        getPosts()

    }, [])


    return (
        <>
            <Header />
            <NavBar />
            <main>
                {posts.map((item => {
                    return <Card dataposts={item} key={item.id} />
                }))}
            </main>
            <Footer />
        </>
    )
}

export default Layout
