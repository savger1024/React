

function ListGroup() {
    const items = [
        'New York',
        'London',
        'Paris',
        'Miami',
        'Rome',
        'Budapest'
    ];

    return (
    <>
        <h1>List</h1>
        <ul className="list-group">
            {items.map((item) => (
                <li key={item}>{item}</li>
                ))}
        </ul>
    </>
    );
}

export default ListGroup;