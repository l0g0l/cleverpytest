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
            setPosts(resultPosts.data) //obtains every data posts and set in the state
            console.log(resultPosts)
        }
        getPosts()

    }, [])
            

    return (
        <>
            <Header />
            <NavBar />
            <main>
                {/*posts it's an array, I iterate it and I paint as many cards as there are posts */}
                {posts.map((item => {
                    return <Card dataposts={item} key={item.id} />
                }))}
            </main>
            <Footer />
        </>
    )
}

export default Layout
