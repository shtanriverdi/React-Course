export default function Greeter({ person = 'everyone', from = 'anonymous' }) {
// export default function Greeter(props) {
    // const { person } = props;
    // const { person, from } = props;
    // This "props" here is an object containing our passed data as a key
    return (
        <>
            <h1>Hi there {person}!</h1>
            <h2>from - {from}!</h2>
        </>
    );
}