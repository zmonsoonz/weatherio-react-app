import { useState, useCallback } from "react";

export const useFetch = () => {
    // const [process, setProcess] = useState('waiting')

    const request = useCallback(async (url:string, method = 'GET', body = null, headers = {'Content-type' : 'application/json'}) => {
        // setProcess('loading');
        try {
            const responce = await fetch(url, {method, body, headers});
            if (!responce.ok) {
                throw new Error(`Error, status: ${responce.status}`);
            }
            const data = await responce.json();
            return data
        } catch(e) {
            // setProcess('error');
            throw e;
        }
    }, []);

    // const clearError = useCallback(() => {
    //     // setProcess('loading');
    // }, []);

    return {request}
}