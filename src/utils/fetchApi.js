import axios from "axios";

const URL = 'https://youtube-v3-alternative.p.rapidapi.com/video';
const options = {
    // params: { id: 'dQw4w9WgXcQ' },
    headers: {
        'X-RapidAPI-Key': 'c551de085cmsh977040e7bff3248p1a6294jsn44053bf4275a',
        'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
    }
};

export const fetchApi = async (url) => {
    try {
        const { data } = await axios.get(`${URL}/${url}`, options);
        return data;
    } catch (error) {
        // Handle the error here, e.g., log it or display an error message
        console.error('Error fetching API:', error);
        throw error; // Rethrow the error to propagate it to the caller
    }
};

// const options = {
//     method: 'GET',
//     url: 'https://youtube-v3-alternative.p.rapidapi.com/video',
//     params: { id: 'dQw4w9WgXcQ' },
//     headers: {
//         'X-RapidAPI-Key': 'c551de085cmsh977040e7bff3248p1a6294jsn44053bf4275a',
//         'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
//     }
// };

// try {
//     const response = await axios.request(options);
//     console.log(response.data);
// } catch (error) {
//     console.error(error);
// }