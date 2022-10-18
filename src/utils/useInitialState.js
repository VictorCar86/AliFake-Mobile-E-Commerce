import { useEffect, useState } from 'react';
const axios = require("axios");

const useInitialState = () => {
    const [state, setState] = useState({})

    const infiniteProducts = (pageNum = 1) => {
        useEffect(() => {
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
                console.log(response.data);
                setState(
                    {...state, infiniteData: response.data}
                )
            }).catch(function (error) {
                console.error(error);
            });
        }, [])
    }

    if (!state.infiniteData){
        infiniteProducts()
    }

    return {
        state,
        infiniteProducts
    }
}

export default useInitialState