import React from 'react'

const Card = ({ dataposts, datausers }) => {
    //show the card and users content using props


    //I do a filter using id of datausers match with userId of dataposts, if is the same number then I use an object property .name of datausers in 0 position because you only clic in one of them
    return (
        <div className="container-card">
            <div className="content-card">
                <p>{datausers.filter(user => user.id == dataposts.userId)[0].name}</p> 
                <p>{dataposts.title}</p>
                <p>{dataposts.body}</p>
                <i class="far fa-trash-alt"></i>
            </div>
        </div>
    )
}

export default Card
