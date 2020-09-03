import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:3000/movies",
    timeout: 30000,
  });

const apiAxios = {
    init: async () => {
        return instance.get("http://localhost:3000/movies").then((r) => r.data);
    },
    getData: async () => {
        return instance.get("http://localhost:3000/movies").then((r) => {return r.data});
    },
    getMovie: async (movieID) => {
        return instance.get("http://localhost:3000/movies/"+ movieID).then((r) => {return r.data});
    }
}

export default apiAxios;