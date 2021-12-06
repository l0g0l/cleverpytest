
const Select = ({ setuserfilter, datausers }) => {

    const handleChange = (event) => {
        console.log(event)

        setuserfilter(event.target.value)
    }


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
