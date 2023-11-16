import { useState } from "react";

export default function ShoppingListForm({ addItem }) {
    const [formData, setFormData] = useState({
        product: "",
        quatity: 0
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData((currFormData) => {
            return { ...currFormData, [name]: value };
        });
    }

    // Add an intermediate callback for addItem
    const handleSubmit = (event) => {
        event.preventDefault();
        addItem(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Product is {formData.product} and Quantity: {formData.quantity}</h1>
            <label htmlFor="product">Product</label>
            <input
                type="text"
                placeholder="Product name"
                name="product"
                id="product"
                value={formData.product}
                onChange={handleChange}
            />
            <label htmlFor="quantity">Quantity</label>
            <input
                type="number"
                placeholder="1"
                name="quantity"
                id="quantity"
                value={formData.quantity}
                onChange={handleChange}
            />
            <button>Add Item</button>
        </form>
    );
}