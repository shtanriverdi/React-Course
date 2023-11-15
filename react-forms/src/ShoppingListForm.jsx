import { useState } from "react";

export default function ShoppingListForm() {
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

    return (
        <form>
            <label htmlFor="product">Product</label>
            <input
                type="text"
                placeholder="Product name"
                name="product"
                id="product"
                value={formData.product}
                onChange={handleChange}
            />
        </form>
    );
}