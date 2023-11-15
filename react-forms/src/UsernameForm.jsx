import { useState } from "react";

export default function UsernameForm() {
    const [username, setUsername] = useState("Melogenesis");
    // React is controlling this component and automatically
    // passes the event objects
    const updateUsername = (event) => {
        // 'event.target' refers to the input
        setUsername(event.target.value);
    }
    return (
        <div>
            {/* Controlled Input by React
            We set the value on the input to be 'username'
            in our state! This is the key part, we bind this
            input with the state */}
            <label htmlFor="username">Username:</label>
            <input
                id="username"
                value={username}
                type="text"
                placeholder="username"
                onChange={updateUsername}
            />
            <button>Submit</button>
        </div>
    );
}