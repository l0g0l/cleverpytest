import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from "./header/Header"
import Footer from "./footer/Footer"
import Card from '../../components/Card'
import Select from './Select'
import ScrollToTop from '../ScrollToTop'
import Pagination from '../pagination/Pagination'



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
        getUsers()
        getPosts()

    }, [])


    return (
        <>
            <Header />
            <main>
                <ScrollToTop/>
                <Select userfilter={userFilter} setuserfilter={setUserFilter} datausers={users} />
                {/*posts it's an array, I iterate it and I paint as many cards as there are posts */}
                {userFilter == "All"
                    ?
                    posts.map((item => {
                        return <Card dataposts={item} key={item.id} posts={posts} datausers={users} />
                    }))
                    :
                    posts.filter(post => post.userId == userFilter)
                        .map((item => { return <Card dataposts={item} posts={posts} key={item.id} datausers={users} /> }))
                }
                <Pagination posts={posts} />
            </main>
            <Footer />
        </>
    )
}

export default Layout
