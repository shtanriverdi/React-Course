export default function ListPicker({ values }) {
    const randIxd = Math.floor(Math.random() * values.length);
    const randElement = values[randIxd];
    return (
        <div>
            <p>The list of value: {values}</p>
            <p>Random element is {randElement}</p>
        </div>
    );
}