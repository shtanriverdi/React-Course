import { useState } from "react";
import ShoppingListForm from './ShoppingListForm';

function ShoppingList() {
    const [items, setItems] = useState(
        [
            {
                id: 1,
                product: "Bananas",
                quantity: 8
            },
            {
                id: 2,
                product: "Eggs",
                quantity: 2
            }
        ]
    );

    const addItem = (item) => {
        setItems((prevItems) => {
            return [...prevItems, {...item, id: 9} ];
        });
    }

    return (
        <div>
            <h1>Shopping List</h1>
            <ul>
                {items.map(i => <li key={i.id}>{i.product} - {i.quantity}</li>)}
            </ul>
            <ShoppingListForm addItem={addItem} />
        </div>
    );
}

export default ShoppingList;