const axios = require('axios');

const httpClientPlugin = {

    get: async (url) => {
        try {
            const { data } = await axios.get(url);
            return data;
        } catch {
            throw new Error(`Error al consultar ${url}`);
        }
    },
    post: async url => {
        
    }
}

module.exports = { 
    http: httpClientPlugin
};