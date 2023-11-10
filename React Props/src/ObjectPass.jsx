// export default function ObjectPass({ info }) {
export default function ObjectPass(passedObject) {
    const { a, b, c } = passedObject.info;
    // const { a, b, c } = info;
    return (
        <>
            <h3>Object Desctruction</h3>
            <h2>{a}</h2>
            <h2>{b}</h2>
            <h2>{c}</h2>
        </>
    );
}
