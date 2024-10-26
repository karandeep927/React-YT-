import axios from 'axios'

const BASE_URL = "https://yt-api.p.rapidapi.com";

const options = {
    url:BASE_URL,
    params:{maxResults:'40'},
    headers: {
        'x-rapidapi-key': '2ffb796241msh285c49b7175fa5fp1a0596jsnf5e3ad7e9f37',
        'x-rapidapi-host': 'yt-api.p.rapidapi.com'
      }
}

export const fetchDataFromApi = async (url:string) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  };