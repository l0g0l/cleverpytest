
const Select = ({ setuserfilter, datausers }) => {

    const handleChange = (event) => {

        setuserfilter(event.target.value)
    }

    //doing this .map of datausers show in the echa option  the name of de user
    return (
        <div>
            <select name="users" id="users" onChange={handleChange}>
                <option value="all">All</option>
                {datausers.map((item => {
                    return (
                        <option value={item.id} key={item.id}>{item.name}</option>
                    )
                }))}
            </select>
        </div>
    )
}

export default Select
