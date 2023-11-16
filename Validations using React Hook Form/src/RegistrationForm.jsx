import "./Form.css";
import { useForm } from 'react-hook-form';

export default function RegistrationForm() {
    // Set up the useForm state here
    const {
        // Registers all the input fields
        register,
        // "handleSubmit" will validate your inputs before invoking "onSubmit"
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    // What happens onSubmit
    const onSubmit = (formData) => {
        console.log("Form Submitted!");
        console.log(formData);
    };

    // Handles errors
    const handleError = (errors) => { console.log("Error:", errors) };

    const registerOptions = {
        name: { required: "Name is required!" },
        email: { required: "Email is required!" },
        password: {
            required: "Password is required!",
            minLength: {
                value: 7,
                message: "Password must be at least 7 characters!"
            }
        }
    };

    // watch input value by passing the name of it
    console.log(watch("name"));
    console.log(watch("email"));
    console.log(watch("password"));

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" 
            "handleSubmit" will only invoke "onSubmit" if it passes the validation test
        */
        <form onSubmit={handleSubmit(onSubmit, handleError)}>
            <label htmlFor="name">Name:</label>
            <input
                {...register("name", registerOptions.name)}
                id="name"
                type="text"
                name="name"
                placeholder="Name"
            />
            {/* errors will return when field validation fails */}
            {/* If the object accessed or function called using this operator is undefined or null, 
            the expression short circuits and evaluates to undefined instead of throwing an error. */}
            <small className="Warning">{errors?.name && errors?.name.message}</small>
            <br />

            <label htmlFor="email">Email:</label>
            <input
                {...register("email", registerOptions.email)}
                id="email"
                type="email"
                name="email"
                placeholder="email@something.com"
            />
            <small className="Warning">{errors?.email && errors?.email.message}</small>
            <br />

            <label htmlFor="password">Password:</label>
            <input
                {...register("password", registerOptions.password)}
                id="password"
                type="password"
                name="password"
                placeholder="password"
            />
            <small className="Warning">{errors?.password && errors?.password.message}</small>
            <br />

            <br />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <button type="submit">Submit</button>
        </form>
    );
}