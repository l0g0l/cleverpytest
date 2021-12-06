import React from 'react'

const Card = ({dataposts}) => {
    // console.log(dataposts);
    return (
        <div className="container-card">
            <div className="aside"></div>
            <div className="content-card">
                <p>{dataposts.userId}</p>
                <p>{dataposts.title}</p>
                <p>{dataposts.body}</p>
            </div>
        </div>
    )
}

export default Card
