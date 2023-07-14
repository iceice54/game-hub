import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'bbc6c273204a43a188f00bcc880a87cc'
    }
})