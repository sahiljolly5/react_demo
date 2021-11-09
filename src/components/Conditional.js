const Conditional = ({isAdmin}) => {


    if(isAdmin) {
        return (
            <h1>Hello Admin</h1>
        )
    }

    return (
        <div>
            <h1>Hello User</h1>
        </div>
    )
}

export default Conditional
