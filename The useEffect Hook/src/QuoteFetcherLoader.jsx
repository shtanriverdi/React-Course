import { useState, useEffect } from "react";
import "./Loader.css";

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
            /*
            This means that if you call multiple setState functions consecutively
             within the same synchronous context
             (such as within an event handler or the body of a function), 
             React will batch those updates and perform a single re-render.
            */
        }

        fetchQuote();

    }, []);


    return (
        <div>
            <h3 className="Loader" style={{ opacity: isLoading ? 1 : 0 }}>Quote is loading...</h3>
            <h1>Random Quote</h1>
            <h2>{quote.text}</h2>
            <i>{quote.author}</i>
            <br />
            <hr />
            {/* <button onClick={fetchQuote}>Get Quote</button> */}
        </div>
    );
}