function ColorList({ colors }) {
    // const elements = [<p>Hello!</p>, <h2>Bye</h2>, <input type="password"/>];
    // const lis = colors.map(color => <li>{color}</li>);
    return (
        <div>
            <p>Color List</p>
            <p>{colors}</p>
            <ul>
                {colors.map(c => (
                    <li style={{ color: c }}>{c}</li>
                    // <li style={{ c }}>{c}</li>
                ))}
            </ul>
        </div>
    );
}

export default ColorList;