import { useState, useEffect, } from 'react';
import axios from 'axios';
import { USA_API_KEY, RAPID_API_KEY } from '@env';

const useFetch = async () => {
    // console.log('endpoint: ', endpoint);



    const fetchData = async () => {
        const options = {
            method: 'GET',
            url: `https://jsearch.p.rapidapi.com/${endpoint}`,
            params: { ...query }
            // query: 'web developer',
            // page: '1',
            // num_pages: '1',
            // date_posted: 'week'
            ,
            headers: {
                'x-rapidapi-key': RAPID_API_KEY,
                'x-rapidapi-host': 'jsearch.p.rapidapi.com'
            }
        };
        setLoading(true);
        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setLoading(false);
        } catch (error) {
            setError(error);
            alert("There was an error fetching data");
        }
        finally {
            setLoading(false);
        }
    };
    const usaFetch = () => {
        console.log('USA_API_KEY: ', USA_API_KEY);
        const host = 'data.usajobs.gov';
        const userAgent = 'zinzunmichael@gmail.com';
        const authKey = USA_API_KEY;
        // setLoading(true);
        // try {
        const response = axios.request(
            {
                url: 'https://data.usajobs.gov/api/search?PositionTitle=Web%Developer&Keyword=Web  Developer&LocationName=Los%Angeles,%California',
                method: 'GET',
                headers: {
                    "Host": host,
                    "User-Agent": userAgent,
                    "Authorization-Key": authKey
                }
            }).then((response) => {
                console.log('response: ', response.data);
                setData(response.data);

                setLoading(false);
                // return { data, loading, error, refetch };
            })
            // const result = response.data
            // setData(result.data);
            // console.log('response2: ', data);
            // setLoading(false);
            // const data2 = [...response.data.SearchResult.SearchResultItems];
            // return { data2, loading, error, refetch };
            // setData(response.data.data);

            .catch((error) => {
                setError(error);
                alert("There was an error fetching data");
            }
            );
    }
    useEffect(() => {
        usaFetch();
        // fetchData();
    }, []);
    const refetch = () => {
        setLoading(true);
        // fetchData();
        usaFetch();

    }
    console.log('response2: ', data);
    return { data, loading, error, refetch };
};

export default useFetch;
