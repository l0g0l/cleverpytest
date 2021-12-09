
const Select = ({ setuserfilter, datausers }) => {

    const handleChange = (event) => {

        setuserfilter(event.target.value)
    }

    //doing this .map of datausers show in the echa option  the name of de user
    return (
        <>
            <div className="container-label">
                <p className="label-txt">Do you want to see every users and their posts?</p>
                    <p>Pull down the menu and select one of them</p>
                 
            </div>
            <div className="select">
                <select name="users" id="users" onChange={handleChange}>
                    <option value="All" className="option1">All</option>
                    {datausers.map((item => {
                        return (
                            <option style={{color: item.color}} value={item.id} key={item.id}>{item.name}</option>
                        )
                    }))}
                </select>
            </div>
   
        </>
    )
}

export default Select
