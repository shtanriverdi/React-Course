function handleFormSubmit(event) {
    event.preventDefault();
    // Stop refreshing the page on form submission
    console.log("Form Submitted");
}

export default function Form() {
    return (
        <form onSubmit={handleFormSubmit}>
            <button>Submit</button>
        </form>
    );
}