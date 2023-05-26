import axios from "axios";

const URL = 'https://youtube-v3-alternative.p.rapidapi.com/video';
const options = {
    params: { id: 'dQw4w9WgXcQ' },
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
    }
};

export const fetchApi = async (url) => {
    const { data } = await axios.get(`${URL}/${url}`, options);
    return data;
}
