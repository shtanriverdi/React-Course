import { useState } from "react";

export default function UsernameForm() {
    const [username, setUsername] = useState("Melogenesis");
    const updateUsername = (event) => {
        // 'event.target' refers to the input
        setUsername(event.target.value)
    }
    return (
        <div>
            {/* Controlled Input by React
            We set the value on the input to be 'username'
            in our state! This is the key part, we bind this
            input with the state */}
            <input
                value={username}
                type="text"
                placeholder="username"
                onChange={(event) => updateUsername(event)}
            />
            <button>Submit</button>
        </div>
    );
}