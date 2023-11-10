export default function Greeter({ person = 'everyone', from = 'anonymous' }) {
    // const { person } = props;
    return (
        <>
            <h1>Hi there {person}!</h1>
            <h2>from - {from}!</h2>
        </>
    );
}