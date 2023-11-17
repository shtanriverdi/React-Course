import { useState, useEffect } from "react";

const RANDOM_QUOTE_URL = `https://inspo-quotes-api.herokuapp.com/quotes/random`;

export default function QuoteFetcherLoader() {
    const [quote, setQuote] = useState({
        text: "",
        author: ""
    });

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        async function fetchQuote() {
            const response = await fetch(RANDOM_QUOTE_URL);
            const jsonResponse = await response.json();
            /* In React, state updates that occur 
            in the same synchronous block of code are batched together. */
            // These are batched together by react, ant they won't cause two times render
            setQuote(jsonResponse.quote);
            setIsLoading(false);
        }

        fetchQuote();

    }, []);


    return (
        <div>
            { isLoading && <h3><i style={{color: 'slategray'}}>Quote is loading...</i></h3> }
            <h1>Random Quote</h1>
            <h2>{quote.text}</h2>
            <i>{quote.author}</i>
            <br />
            <hr />
            {/* <button onClick={fetchQuote}>Get Quote</button> */}
        </div>
    );
}