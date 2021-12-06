import React from 'react'

const Card = ({dataposts}) => {
    //show the card content using props
    return (
        <div className="container-card">
            {/* <div className="aside"></div> */}
            <div className="content-card">
                <p>User: {dataposts.userId}</p>
                <p>{dataposts.title}</p>
                <p>{dataposts.body}</p>
            </div>
        </div>
    )
}

export default Card
