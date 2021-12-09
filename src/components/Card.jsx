import papeN from '../assets/papeN.png'
import { useState } from 'react'
import infoC from '../assets/infoC.png'



const Card = ({ dataposts, datausers, datacomments, delete_post, islogged }) => {
    console.log(datacomments)
    //show the card and users content using props

    const [showProfile, setShowProfile] = useState(false)
    const [showComments, setShowComments] = useState(false)
    let newComments = Object.values(datacomments)
    // console.log(newComments)


    const toggleShowProfile = () => {
        setShowProfile(!showProfile)
    }
    const toggleShowComments = () => {
        setShowComments(!showComments)
    }
    //Mirar si logueado poder eliminar post o no

    //I do a filter using id of datausers match with userId of dataposts, if is the same number then I use an object property .name of datausers in 0 position because you only clic in one of them
    return (
        <div className="container-card">
            <div className="content-card">
                <div className="container-icon-name">
                    <div>

                        <h1 className="user-card" style={{ color: datausers.color }}>{datausers.name}</h1>
                    </div>

                    <img aria-label="Click" src={infoC} alt="icon extra info profile" className="icon-info" onClick={toggleShowProfile} />

                </div>
                {showProfile
                    ?
                    <>
                        <div className="profile">
                            <p><strong>Email: </strong>{datausers.email}</p>
                            <p><strong>Phone:</strong> {datausers.phone}</p>
                            <p><strong>URL:</strong>   {datausers.website}</p>

                        </div>
                    </>

                    :
                    null
                }
                <h3 className="title-card">{dataposts.title}</h3>
                <p className="body-card">{dataposts.body}</p>
                <div className="containericon-btns" aria-label="Click">
                    {
                        islogged
                            ?
                            <img src={papeN} alt="garbage icon" className="garbage-icon" onClick={() => delete_post(dataposts.id)} />
                            :
                            null
                    }
                    <div >
                        <button onClick={toggleShowComments} style={{ color: datausers.color }} className="btn">
                            Comments
                        </button>
                    </div>

                </div>

                {showComments
                    ?
                    <>
                        <div className="comments">
                            <ul>
                                {datacomments.map((item => {
                                    return (
                                    <li>
                                        <h5>{item.name}</h5>
                                        <p>{item.body}</p>
                                    </li>
                                    )
                                
                                }))}
                            </ul>
                        </div>
                    </>

                    :
                    null
                }
            </div>
        </div>
    )
}

export default Card
