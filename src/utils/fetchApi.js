import axios from "axios";
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
    url: 'https://youtube-v31.p.rapidapi.com/captions',
    params: {
        maxResults: 20,
    },
    headers: {
        'X-RapidAPI-Key': 'c551de085cmsh977040e7bff3248p1a6294jsn44053bf4275a',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};
export const fetchApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
};
