import { useState, useEffect } from "react";

// Use proxy for CORS error
const proxy = "https://cors-anywhere.herokuapp.com/";
const RANDOM_QUOTE_URL = `https://zenquotes.io/api/today`;

export default function QuoteFetcher() {
    // Won't be happy with an async function!
    // It is not set up that way!
    // So after this useStatei state will be a promise!
    // Because of the async function!
    // Our data won't be loaded before its render
    // It's not gonna wait for async funct to return!
    // const [quote, setQuote] = useState(async function () {
    //     const response = await fetch(proxy + RANDOM_QUOTE_URL);
    //     const jsonResponse = await response.json();
    //     const text = jsonResponse[0].q;
    //     const author = jsonResponse[0].a;
    //     return [text, author];
    // });

    // const [quote, setQuote] = useState({
    //     // Won't be happy with an async function!
    //     // It is not set up that way!
    //     text: "",
    //     author: ""
    // });

    // Solution is to useEffect
    const [quote, setQuote] = useState({
        text: "",
        author: ""
    });

    // Will run only on initial mount once after render
    // 'useEffect' doesn't want us to provide async callback
    // So our callbacks has to be synchronous
    // But we can provide a regular synchronous function then pass
    // the asynchronous function in it
    useEffect(() => {
        // How Colt Steele Showed
        // Initialize async function here
        async function fetchQuoteInitializer() {
            const response = await fetch(proxy + RANDOM_QUOTE_URL);
            const jsonResponse = await response.json();
            const text = jsonResponse[0].q;
            const author = jsonResponse[0].a;
            setQuote({ text, author });
            // return [text, author];
        }
        fetchQuoteInitializer();

        // Or we can directly run your async func here
        // fetchQuote();
    }, []);

    async function fetchQuote() {
        const response = await fetch(proxy + RANDOM_QUOTE_URL);
        const jsonResponse = await response.json();
        const text = jsonResponse[0].q;
        const author = jsonResponse[0].a;
        setQuote({ text, author });
    }

    return (
        <div>
            <h1>Random Quote</h1>
            <h2>{quote.text}</h2>
            <i>{quote.author}</i>
            <br />
            <hr />
            <button onClick={fetchQuote}>Get Quote</button>
        </div>
    );
}