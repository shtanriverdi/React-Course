import { useState } from "react";

/* Use Computed Property Names in JS

This 'mystery' won't turn into a varible actually
{ mystery: "OLMADI" }
Output: {mystery: 'OLMADI'}

We can use brackets and put the variable inside!
{
    [mystery]: "OLDUUU!!"
}
Output:  {genesis: 'OLDUUU!!'}
*/

export default function BetterSignupForm() {
    const [formData, setformData] = useState({
        firstName: "",
        lastName: "",
        password: ""
    });

    // Better Version
    const handleChange = (event) => {
        const changedField = event.target.name;
        const newValue = event.target.value;
        setformData((currData) => {
            return { ...currData, [changedField]: newValue };
        });
    }

    // const handleChange = (event) => {
    //     const changedField = event.target.name;
    //     const newValue = event.target.value;
    //     setformData((currData) => {
    //         currData[changedField] = newValue;
    //         return {...currData};
    //     });
    // }

    const handleSubmit = () => {
        console.log(formData);
    }

    return (
        <div>
            <label htmlFor="firstname">First Name:</label>
            <input
                id="firstname"
                value={formData.firstName}
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
            />

            <label htmlFor="lastName">Last Name:</label>
            <input
                id="lastName"
                value={formData.lastName}
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
            />

            <label htmlFor="password">Password:</label>
            <input
                id="password"
                value={formData.password}
                type="password"
                placeholder="Password"
                onChange={handleChange}
                name="password"
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}