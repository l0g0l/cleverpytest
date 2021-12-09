import papeN from '../assets/papeN.png'
import { useState } from 'react'
const Card = ({ dataposts, datausers, datacomments, delete_post }) => {
    console.log(datacomments)
    //show the card and users content using props

    const [showProfile, setShowProfile] = useState(false)
    const [showComments, setShowComments] = useState(false)


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
                <h1 className="user-card" style={{ color: datausers.color }}>{datausers.name}</h1>
                <h3 className="title-card">{dataposts.title}</h3>
                <p className="body-card">{dataposts.body}</p>
                <div className="containericon-btns">
                    <img src={papeN} alt="garbage icon" className="garbage-icon" onClick={() => delete_post(dataposts.id)} />
                    <div >
                        <button onClick={toggleShowComments} style={{ color: datausers.color }} className="btn">
                            Comments
                        </button>
                    </div>
                    <div >
                        <button onClick={toggleShowProfile} style={{ color: datausers.color }} className="btn">
                            View Profile
                        </button>
                    </div>
                </div>
                {showProfile
                    ?
                    <div>Profile</div>
                    :
                    null
                }
                {showComments
                    ?
                    <div>{datacomments.name}
                    {datacomments.body}</div>
                    :
                    null
                }
            </div>
        </div>
    )
}

export default Card
