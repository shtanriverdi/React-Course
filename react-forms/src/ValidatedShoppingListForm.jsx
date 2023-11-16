import { useState } from "react";

export default function ValidatedShoppingListForm({ addItem }) {
    const [formData, setFormData] = useState({
        product: "",
        quantity: 0
    });

    const [productIsValid, setProductIsValid] = useState(false);

    const validate = (product) => {
        if (product.length === 0) {
            return setProductIsValid(false);
        }
        setProductIsValid(true);
    }

    const handleChange = (event) => {
        // validate(); // This won't work as expedted
        // Because 'formData.product' is not updated yet! 
        // It will be updated after render

        // We can get the string from event directly without waiting render
        if (event.target.name === 'product') {
            validate(event.target.value);
        }
        const name = event.target.name;
        const value = event.target.value;
        setFormData((currFormData) => {
            return { ...currFormData, [name]: value };
        });
    }

    // Add an intermediate callback for addItem
    const handleSubmit = (event) => {
        event.preventDefault();
        if (productIsValid) {
            addItem(formData);
            // Reset form after submission
            setFormData({
                product: "",
                quantity: 0
            });
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="product">Product</label>
            <input
                type="text"
                placeholder="Product name"
                name="product"
                id="product"
                value={formData.product}
                onChange={handleChange}
            /><br />

            {!productIsValid && <small style={{color: 'orange'}}>Product name cannot be empty!</small>}

            <br />
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