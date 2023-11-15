import { useState } from "react";

export default function SignupForm() {
    const [firstName, setFirstName] = useState("");
    const updateFirstName = (e) => setFirstName(e.target.value);

    const [lastName, setLastName] = useState("");
    const updateLastName = (e) => setLastName(e.target.value);

    const handleSubmit = (e) => {
        console.log(firstName, lastName);
    }

    return (
        <div>
            <label htmlFor="firstname">First Name:</label>
            <input
                id="firstname"
                value={firstName}
                type="text"
                placeholder="First Name"
                onChange={updateFirstName}
            />
            <label htmlFor="lastName">Last Name:</label>
            <input
                id="lastName"
                value={lastName}
                type="text"
                placeholder="Last Name"
                onChange={updateLastName}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}