import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from "./header/Header"
import NavBar from "./navbar/NavBar"
import Footer from "./footer/Footer"
import Card from '../../components/Card'
import Select from './Select'



const Layout = () => {
    const [posts, setPosts] = useState([]) //initialize the state in empty array to save every posts
    const [users, setUsers] = useState([]) //initialize the state in empty array to save every users data
    const [userFilter, setUserFilter] = useState("All") //show all post 

    useEffect(() => {
        const getPosts = async () => {
            const resultPosts = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setPosts(resultPosts.data) //obtains every data posts and set in the state
            console.log(resultPosts)
        }
        const getUsers = async () => {
            const resultUsers = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUsers(resultUsers.data) //obtains every data users and set in the state
            console.log(resultUsers)
        }
        getPosts()
        getUsers()

    }, [])


    return (
        <>
            <Header />
            <NavBar />
            <main>
                <Select userfilter={userFilter} setuserfilter={setUserFilter} datausers={users} />
                {/*posts it's an array, I iterate it and I paint as many cards as there are posts */}
                {userFilter == "All"
                    ?
                    posts.map((item => {
                        return <Card dataposts={item} key={item.id} datausers={users} />
                    }))
                    :
                    
                    posts.filter(post => post.userId == userFilter)
                        .map((item => { return <Card dataposts={item} key={item.id} datausers={users} /> }))
                }
            </main>
            <Footer />
        </>
    )
}

export default Layout
