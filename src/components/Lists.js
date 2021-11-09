const Lists = () => {

    const names = ['Aman','Rahul','Amit','Raj']

    return (
        <ul>
            {names.map(
                (name) => (<li>{name}</li>)
                 )}
        </ul>
    )
}

export default Lists
