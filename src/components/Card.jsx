import React from 'react'

const Card = ({dataposts, datausers}) => {
    //show the card and users content using props


    return (
        <div className="container-card">
            {/* <div className="aside"></div> */}
            <div className="content-card">

                <p>{datausers.filter(user => user.id == dataposts.userId)[0].name}</p>
                <p>{dataposts.title}</p>
                <p>{dataposts.body}</p>
            </div>
        </div>
    )
}

export default Card
