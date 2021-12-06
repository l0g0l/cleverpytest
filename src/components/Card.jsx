import papeN from '../assets/papeN.png'

const Card = ({ dataposts, datausers, posts }) => {
    // const [deletePost, setDeletePost] = useState(true)
    // console.log(posts); //array de posts
    // console.log(dataposts);
    //show the card and users content using props

    const removePost = () => {
        return posts.filter(item => item.id !== dataposts.id);
    }


    //I do a filter using id of datausers match with userId of dataposts, if is the same number then I use an object property .name of datausers in 0 position because you only clic in one of them
    return (
        <div className="container-card">
            <div className="content-card">
                <p>{datausers.filter(user => user.id == dataposts.userId)[0].name}</p>
                <p>{dataposts.title}</p>
                <p>{dataposts.body}</p>
                <button className="container-icon" onClick={() => removePost()} > 
                    <img src={papeN} alt="garbage icon" className="garbage-icon" />
                </button>
            </div>
        </div>
    )
}

export default Card
