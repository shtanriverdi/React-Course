function ShoppingListItem({ item, quantity, completed }) {
    const style = {
        color: completed ? 'grey' : 'black',
        textDecoration: completed ? 'line-through' : 'none'
    };
    return (
        <li style={style}>
            {item} - {quantity}
        </li>
    );
}

export default ShoppingListItem;
