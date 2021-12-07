import papeN from '../assets/papeN.png'

const Card = ({ dataposts, datausers, posts }) => {
    // const [deletePost, setDeletePost] = useState(true)
    // console.log(posts); //array de posts
    // console.log(dataposts);
    //show the card and users content using props

    const removePost = (event) => {
         posts.filter(item => item.id !== event.target.value);
    }


    //I do a filter using id of datausers match with userId of dataposts, if is the same number then I use an object property .name of datausers in 0 position because you only clic in one of them
    return (
        <div className="container-card">
            <div className="content-card">
                <p className="user-card">{datausers.filter(user => user.id === dataposts.userId)[0].name}</p>
                <p className="title-card" >{dataposts.title}</p>
                <p className="body-card">{dataposts.body}</p>
                <div className="container-icon" onClick={removePost}  aria-label="Click"> 
                    <img src={papeN} alt="garbage icon" className="garbage-icon" />
                </div>
            </div>
        </div>
    )
}

export default Card
