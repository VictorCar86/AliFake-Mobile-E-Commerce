import { useEffect, useState } from 'react';
const axios = require("axios");

const initialState = {
    bestSalesData: {
        docs: [],
        hasNextPage: false,
        nextPage: 1,
        page: 0,
    },
    newOffersData: [],
};

const useInitialState = (number = 1) => {
    const [state, setState] = useState(initialState)

    const callNewOffersData = () => {
        console.log("new offers ->", state)
        const options = {
            method: 'GET',
            url: 'https://magic-aliexpress1.p.rapidapi.com/api/bestSales/SortedByNewest',
            params: {limit: '10'},
            headers: {
                'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
                'X-RapidAPI-Host': 'magic-aliexpress1.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            setState(prev => {
                return {
                    bestSalesData: prev.bestSalesData,
                    newOffersData: response.data,
                }
            })
        }).catch(function (error) {
            console.error(error);
        });
    }

    const callNewBestSalesData = (pageNum = 1) => {
        console.log("best sales ->", state)
        const options = {
            method: 'GET',
            url: 'https://magic-aliexpress1.p.rapidapi.com/api/bestSales/products',
            params: {page: pageNum, priceMax: '30', priceMin: '5', sort: 'EVALUATE_RATE_ASC'},
            headers: {
                'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
                'X-RapidAPI-Host': 'magic-aliexpress1.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            setState(prev => {
                return {
                    newOffersData: prev.newOffersData,
                    bestSalesData: {
                        docs: [...state.bestSalesData.docs, ...response.data.docs],
                        hasNextPage: response.data.hasNextPage,
                        nextPage: response.data.nextPage,
                        page: response.data.page,
                    }
                }
            })
        }).catch(function (error) {
            console.error(error);
        });
    }

    // useEffect(() => {
    //     callNewBestSalesData()
    //     callNewOffersData()
    // }, [number])


    return {
        state,
        callNewOffersData,
        callNewBestSalesData,
    }
}

export default useInitialState