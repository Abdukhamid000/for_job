import React, {Fragment, useEffect, useState} from 'react'
import ShowCards from "./components/ShowCards";
import axios from "axios"; // Axios
import Box from "./components/Box";
import {useSelector} from "react-redux";
import Pagination from "./components/Pagination";

const App = () => {
    // for useState alternative useReducer but I did not used it
    const isOpen = useSelector(state => state.modal.isOpen) // Modal
    const [post, setPost] = useState([]) // Throw Data to Array
    const [isLoading, setIsLoading] = useState(false) // Loading..
    const [error, setError] = useState(null) // Catch Error
    const [searchTerm, setSearchTerm] = useState('') // Search by Name
    const [currentPage, setCurrentPage] = useState(1) // Pagination
    const [postsPerPage, setPostsPerPage] = useState(10)

    // Fetch Data from API
    useEffect(() => {
        setIsLoading(true)
        const fetchPost = async () => {
            const res = await axios.get('https://mocki.io/v1/4ef1babb-c84b-4b81-9d56-55ede5b7bacf')
            const data = res.data
            console.log(data)
            setPost(data)
        }

        fetchPost().catch(error => {
            setError(error.message)
        })

        setIsLoading(false)
    }, [])

    // Get current Posts
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPage = indexOfLastPost - postsPerPage
    const currentPost = post.slice(indexOfFirstPage, indexOfLastPost)
    // Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)


    return (
        // I Used Tailwindcss in this Component
        <Fragment>
            {error && !isLoading && error}
            {isLoading ? <p className='flex flex-center flex-align-center'>Loading...</p> :

                <div className="container mx-auto">
                    <form className="mb-10 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        {/*Listen for Each change*/}
                        <input
                            onChange={(e) => {
                                setSearchTerm(e.target.value)
                            }
                            }
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username" type="text" placeholder="Username"/>

                    </form>

                    <div className="grid  flex-items-center justify-center  lg:grid-cols-3  sm:grid-cols-2 gap-4">
                        {/*Search by Name*/}
                        {currentPost.filter((val) => {
                            if (searchTerm == "") {
                                return val
                            } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return val
                            }

                        }).map(item => (
                            <ShowCards key={item.id} name={item.first_name} img={item.avatar} body={item.post}/>

                        ))}

                    </div>
                    }
                    {isOpen && <Box/>}


                </div>
            }
            <Pagination postsPerPage={postsPerPage} totalPosts={post.length} paginate={paginate}/>
        </Fragment>
    )
}

export default App